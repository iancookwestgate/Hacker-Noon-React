import React from 'react';
import Post from './Post';

const masterPostList = [
  {
    title: 'Thato and Haley',
    author: '3A',
    details: 'Firebase won\'t save record. Halp.'
  },
  {
    title: 'Sleater and Kinney',
    author: '4B',
    details: 'Fox image not displaying on page, can only see duck?'
  },
  {
    title: 'Imani & Jacob',
    author: '9F',
    details: 'Donkey picture not displaying on hover in Zoology app. :('
  },
  {
    title: 'Thato and Haley',
    author: '3A',
    details: 'Firebase won\'t save record. Halp.'
  },
  {
    title: 'Sleater and Kinney',
    author: '4B',
    details: 'Fox image not displaying on page, can only see duck?'
  },
  {
    title: 'Imani & Jacob',
    author: '9F',
    details: 'Donkey picture not displaying on hover in Zoology app. :('
  },
  {
    title: 'Thato and Haley',
    author: '3A',
    details: 'Firebase won\'t save record. Halp.'
  },
  {
    title: 'Sleater and Kinney',
    author: '4B',
    details: 'Fox image not displaying on page, can only see duck?'
  },
  {
    title: 'Imani & Jacob',
    author: '9F',
    details: 'Donkey picture not displaying on hover in Zoology app. :('
  }
];

function Highlights(){
  return (
    <div>
      <hr/>
      <h1>This is the Highlights component</h1>
      {masterPostList.map((post, index) =>
        <Post title={post.title}
          author={post.author}
          details={post.details}
          key={index}/>
      )}
    </div>
  );
}

export default Highlights;
