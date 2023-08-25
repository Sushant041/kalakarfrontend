import "./latestNews.css"
import React, { useState, useEffect } from 'react';

const API_KEY = 'a508cd51cc1c4e68b737330667020e05';
const API_URL = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${API_KEY}`;

export default function LatestNews() {
    const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.log(error));
  }, []);
  return (
    <>
      <div className='backimg'>
   <div className='News'>

   <div className="col-sm-12">
          <div className="section-header text-center  ">
            <h1 className="shadow p-3  bg-dark   ">
              <span className="text-light">
                <strong>Latest News</strong>
              </span>
            </h1>
          </div>
        </div>
   
      <div className="articles">
        {articles.map(article => (
          <a href={article.url} key={article.publishedAt}>
                        <h2>{article.title}</h2>
            <img src={article.urlToImage} alt={article.title} />
            <p></p>
          </a>
        ))}
      </div>
    </div>
    </div>
    </>

   
  )
}