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
    img: 'https://cdn-images-1.medium.com/max/800/1*yO55I62E90zoxufpr1vX8A.png',
    title: 'Big Data and Machine Learning with Nick Caldwell',
    description: "Episode 39 of the Hacker Noon Podcast: An interview with Nick Caldwell CPO at Looked and former VP of engineering at Reddit.",
    profile: 'https://cdn-images-1.medium.com/fit/c/60/60/1*JieNwiCqpUvMBcXh_NjPiw.jpeg',
    name: 'Hackernoon',
    dateRead: 'Apr 18 - 2 min read'
  },
  {
    img: 'https://cdn-images-1.medium.com/max/1200/1*Rk5glLCw-cPoyDW7S2GY4w.jpeg',
    title: 'Upgrade Driven Development',
    description: "or: How I Learned to Stop Worrying and Love Immutable Code",
    profile: 'https://cdn-images-1.medium.com/fit/c/60/60/1*Nck_fsajfhgK7SJ_w_4-1g.jpeg',
    name: 'Dennison Bertram',
    dateRead: 'Apr 19 - 6 min read'
  },
  {
    img: 'https://cdn-images-1.medium.com/max/800/1*ZGK1PbAgmpMHTEty9WKTMQ.jpeg',
    title: 'How to Hire a Python Developer With Right Skill Set?',
    description: 'Bram Cohen has beautifully crafted Python language in a nutshell, as "simple, clean syntax, object encapsulation, good library support and...',
    profile: 'https://cdn-images-1.medium.com/fit/c/60/60/2*NQjXxGOv3w7SnNC_XW37nQ.png',
    name: 'Jessica John',
    dateRead: 'Apr 19 - 5 min read'
  },
  {
    img: 'https://cdn-images-1.medium.com/max/800/1*edQb5w85Z5FKM8Y7Fb3kbw.jpeg',
    title: 'Some Thoughts About Security Token Networks [Part II]',
    description: 'This is the second part of an article that explore ideas about the emerging field of security token networks. The first part discussed...',
    profile: 'https://cdn-images-1.medium.com/fit/c/60/60/1*9hmRpqiPP9vEjlGS2AJnaw.jpeg',
    name: 'Jesus Rodriguez',
    dateRead: 'Apr 19 - 6 min read'
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
