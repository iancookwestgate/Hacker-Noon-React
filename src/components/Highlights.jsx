import React, {Component, Fragment } from 'react';
import { render } from "react-dom";
import Post from './Post';
import SignUp from './SignUp';
import '../scss/styles.scss';

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
  },
  {
    img: 'https://cdn-images-1.medium.com/max/1500/1*XZqB-CWBNggoSfG2zNBp5w.png',
    title: 'The Innards of an ERC20 Token',
    description: 'What does this mean?',
    profile: 'https://cdn-images-1.medium.com/fit/c/45/45/1*6n1AQGkZORbfkRjl5E0rHA.jpeg',
    name: 'Winfred K. Mandela',
    dateRead: 'Apr 19 - 4 min read'
  },
  {
    img: 'https://cdn-images-1.medium.com/max/1500/1*IKnSi5-_qI9MWABbQ4OPQQ.jpeg',
    title: "What's the Number One Concern Keeping Hotel Group CIOs Up at Night?",
    description: "People trust us to allow them to sleep safely and securely. There's a longstanding tradition of an innkeeper, that we fulfill that...",
    profile: 'https://cdn-images-1.medium.com/fit/c/45/45/1*N2Pvx-PAIdPZ8FUDlRWh0A.png',
    name: 'DataArt',
    dateRead: 'Apr 19 - 4 min read'
  },
  {
    img: 'https://cdn-images-1.medium.com/max/1000/1*4zp4o4GUMVr9j9-Kj7zgmg.jpeg',
    title: 'Are ICOs Completely Losing the Game to IEOs?',
    description: "With Initial Exchange Offerings (IEOs) rapidly emerging as a popular crypto fundraising scheme, here's a look into where the ICO market is...",
    profile: 'https://cdn-images-1.medium.com/fit/c/45/45/1*BxIfL7OoVkZ7Dv4euXzHcw.gif',
    name: 'Andrey Sergeenkov',
    dateRead: 'Apr 19 - 3 min read'
  },
  {
    img: 'https://cdn-images-1.medium.com/max/1000/1*GW0wgVwoYlOyQe_WM9mXuQ.png',
    title: 'Meet the New Hacker Noon Editors',
    description: "Our goal is to be the best place for tech professionals to publish. I'd like to introduce you to four new Hacker Noon Staff Editors",
    profile: 'https://cdn-images-1.medium.com/fit/c/45/45/1*gzE5Zhui75ROoc_VFQoG7w.jpeg',
    name: 'David Smooke',
    dateRead: 'Feb 22 - 3 min read'
  },
  {
    img: 'https://cdn-images-1.medium.com/max/1500/1*oaE3F4HrPiGLDOr4ifMZGw.png',
    title: 'How to Contribute a Story to Hacker Noon',
    description: "We've revamped our story submission process. Stories@HackerNoon.com will remain an available open line for contributors, but in order to...",
    profile: 'https://cdn-images-1.medium.com/fit/c/45/45/1*gzE5Zhui75ROoc_VFQoG7w.jpeg',
    name: 'David Smooke',
    dateRead: 'Jan 29 - 3 min read'
  },
  {
    img: 'https://cdn-images-1.medium.com/max/1500/0*tnO39IDCkr3ZgCoE',
    title: 'Where Hackers Hang Out',
    description: 'Hackernoon Community Enters Public Beta',
    profile: 'https://cdn-images-1.medium.com/fit/c/45/45/1*gzE5Zhui75ROoc_VFQoG7w.jpeg',
    name: 'David Smooke',
    dateRead: 'Mar 25 - 3 min read'
  },
  {
    img: 'https://cdn-images-1.medium.com/max/1000/1*Wzq7ZLT1PUi37RrzG1LlOA.jpeg',
    title: 'Shamir Secret Sharing vs Multi-sig',
    description: 'After the beta launch of Coinsafe, many people asked me how does Shamir secret sharing compare to a multi-sig based approach for securing...',
    profile: 'https://cdn-images-1.medium.com/fit/c/45/45/1*ChbRSGsIuDR72QlmoIWroA.png',
    name: 'Arnav Vohra',
    dateRead: 'Apr 19 - 5 min read'
  },
  {
    img: 'https://cdn-images-1.medium.com/max/1000/1*yxSNpfJeTvXs0urhhfT2Og.jpeg',
    title: 'The Best Whiteboard Interview Advice I Ever Received',
    description: "Whiteboard-style interviews are ubiquitous in the tech industry. For those who have not had the pleasure, whiteboard interviewing is the...",
    profile: 'https://cdn-images-1.medium.com/fit/c/45/45/1*tZXMb_y-vvbhULjm2OBD8Q.jpeg',
    name: 'Nick Scialli',
    dateRead: 'Mar 25 - 8 min read'
  },
  {
    img: 'https://cdn-images-1.medium.com/max/1000/0*NjfV1sK9fyXdDX5I',
    title: 'Which Region will be the First to Become Entirely Cashless',
    description: "If you're confident enough to leave your wallet at home and rely only on your credit card or mobile device when taking a taxi, getting a...",
    profile: 'https://cdn-images-1.medium.com/fit/c/45/45/0*hK319HUgfiC-pTrl.',
    name: 'Kirill Shilov',
    dateRead: 'Mar 29 - 7 min read'
  },
  {
    img: 'https://cdn-images-1.medium.com/max/2600/1*lP2iTpnk-wdnDHZkW_8FeQ.png',
    title: 'Privacy: What You Need To Know',
    description: "If you share something with more than 5 people, you should not consider it private anymore. This is Entropy's Law of Privacy, known as...",
    profile: 'https://cdn-images-1.medium.com/fit/c/45/45/1*MlXYRMGcn7PP_GBBitNJAw.jpeg',
    name: 'Mark Nadal',
    dateRead: 'Mar 27 - 4 min read'
  },
  {
    img: 'https://cdn-images-1.medium.com/max/1000/1*tRltsIBoqXOBo19UjNRUXw.png',
    title: 'The Ultimate Guide to Building a Portfolio of Digital Assets Without Investing a Dime',
    description: "Easy, Free, and Quick Gateways to the Land of Crypto",
    profile: 'https://cdn-images-1.medium.com/fit/c/63/63/1*Kytzr0vjBeyFCFQTomKuSg.jpeg',
    name: 'BlockchainAuthor',
    dateRead: 'Apr 18 - 20 min read'
  },
  {
    img: 'https://cdn-images-1.medium.com/max/1500/1*cVvZ4wOI2bqh8MiMssn5Bw.jpeg',
    title: 'How to Interpret a Contour Plot',
    description: "Visualize 3D Surface in 2D Contour Plot",
    profile: 'https://cdn-images-1.medium.com/fit/c/63/63/0*SFh9ZOvydHZUcdDe.jpg',
    name: 'Niranjan Kumar',
    dateRead: 'Apr 18 - 8 min read'
  },
  {
    img: 'https://cdn-images-1.medium.com/max/1500/1*ycz60LeU-_rFwvr1EkH8qA.png',
    title: 'Send Images and Files via WhatsApp Using Ruby',
    description: "With the Twilio API for WhatsApp we can send messages to WhatsApp numbers. Those messages can be plain text or include files like images...",
    profile: 'https://cdn-images-1.medium.com/fit/c/45/45/1*9wJhZy7dY04snNg2u9KwBA.jpeg',
    name: 'Phil Nash',
    dateRead: 'Apr 18 - 3 min read'
  },
  {
    img: 'https://cdn-images-1.medium.com/max/1500/1*5DysIAP4cUrynIVQD_NFbg.jpeg',
    title: 'The State of The DAOs',
    description: "Let's take a walk through the most notable Decentralised Autonomous Organisations (DAOs) in the past, present and near future",
    profile: 'https://cdn-images-1.medium.com/fit/c/45/45/1*nx-QwjG6KQ52Ephv-Yajvw.jpeg',
    name: 'Vu Gaba Vineb',
    dateRead: 'Apr 17 - 18 min read'
  },
  {
    img: 'https://cdn-images-1.medium.com/max/1500/0*g2eNpyogLzT1_O5K.jpg',
    title: 'The Life-Changing Magic of Compounding Knowledge',
    description: "The strongest force in the universe is Compound Interest. - Albert Einstein",
    profile: 'https://cdn-images-1.medium.com/fit/c/45/45/1*EgvzytvLU3bTFcfIExUnEQ.jpeg',
    name: 'Thomas Moran',
    dateRead: 'Apr 17 - 7 min read'
  },
];

class Highlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      hasMore: true,
      isLoading: false,
      users: [],
    };

    window.onscroll = () => {
      const {
        loadIt,
        state: {
          error,
          isLoading,
          hasMore,
        },
      } = this;

      if (error || isLoading || !hasMore) return;

      if (
        window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
      ) {
        loadIt();
      }
    };
  }

  componentWillMount() {
    this.loadIt();
  }

  loadIt = () => {
    this.setState({ isLoading: true }, () =>
      {masterPostList.map((post, index) =>
        <Post img={post.img}
          title={post.title}
          description={post.description}
          profile={post.profile}
          name={post.name}
          dateRead={post.dateRead}
          key={index}/>
      )}
      this.setState({
        hasMore: (this.state.posts.length < 6),
        isLoading: false,
        posts: [
          ...this.state.users,
          ...nextUsers,
        ],
      });
    })
  }

  render () {
    const {
      error,
      hasMore,
      isLoading,
    } = this.state;

    return (
      <div className="stories">
        {masterPostList.map((post, index) =>
          <Post img={post.img}
            title={post.title}
            description={post.description}
            profile={post.profile}
            name={post.name}
            dateRead={post.dateRead}
            key={index}/>
        )}
        <SignUp/>
      </div>
    );
  }

}

export default Highlights;
