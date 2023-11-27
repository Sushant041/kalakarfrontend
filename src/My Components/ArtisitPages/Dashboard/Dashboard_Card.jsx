import React, { useEffect, useState } from "react";
import  "../Dashboard/Dashboard_Card.css"
const Dashboard_Card = () => {
 const [latestNews, setLatestNews] = useState(null);

  const [imageNews, setImageNews] = useState(null);    const API_KEY = "a508cd51cc1c4e68b737330667020e05";
    const API_URL = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${API_KEY}`;
	const fetchNews = async () => {
  return fetch(API_URL)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => {
        throw new Error("Error fetching new data :", error);
      });
  }
    useEffect(() => {
    fetchNews()
	.then((data) => {
        setLatestNews(data.articles);
        const image = data.articles.filter((item) => item.urlToImage);
        console.log("image dasboard", image);
        setImageNews(image);
      })
      .catch((error) => console.error("Error fetching news data :", error))
  }, []);

	// console.log(news.articles[0].title);
	console.log();

  return (
    <>
	 <div class="wrapper">
	<div class="card">
		<div class="poster"><img src= {latestNews[0]?.urlToImage} alt="Location Unknown" /></div>
		<div class="details">
			<h1>{latestNews[0]?.title?.slice(0,40)}... </h1>
			{/* <h2>2021 • PG • 1hr 38min</h2> */}
			{/* <div class="rating">
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="fas fa-star"></i>
				<i class="far fa-star"></i>
				<span>4.2/5</span>
			</div>
			<div class="tags">
				<span class="tag">Italian</span>
				<span class="tag">Drama</span>
				<span class="tag">Indie</span>
			</div> */}
			<p class="desc"> {latestNews[0]?.content}</p>
			{/* <div class="cast">
				<h3>Cast</h3>
				<ul>
					<li><img src="https://i.postimg.cc/jqgkqhSb/cast-11.jpg" alt="Marco Andrews" title="Marco Andrews" /></li>
					<li><img src="https://i.postimg.cc/8P7X7r7r/cast-12.jpg" alt="Rebecca Floyd" title="Rebecca Floyd" /></li>
					<li><img src="https://i.postimg.cc/2SvHwRFk/cast-13.jpg" alt="Antonio Herrera" title="Antonio Herrera" /></li>
				</ul>
			</div> */}
		</div>
	</div>
	<div class="card">
		<div class="poster"><img src= {latestNews[1]?.urlToImage}  alt="Location Unknown" /></div>
		<div class="details">
			<h1> {latestNews[1]?.title?.slice(0,40)}...</h1>
			{/* <h2>2020 • PG • 24min</h2> */}

			<p class="desc"> {latestNews[1]?.content}</p>

			
		</div>
	</div>
	<div class="card">
		<div class="poster"><img src= {latestNews[2]?.urlToImage}  alt="Location Unknown" /></div>
		<div class="details">
			<h1>{latestNews[2]?.title?.slice(0,40)}...</h1>
			<h2>2021 • R • 1hr 41min</h2>
			<p class="desc"> {latestNews[2]?.content}</p>

		</div>
	</div>
</div>
   
    </>
  )
}

export default Dashboard_Card