// import React, { useState } from "react";
// import "./styles/Dashboard.css";
// import { useNavigate } from "react-router-dom";
// import twitterHomeImage from './image/123.jpg';
// import notificationGif from './image/s.png'; 
// import home from './image/home.png';
// import find from './image/x.png';
// import comment from './image/c.png';
// import repost from './image/r.png';
// import heart from './image/h.png';
// import view from './image/v.png';
// import notification from './image/noti.png';
// import message from './image/m2.png';
// import laags from './image/laag.jpg';
// import leebron from './image/leb.jpg';
// import LebronP from './image/lebP.jpg';
// import Grok from './image/grok.png';
// import AlJAY from './image/aljayP.jpg';
// import AlJAYP from './image/als.jpg';
// import cojP from './image/coP.jpg';
// import coj from './image/co.jpg';
// import lists from './image/li.png';
// import bookmark from './image/b.png';
// import community from './image/u.png';
// import logo2 from './image/logo2.jpg';
// import user from './image/user.png';
// import more from './image/more.png';
// import profs from './image/ako2.png';
// import moress from './image/mores.png';
// import post22 from './image/post2.jpg';
// import useLockBodyScroll from './useLockBodyScroll.js'; 

// const Home = () => {
//   useLockBodyScroll();

//   const navigate = useNavigate(); 
//   const [showOptions, setShowOptions] = useState(false);

//   const [activeFeed, setActiveFeed] = useState('forYou');

//   const handleLogout = (option) => {
//     if (option === "logout") {
//       navigate("/");
//     } else if (option === "addAccount") {
//       console.log("Add account logic goes here");
//     }
//   };
//   const forYouTweets = [
//     {
//       profileImage: twitterHomeImage,
//       username: "Inspirational Quotes",
//       usernamesecond:"@SeffSaid      • 11h",
//       caption: "This",
//       tweetImage: post22
//     },
//     {
//       profileImage: twitterHomeImage,
//       username: "Leoniel",
//       usernamesecond:"@Yunil      • 7h",
//       caption: "Laag samtang buhi pa!",
//       tweetImage: laags
//     },
//     {
//       profileImage: AlJAY,
//       username: "Aljay ",
//       usernamesecond:"@GwaoAljay      • 3h",
//       caption: "Ni ladlad nako karun.",
//       tweetImage: AlJAYP
//     },
//     {
//       profileImage: cojP,
//       username: "Cojie",
//       usernamesecond:"@itsmeCojie      • 9h",
//       caption: "Sa time nga Gwapo pako",
//       tweetImage: coj
//     },
//     {
//       profileImage: cojP,
//       username: "Cojie",
//       usernamesecond:"@itsmeCojie    • 10h",
//       caption: "Sa time nga Gwapo pako",

//     }
//   ];  

//   const followingTweets = [
//     {
//       profileImage: LebronP,
//       username: "Lebron",
//       usernamesecond:"@Lebron      • 2h",
//       caption: "!Championship!",
//       tweetImage: leebron
//     },
//     {
//       profileImage: twitterHomeImage,
//       username: "User2",
//       usernamesecond:"@GwaoAljay      • 5h",
//       caption: "Following feed tweet 2",
//       tweetImage: twitterHomeImage
//     },
//     {
//       profileImage: twitterHomeImage,
//       username: "User3",
//       usernamesecond:"@GwaoAljay      • 4h",
//       caption: "Following feed tweet 3",
//       tweetImage: twitterHomeImage
//     }
//   ];

//   const tweetsToShow = activeFeed === 'forYou' ? forYouTweets : followingTweets;

//   return (
//     <div className="container-fluid d-flex flex-row home justify-content-center">
//       <div className="container-fluid d-flex flex-row justify-content-center">

//       <div className="left-content d-flex flex-column d-sm-none d-md-block d-none d-sm-block">
//           <button className="log2"><img src={logo2} alt="icon" className="button-logo3" /></button>
//           <button className="Ho"><img src={home} alt="icon" className="button-home" />Home</button>
//           <button className="explore"><img src={find} alt="icon" className="button-explore" />Explore</button>
//           <button className="Noti"><img src={notification} alt="icon" className="button-noti" />Notification</button>
//           <button className="message"><img src={message} alt="icon" className="button-message" />Message</button>
//           <button className="GROK"><img src={Grok} alt="icon" className="button-grok" />Grok</button>
//           <button className="List"><img src={lists} alt="icon" className="button-list" />List</button>
//           <button className="Book"><img src={bookmark} alt="icon" className="button-book" />Bookmarks</button>
//           <button className="commu"><img src={community} alt="icon" className="button-commu" />Communities</button>
//           <button className="users"><img src={user} alt="icon" className="button-commu" />Profile</button>
//           <button className="log"><img src={logo2} alt="icon" className="button-logo2" />Premium</button>
//           <button className="cmore"><img src={more} alt="icon" className="button-more" />More</button>
//           <button className="postButton">Post</button>
//           <button className="Logout" onClick={() => setShowOptions(!showOptions)}>
//               <img src={profs} alt="picture" className="button-logout" />
//               <span>Shinichi</span>
//               <p>@tokikitow</p>
//           <img src={moress} alt="picture" className="button-mores" />
//         </button>

//         {showOptions && (
//           <div className="options">
//             <button className="option" onClick={() => handleLogout("logout")} style={{ backgroundColor: "black" }}>Log Out</button>
//             <button className="option" onClick={() => handleLogout("addAccount")} style={{ backgroundColor: "black" }} >Add Account</button>
//           </div>
//         )}
//         {/* <button className="Logout"><img src={profs} alt="picture" className="button-logout" />Shinichi 
//           <p>@tokikitow</p><img src={moress} alt="picture" className="button-mores" /></button> */}
//       </div>
//       <div className="w-75 p-3 force-relative">
//       <div className="tweet-feed">
    
//       <header className="header">
       
//         <div className="header-content">
//             <button 
//             className={`F ${activeFeed === 'forYou' ? 'active' : ''}`} 
//             onClick={() => setActiveFeed('forYou')}
//           >
//             For you
//           </button>
//           <button 
//             className={`Y ${activeFeed === 'following' ? 'active' : ''}`} 
//             onClick={() => setActiveFeed('following')}
//           >
//             Following
//           </button>
//           <button className="">
//             <img src={notificationGif} alt="icon" className="button-icon" />
//           </button>
//         </div>
//       </header>
//         {tweetsToShow.map((tweet, index) => (
//           <div className="tweet" key={index}>
//             <div className="profile">
//               <img src={tweet.profileImage} alt="Profile" />
//               <span>{tweet.username}</span><p>{tweet.usernamesecond}</p>
//             </div>
//             <div className="caption">
//               <p>{tweet.caption}</p>
//             </div>
//             {tweet.tweetImage && (
//               <img src={tweet.tweetImage} alt="Tweet" className="home-image" />
//             )}
//             <div className="actions">
//               <button className="action-button">
//                 <img src={comment} alt="Comment" className="c-image" />
//               </button>
//               <button className="action-button">
//                 <img src={repost} alt="Repost" className="r-image" />
//               </button>
//               <button className="action-button">
//                 <img src={heart} alt="Like" className="h-image" />
//               </button>
//               <button className="action-button">
//                 <img src={view} alt="View" className="v-image" />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//     <div className="right-content d-sm-none d-lg-none d-xl-block d-md-none d-none d-sm-none">
//         <div className="search-container">
//           <input type="text" placeholder="Search" className="search-input" />
//           <button className="search-button">
//             <img src={find} alt="icon" className="button-search" />
//           </button>
//         </div>
//         <div className="box-container">
//             <h1 className="primuim">Subscribe to Premium</h1>
//             <h3 className="subscribe">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</h3>
//             <button className="button-sub">subcribe</button>
//         </div>
//       </div>
//     </div>
    

//   );
// };

// export default Home;

//------------------------------------------------------------------------------------------------------------------------------------------

import React, { useState } from "react";
import "./styles/Dashboard.css";
import { useNavigate } from "react-router-dom";
import twitterHomeImage from './image/123.jpg';
import notificationGif from './image/s.png'; 
import home from './image/home.png';
import find from './image/x.png';
import comment from './image/c.png';
import repost from './image/r.png';
import heart from './image/h.png';
import view from './image/v.png';
import notification from './image/noti.png';
import message from './image/m2.png';
import laags from './image/laag.jpg';
import leebron from './image/leb.jpg';
import LebronP from './image/lebP.jpg';
import Grok from './image/grok.png';
import AlJAY from './image/aljayP.jpg';
import AlJAYP from './image/als.jpg';
import cojP from './image/coP.jpg';
import coj from './image/co.jpg';
import lists from './image/li.png';
import bookmark from './image/b.png';
import community from './image/u.png';
import logo2 from './image/logo2.jpg';
import user from './image/user.png';
import more from './image/more.png';
import profs from './image/ako2.png';
import moress from './image/mores.png';
import image from './image/imagep.png';
import calendar from './image/calen.png';
import emoji from './image/emojip.png';
import gif from './image/gifp.png';
import poll from './image/pollp.png';
import heart2 from './image/he.png';
import post22 from './image/post2.jpg';
import palbsPost from './image/palbs2.jpg';
import palbsProfile from './image/pabsP.jpg';
import post233 from './image/post2.3.jpg';
import jay from './image/markPro.jpg';
import jakepost from './image/jakeP.jpg';
import jakeProfile from './image/jakePr.jpg';
import post222 from './image/post2.2.jpg';
import aljayvideo from './image/aljayVid.mp4';

import useLockBodyScroll from './useLockBodyScroll.js'; 

const Home = () => {
  useLockBodyScroll();

  const navigate = useNavigate(); 
  const [showOptions, setShowOptions] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [activeFeed, setActiveFeed] = useState('forYou');
  const [activeTweets, setActiveTweets] = useState([]);


  const handleLogout = (option) => {
    if (option === "logout") {
      navigate("/");
    } else if (option === "addAccount") {
      console.log("Add account logic goes here");
    }
  };
  const toggleLike = (index, increment) => {
    setActiveTweets((prevActiveTweets) => {
      if (prevActiveTweets.includes(index)) {
        return prevActiveTweets.filter((item) => item !== index);
      } else {
        // Add the specified number of likes
        return [...prevActiveTweets, index];
      }
    });
  
    setTweetsToShow((prevTweets) => {
      const newTweets = [...prevTweets];
      newTweets[index].like += increment;
      return newTweets;
    });
  };
  const formatLikeCount = (count) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'k';
    } else {
      return count;
    }
  };
  
  const forYouTweets = [
    {
      profileImage: jay,
      username: "Leoniel",
      usernamesecond:"@Yunil      • 7h",
      caption: "Laag samtang buhi pa!",
      tweetImage: laags,
      like:100
    },
    {
      profileImage: AlJAY,
      username: "Aljay ",
      usernamesecond:"@GwaoAljay      • 3h",
      caption: "Ni ladlad nako karun.",
      tweetImage: AlJAYP,
      like:2574
    },
    {
      profileImage: cojP,
      username: "Cojie",
      usernamesecond:"@itsmeCojie      • 9h",
      caption: "Sa time nga Gwapo pako",
      tweetImage: coj,
      like:345
    },
    {
      profileImage: cojP,
      username: "Cojie",
      usernamesecond:"@itsmeCojie    • 10h",
      caption: "Hello guys",
      like:435
    },
    {
      profileImage: palbsProfile,
      username: "Mark vincent Palban",
      usernamesecond:"@itsmeWapo      • 9h",
      caption: "Harry pot3r",
      tweetImage: palbsPost,
      like:34
    }
    // ,
    // {
    //   profileImage: jakeProfile,
    //   username: "Jake Omang",
    //   usernamesecond:"@itsmeOmang      • 9h",
    //   caption: "james raid",
    //   tweetImage: jakepost,
    //   like:34
    // }
  ];  

  const followingTweets = [
    {
      profileImage: LebronP,
      username: "Lebron",
      usernamesecond:"@Lebron      • 2h",
      caption: "!Championship!",
      tweetImage: leebron,
      like:34500
    },
    {
      profileImage: post233,
      username: "inspire",
      usernamesecond:"@SeffSaid   • 5h",
      caption: "Remember",
      tweetImage: post22,
      like:13434
    },
    {
      profileImage: post233,
      username: "inspire",
      usernamesecond:"@SeffSaid      • 4h",
      caption: "this",
      tweetImage: post222,
      like:2052
    },
    {
      profileImage: AlJAY,
      username: "Aljay",
      usernamesecond:"@itsmeALJAYS      • 4h",
      caption: "this",
      tweetVideo: aljayvideo,
      like:2052
    }
  ];

  const tweetsToShow = activeFeed === 'forYou' ? forYouTweets : followingTweets;

  return (
    <div className="home">
      <header className="header">
        <div className="header-content">
          <button 
            className={`F ${activeFeed === 'forYou' ? 'active' : ''}`} 
            onClick={() => setActiveFeed('forYou')}
          >
            For you
          </button>
          <button 
            className={`Y ${activeFeed === 'following' ? 'active' : ''}`} 
            onClick={() => setActiveFeed('following')}
          >
            Following
          </button>
          <button className="u">
            <img src={notificationGif} alt="icon" className="button-icon" />
          </button>
        </div>
      </header>

      <div className="left-content">
        <button className="log2"><img src={logo2} alt="icon" className="button-logo3" /></button>
        <button className="Ho"><img src={home} alt="icon" className="button-home" />Home</button>
        <button className="explore"><img src={find} alt="icon" className="button-explore" />Explore</button>
        <button className="Noti"><img src={notification} alt="icon" className="button-noti" />Notification</button>
        <button className="message"><img src={message} alt="icon" className="button-message" />Message</button>
        <button className="GROK"><img src={Grok} alt="icon" className="button-grok" />Grok</button>
        <button className="List"><img src={lists} alt="icon" className="button-list" />List</button>
        <button className="Book"><img src={bookmark} alt="icon" className="button-book" />Bookmarks</button>
        <button className="commu"><img src={community} alt="icon" className="button-commu" />Communities</button>
        <button className="users"><img src={user} alt="icon" className="button-commu" />Profile</button>
        <button className="log"><img src={logo2} alt="icon" className="button-logo2" />Premium</button>
        <button className="cmore"><img src={more} alt="icon" className="button-more" />More</button>
        <button className="postButton">Post</button>
        <button className="Logout" onClick={() => setShowOptions(!showOptions)}>
          <img src={profs} alt="picture" className="button-logout" />
          <span>Shinichi</span>
          <p>@tokikitow</p>
          <img src={moress} alt="picture" className="button-mores" />
        </button>

        {showOptions && (
          <div className="options">
            <button className="option" onClick={() => handleLogout("logout")} style={{ backgroundColor: "black" }}>Log Out</button>
            <button className="option" onClick={() => handleLogout("addAccount")} style={{ backgroundColor: "black" }} >Add Account</button>
          </div>
        )}
        {/* <button className="Logout"><img src={profs} alt="picture" className="button-logout" />Shinichi 
          <p>@tokikitow</p><img src={moress} alt="picture" className="button-mores" /></button> */}
      </div>

      <div className="tweet-feed">
        <img src={profs} alt="picture" className="profile2" />
        <input type="text" className="tweet-input" placeholder="What is happening?!"/>
        <button className="for-every">Everyone can reply</button>
        
        <img src={image} alt="picture" className="icon" />
        <img src={gif} alt="picture" className="icon" />
        <img src={poll} alt="picture" className="icon" />
        <img src={emoji} alt="picture" className="icon" />
        <img src={calendar} alt="picture" className="icon" />
        {tweetsToShow.map((tweet, index) => (
          <div className="tweet" key={index}>
            <div className="profile">
              <img src={tweet.profileImage} alt="Profile" />
              <span>{tweet.username}</span><p>{tweet.usernamesecond}</p>
            </div>
            <div className="caption">
              <p>{tweet.caption}</p>
            </div>
            {tweet.tweetImage ? (
  <img src={tweet.tweetImage} alt="Tweet" className="home-image" />
) : tweet.tweetVideo ? (
  <video src={tweet.tweetVideo} controls className="home-image" />
) : null}
            <div className="actions">
              <button className="action-button">
                <img src={comment} alt="Comment" className="c-image" />
              </button>
              <button className="action-button">
                <img src={repost} alt="Repost" className="r-image" />
              </button>
              <button className={`action-button ${activeTweets.includes(index) ? 'active' : ''}`}
              onClick={() => toggleLike(index, 1)}>
              {activeTweets.includes(index) ? (
                <img src={heart2} alt="Liked" className="h-image" />
              ) : (
                <img src={heart} alt="Like" className="h-image" />
              )}{formatLikeCount(parseInt(tweet.like) + (activeTweets.includes(index) ? 1 : 0))}
            </button>
              <button className="action-button">
                <img src={view} alt="View" className="v-image" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="right-content">
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-button">
            <img src={find} alt="icon" className="button-search" />
          </button>
          
        </div>
        <div className="sub-container">
          <h1 className="h1-sub">Subscribe to Premium</h1>
          <h3 className="h3-sub">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</h3>
          <button className="sub-button">Subscribe</button>
        </div>
        <div className="tr-container">
          <h2 className="h2-tr">Trends for you</h2>
          <p className="p-tr">Trending in Philippines</p>
          <p className="h3-tr">HAPPENING NOW</p>
          <p className="h4-tr">83.2K posts</p>
          <p className="p-tr">Trending in Philippines</p>
          <p className="h3-tr">HAPPENING NOW</p>
          <p className="h4-tr">83.2K posts</p>
          <p className="p-tr">Trending in Philippines</p>
          <p className="h3-tr">HAPPENING NOW</p>
          <p className="h4-tr">83.2K posts</p>
          <p className="p-tr">Trending in Philippines</p>
          <p className="h3-tr">HAPPENING NOW</p>
          <p className="h4-tr">83.2K posts</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
