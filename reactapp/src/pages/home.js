 import React from "react";
import NewsChannelCard from "../components/NewsChannelCard";
import '../css/home.css';
const newsChannels = [
  {
    id: 1,
    channelName: "BBC News",
    imageUrl: "https://up.metropol247.co.uk/iamqueenbi/BBC%20NEWS.jpg",
    websiteUrl: "https://www.bbc.com/news",
  },
  {
    id: 2,
    channelName: "CNN",
    imageUrl: "https://th.bing.com/th/id/R.a26b64b22507e2995fbba174d29d1f92?rik=zpxrqYXutvg0mQ&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f02%2fCNN-invert-red-white-logo.png&ehk=hPKW%2biOyEBZZnde7BAPJ7iqXUJuRuJHh6rMfzGoW7A0%3d&risl=&pid=ImgRaw&r=0",
    websiteUrl: "https://edition.cnn.com/",
  },
  {
    id: 3,
    channelName: "Times of India",
    imageUrl: "https://up.metropol247.co.uk/iamqueenbi/BBC%20NEWS.jpg",
    websiteUrl: "https://timesofindia.indiatimes.com/india",
  },
  {
    id: 4,
    channelName: "Thandhi News",
    imageUrl: "https://th.bing.com/th/id/R.a26b64b22507e2995fbba174d29d1f92?rik=zpxrqYXutvg0mQ&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f02%2fCNN-invert-red-white-logo.png&ehk=hPKW%2biOyEBZZnde7BAPJ7iqXUJuRuJHh6rMfzGoW7A0%3d&risl=&pid=ImgRaw&r=0",
    websiteUrl: "https://www.bing.com/ck/a?!&&p=dd4ccd805064983eJmltdHM9MTY5MDE1NjgwMCZpZ3VpZD0yMTIwY2Y3YS1hZmRiLTZjNzAtMjNkZS1kZDliYWU2OTZkZTcmaW5zaWQ9NTE5MQ&ptn=3&hsh=3&fclid=2120cf7a-afdb-6c70-23de-dd9bae696de7&psq=thanthi+news&u=a1aHR0cHM6Ly93d3cuZGFpbHl0aGFudGhpLmNvbS8&ntb=1",
  },
  // Add more news channels here
];

const Home = () => {
  return (
    <div>
      <h1>News Channels</h1>
      <div>
        {newsChannels.map((channel) => (
          <NewsChannelCard
            key={channel.id}
            channelName={channel.channelName}
            imageUrl={channel.imageUrl}
            websiteUrl={channel.websiteUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
