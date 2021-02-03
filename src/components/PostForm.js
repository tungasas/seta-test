import React, { useState } from 'react';

function PostForm() {
  const [userId, setUserId] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  return (
    <div className='postForm'>
      <label htmlFor='form-userid'>User ID:</label>
      <input
        type='number'
        id='form-userid'
        value={userId}
        onChange={(e) => {
          setUserId(e.target.value);
        }}
      />
      <label htmlFor='form-posttitle'>Post title:</label>
      <input
        type='text'
        id='form-posttitle'
        value={postTitle}
        onChange={(e) => {
          setPostTitle(e.target.value);
        }}
      />
      <label htmlFor='form-postbody'>Post body:</label>
      <textarea
        id='form-postbody'
        onChange={(e) => {
          setPostBody(e.target.value);
        }}
      >
        {postBody}
      </textarea>
      <input type='button' value='Create Post' />
    </div>
  );
}

export default PostForm;
