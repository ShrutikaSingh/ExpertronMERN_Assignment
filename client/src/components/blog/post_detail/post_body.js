import React, { Component } from 'react';

class PostBody extends Component {

  renderTags(tags) {
    return tags.map(tag => {
      return <span className="badge badge-info span-with-margin" key={tag}>{tag}</span>;
    });
  }

  render() {

    const {post} = this.props;

    // for displaying inner html: https://facebook.github.io/react/docs/dom-elements.html
    return (
      <div>
        <h1>Task Name : {post.title}</h1>
        {this.renderTags(post.categories)}
        <span className="span-with-margin"> • </span>
        <span className="span-with-margin">{new Date(post.time).toLocaleString()}</span>
        <hr />
        <div className="text-justify" dangerouslySetInnerHTML={{ __html: post.content }} />
        <hr />
      </div>
    );
  }
}

export default PostBody;