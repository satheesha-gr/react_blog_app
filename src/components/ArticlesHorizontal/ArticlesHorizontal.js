import React, { useState, useEffect } from "react";
import "../ArticlesHorizontal/ArticlesHorizontal.css";
import { Link } from 'react-router-dom';

const ArticlesHorizontal = ({ articles }) => {
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    setArticlesData(articles);
  }, [articles]);

  return (
    <main className="ah-main-container">
      <div className="ah-header">
        <h1 className="ah-heading">The Latest</h1>
        <hr className="ah-hr" />
      </div>
      <div className="ah-container">
        {articlesData.map((article, index) => {
          return (
            <Link to="/Information1">
              <figure key={index} className="ah-images-container">
                <img className="ah-images" src={article.url} alt={article.alt} />
                <figcaption className="ah-images-caption">
                  <a className="ah-link" href={article.link}>
                    {article.caption}
                  </a>
                  <p>{article.about}</p>
                </figcaption>
                <p className="ah-images-date">
                  <span className="category">{article.category}</span>
                  <span> / {article.date}</span>
                </p>
              </figure>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default ArticlesHorizontal;
