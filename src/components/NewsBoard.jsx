import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1cebfe6ff85848d0a2f0d45ed64f795d`;
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <h2 className="text-center my-4 p-3 bg-light fs-1">
        Latest <span>News</span>
      </h2>
      <div className="container">
        <div className="row g-4">
          {articles.map((news, index) => (
            <div className="col-12 col-md-4 col-lg-3" key={index}>
              <NewsItem
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsBoard;
