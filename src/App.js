import "./styles.css";
import React, { useState } from "react";

const favChannel = {
  Lofi: [
    {
      Name: "Wormono",
      Subs: "491k subs",
      Description:
        " He takes Lofi one step further by finding creative uses for plugins to curate a unique sound and identity/voice as an artist.",
      Image:
        "https://sandbox-uploads.imgix.net/u/1628010488-9ead122e78597b73389cf4cd0eeb90a6?w=600",
        Rating: `⭐⭐⭐⭐⭐`
      },
    {
      Name: "Gravero",
      Subs: "192k subs",
      Description:
        "Sourav Ray is an Electronic Dance Music Producer in the Future Bass & Pop sector.",
      Image:
        "https://sandbox-uploads.imgix.net/u/1628079516-24e09dcbb7b36b66c61c70216627574f?w=600",
        Rating: `⭐⭐⭐⭐⭐`
    },
    {
      Name: "Harrlin Beats",
      Subs: "187k subs",
      Description:
        "Harrlin - One of the kings of Lofi edits. His Lofi edits make everyone nostalgic and can give you goosebumps.",
      Image:
        "https://sandbox-uploads.imgix.net/u/1628092360-c4a6abaea31a0c6f4b34fe98992a459b?w=600",
        Rating: `⭐⭐⭐⭐⭐`
    }
  ],
  Solo: [
    {
      Name: "Jal Raj",
      Subs: "1.09 M subs",
      Image:
        "https://sandbox-uploads.imgix.net/u/1628137165-44292f5810a54f61055b5ca19ab6d018?w=600",
      Description:
        "We love making songs in our own way and don't want to categorize them in a particular genre.",
        Rating: `⭐⭐⭐⭐⭐`
    },

    {
      Name: "Aksh Baghla",
      Subs: "2.96 M subs",
      Image:
        "https://sandbox-uploads.imgix.net/u/1628137037-cd701f7f13a8f579d1b32d888102206f?w=600",
      Description:
        "Singer/Songwriter . SUBSCRIBE for Pop Music, Hindi English Mashups and more!",
        Rating: `⭐⭐⭐⭐`
    },

    {
      Name: "Shirley Setia",
      Subs: "3.74 M subs",
      Image:
        "https://sandbox-uploads.imgix.net/u/1628136975-7c6235d5df18b6697c4bda71b429dfde?w=600",
      Description:
        "I started off with music and singing, but realised I love doing a lot more things than just that.",
        Rating: `⭐⭐⭐⭐`
    }
  ],

  Popular: [
    {
      Name: "T-Series",
      Subs: "189 M subs",
      Description:
        "Music can change the world. T-Series is India's largest Music Label & Movie Studio, believes in bringing world close together through its music.",
      Image:
        "https://sandbox-uploads.imgix.net/u/1628090537-acf17fca962a3c02326925e8c287828a?w=500",
        Rating: `⭐⭐⭐⭐`
    },
    {
      Name: "Sony Music India",
      Subs: "44.7 M subs",
      Description:
        "Sony Music India SME- Home To The Hits.Subscribe to listen to chart-busters in the making, see premieres of blockbuster videos and get your daily dose of some great music right here.",
      Image:
        "https://sandbox-uploads.imgix.net/u/1628090583-c481bd2245b4c4676a469619a806e64a?w=600",
        Rating: `⭐⭐⭐⭐⭐`
    },
    {
      Name: "Indie Music Label",
      Subs: "5.79 M subs",
      Image:
        "https://sandbox-uploads.imgix.net/u/1628090716-3806d19c3426584f06d7e12016f74de8?w=600",
      Description:
        "We are lovers of music who collaborate with some of the finest independent artists and labels within India and around the world.",
        Rating: `⭐⭐⭐⭐⭐`
    }
  ]
};
const genreNames = Object.keys(favChannel);

export default function App() {
  const [channelList, setChannelList] = useState(favChannel.Lofi);

  function genreClickHandler(genre) {
    var channel = favChannel[genre];
    setChannelList(channel);
  }

  function getChannelPost(channel) {
    var name = channel.Name;
    var imageUrl = channel.Image;
    var subs = channel.Subs;
    var desc = channel.Description;
    var rating = channel.Rating;
    var channelList = (
      <li>
        <img alt="channel thumbnail" src={imageUrl} />
        <div className="primary" style={{ padding: "0rem 1rem" }}>
          <h3>{name}</h3>
          <p style={{ fontSize: "0.8rem" }}>{subs}</p>
          <p style={{ fontSize: "0.9rem" }}>{desc}</p>
          <p style={{ fontSize: "0.8rem" }}>{rating}</p>
        </div>
      </li>
    );
    return channelList;
  }

  return (
    <div className="App">
      <h1>
        My <span style={{ color: "red" }}>Youtube </span>Favorites
      </h1>
      <p className="desc">
        Checkout my favorite channels. Select from the options!
      </p>
      <div>
        {genreNames.map((genre) => {
          return (
            <button
              key={genre}
              className="btn"
              onClick={() => genreClickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr />
      <ul>
        {channelList.map((channel) => {
          return getChannelPost(channel);
        })}
      </ul>
    </div>
  );
}
