import React, { Component } from 'react';
import Comment from './Comment';
import styled from 'styled-components';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'

const PostContainer = styled.div`
    background-color: #fff;
    width: 95vw;
    max-width: 600px;
    margin: 20px auto;
    border: 1px solid #e6e6e6;
`;

const PostUser = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 16px;
    img{
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }
    span{
    padding-left: 5px;
    font-weight: bold;
  }
`;

const PostContent = styled.div`
    img{
    max-width: 600px;
    margin: 0 auto;
  }
`;

const PostInfo = styled.div`
  padding: 5px 16px;
`;

class Post extends Component{

  render(){
    const { post } = this.props;
    return(
      <PostContainer>
        <PostUser>
          <img src={post.user.profile_pic} alt={post.user.username} />
          <p>{post.user.username}</p>
        </PostUser>
        <PostContent>
          <img src={post.image.url} />
        </PostContent>
        <PostInfo>
          <p>{post.caption}</p>
        <div>
          <FaHeartO />
          <FaCommentO />
        </div>
        <p>{post.likes.length} likes</p>
        {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
        </PostInfo>
      </PostContainer>
    )
  }
}

export default Post;