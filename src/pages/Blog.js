import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getArticles() {
      const request = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
      const response = await request.json();
      setArticles(response);
      setLoading(false);
    }
    getArticles();
  }, []);

  return (
    <section>
      <h1>Blog</h1>
      <p>Berikut ini adalah berita-berita tentang space flight</p>
      {loading && <i>Loading articles ...</i>}
      {!loading && (
        <div>
          {articles.map((articles) => {
            return (
              <article key={articles.id}>
                <h2>
                  <Link to={`/blog/${articles.id}`}>{articles.title}</Link>
                </h2>
                <time>{new Date(articles.publishedAt).toLocaleDateString}</time>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
