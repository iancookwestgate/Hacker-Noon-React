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
    img: 'https://cdn-images-1.medium.com/max/1200/0*KVU0OYlLni3UCGlq',
    title: 'The Comics Story of Exodus (Startups Version)',
    profile: 'https://cdn-images-1.medium.com/fit/c/60/60/1*PQr4O7xHtDgwHcV1AuBs6w.jpeg',
    name: 'Yonatan Kagansky',
    dateRead: 'Apr 19 - 2 min read'
  },
  {
    img: 'https://cdn-images-1.medium.com/max/2560/0*UWZx0VIXkujrppzH',
    title: 'Influencing Special Education with Wearable Intelligence',
    description: "All the children in the world have the right to be educated. No matter where they come from, what their family background is, it is a must...",
    profile: 'https://cdn-images-1.medium.com/fit/c/60/60/2*N6B42O-EsaAM816aUc8Rcg.jpeg',
    name: 'Gethma Perera',
    dateRead: 'Apr 19 - 8 min read'
  },
  {
    img: 'https://cdn-images-1.medium.com/max/1600/0*r4Lgm_kBbXg24TnL',
    title: 'The Five Most Historically Significant Virtual Characters',
    description: "This is part of a series I'm writing to celebrate the release of my book, The Simulation Hypothesis: An MIT Computer Scientist Shows Why...",
    profile: 'https://cdn-images-1.medium.com/fit/c/60/60/0*gKmKvRAszpMgIVce.jpeg',
    name: 'Riz Virk',
    dateRead: 'Mar 31 - 10 min read'
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
