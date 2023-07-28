import React from 'react';
import '../css/home.css';

const newsData = [
  {
    id: 1,
    channel: 'CNN',
    title: 'Headline from CNN',
    description: 'This is a news description from CNN.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/1200px-CNN_International_logo.svg.png',
    url: 'https://www.cnn.com/'
  },
  {
    id: 2,
    channel: 'BBC News',
    title: 'Headline from BBC News',
    description: 'This is a news description from BBC News.',
    image: 'https://cdn2.vectorstock.com/i/1000x1000/48/26/bbc-news-logo-with-red-background-vector-42974826.jpg',
    url: 'https://www.bbc.com/news'
  },
  {
    id: 3,
    channel: 'Times of india',
    title: 'Headline from timesofindia',
    description: 'This is a news description from Reuters.',
    image: 'https://lawprofessors.typepad.com/.a/6a00d8341bfae553ef01b8d1594773970c-800wi',
    url: 'https://m.timesofindia.com/'
  },
  {
    id: 4,
    channel: 'Times Now',
    title: 'Headline from Times Now',
    description: 'This is a news description from Times  Now.',
    image: 'data:image/png;base64,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',
    url: 'https://www.timesnownews.com/'
  },
  {
    id: 5,
    channel: 'NDTV India',
    title: 'Headline from NDTV India',
    description: 'This is a news description from NDTV India.',
    image: 'https://gumlet.assettype.com/greaterkashmir%2F2022-08%2Fac28f986-764f-467b-bdc9-58fbea484337%2FIMG_20220826_112112.jpg?rect=0%2C97%2C400%2C225&format=auto',
    url: 'https://www.ndtv.com/topic/logo'
  },
  {
    id: 6,
    channel: 'India Today',
    title: 'Headline from India Today',
    description: 'This is a news description from India Today.',
    image: 'https://www.adgully.com/img/800/201910/india-today.png.jpg',
    url: 'https://www.indiatoday.in/'
  },
  {
    id: 7,
    channel: 'The hindu',
    title: 'Headline from Hindu News',
    description: 'This is a news description from Hindu.',
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F218-2186575_thehindu-logo-logo-of-the-hindu-newspaper-hd.png&tbnid=qlWssr-IBAC8bM&vet=12ahUKEwip4K7ew6uAAxW6z6ACHR-1C5MQMygAegUIARDYAQ..i&imgrefurl=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FiTwmbTw_thehindu-logo-logo-of-the-hindu-newspaper-hd%2F&docid=8yRXNx4fg_Q4-M&w=860&h=382&q=the%20hindu%20logo&ved=2ahUKEwip4K7ew6uAAxW6z6ACHR-1C5MQMygAegUIARDYAQ',
    url: 'https://www.thehindu.com/'
  },
  // Add more news objects for different channels as needed
];

function Home() {
  return (
    <div className="news-container">
      {newsData.map((article) => (
        <div key={article.id} className="custom-card">
          <img src={article.image} alt={article.title} className="custom-card-image" />
          <div className="custom-card-content">
            <h3 className="custom-card-title">{article.title}</h3>
            <p className="custom-card-description">{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="custom-read-more-link">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
