import React, { Component } from 'react';
import Comment from './Comment';
import styled from 'styled-components';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'

const PostContainer = styled.div`
<<<<<<< HEAD
  background-color: #fff;
  border-radius: 3px;
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
=======
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
>>>>>>> starter-code
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }
<<<<<<< HEAD
  span{
=======
    span{
>>>>>>> starter-code
    padding-left: 5px;
    font-weight: bold;
  }
`;

const PostContent = styled.div`
<<<<<<< HEAD
  img{
=======
    img{
>>>>>>> starter-code
    max-width: 600px;
    margin: 0 auto;
  }
`;

const PostInfo = styled.div`
  padding: 5px 16px;
`;

<<<<<<< HEAD
const PostActions = styled.div`
  svg{
    padding: 5px;
  }
`

=======
>>>>>>> starter-code
class Post extends Component{

  render(){
    const { post } = this.props;

    const likes = post.likes.reduce((prev, curr, index) => {
      if (index === 0){
        return `${curr.username}`;
      } else if (index === post.likes.length -1){
        return `${prev} and ${curr.username}`;
      } else {
        return `${prev}, ${curr.username}`;
      }
    },"");
    return(
      <PostContainer>
        <PostUser>
          <img src={post.user.profile_pic} alt={post.user.username} />
<<<<<<< HEAD
          <span>{post.user.username}</span>
=======
          <p>{post.user.username}</p>
>>>>>>> starter-code
        </PostUser>
        <PostContent>
          <img src={post.image.url} />
        </PostContent>
        <PostInfo>
          <p>{post.caption}</p>
<<<<<<< HEAD
          <PostActions>
            <FaHeartO size={35} />
            <FaCommentO size={35} />
          </PostActions>
          <p><strong>{likes}</strong> like this</p>
          {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
=======
        <div>
          <FaHeartO />
          <FaCommentO />
        </div>
        <p>{post.likes.length} likes</p>
        {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
>>>>>>> starter-code
        </PostInfo>
      </PostContainer>
    )
  }
}

export default Post;