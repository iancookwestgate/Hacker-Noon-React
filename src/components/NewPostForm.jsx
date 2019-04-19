import React from 'react';

function NewPostForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='title'
          placeholder='Post Title'/>
        <input
          type='text'
          id='author'
          placeholder='Post Author'/>
        <textarea
          id='details'
          placeholder='Post Details'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewPostForm;
