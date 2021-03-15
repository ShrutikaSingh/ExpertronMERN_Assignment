import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';

class PostList extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderTags(tags) {
    return tags.map(tag => {
      return <span className="badge badge-info span-with-margin" key={tag}>{tag}</span>;
    });
  }

  renderPostSummary(post) {
    return (
      <div key={post._id}>
        <h4>
        Task : 
          <Link className="link-without-underline span-with-margin" to={`/posts/${post._id}`}>
            {post.title}
          </Link> 
          
        </h4>
        <h6>Category : {this.renderTags(post.categories)}</h6>
        <span className="span-with-margin text-grey"> Date published : {new Date(post.time).toLocaleString()}</span>
        <hr />
      </div>
    );
  }

  render() {
    // console.log(this.props.posts);
    return (
      <div className="post">
        <Link className="btn btn-primary mb-5" to={'/posts/new'}>Create A New Task</Link>
        {_.map(this.props.posts, post => {
          return this.renderPostSummary(post);
        })}
        <h3><b>Note : Click on the Task Name to update and delete them.</b></h3>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);