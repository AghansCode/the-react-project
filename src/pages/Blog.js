import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Blog";
    async function getArticles() {
      const request = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
      const response = await request.json();
      setArticles(response);
      setLoading(false);
    }
    getArticles();
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Blog</h1>
      <p className="section-desc">Berikut ini adalah berita-berita tentang space flight</p>
      {loading && <i>Loading articles ...</i>}
      {!loading && (
        <div className="articles">
          {articles.map((articles) => {
            return (
              <article key={articles.id} className="article">
                <h2 className="article-title">
                  <Link to={`/blog/${articles.id}`}>{articles.title}</Link>
                </h2>
                <time className="article-time">{new Date(articles.publishedAt).toLocaleDateString}</time>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
