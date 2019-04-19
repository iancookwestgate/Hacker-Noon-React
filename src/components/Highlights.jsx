import React from 'react';
import Post from './Post';

const masterPostList = [
  {
    img: 'https://cdn-images-1.medium.com/max/1800/1*ZGd4E71dc7WrZKdEkTPC6g.png',
    title: 'Why content, not tech, is king in podcasting',
    description: "A look at Spotify's recent acquisitions, and the upcoming launch of Luminary",
    profile: 'https://cdn-images-1.medium.com/fit/c/60/60/0*xTH4DWr-DQG1YwxG.',
    name: 'Justine and Olivia Moore',
    dateRead: 'Apr 19 - 9 min read'
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
        <Post img={post.img}
          title={post.title}
          description={post.description}
          profile={post.profile}
          name={post.name}
          dateRead={post.dateRead}
          key={index}/>
      )}
    </div>
  );
}

export default Highlights;
