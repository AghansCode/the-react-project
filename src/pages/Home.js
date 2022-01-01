import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div>
      <section className="section">
        <h1 className="section-title">Selamat Datang di Website Hebat</h1>
        <p className="section-desc">Halo Semua, Ini website uji coba seputar React JS</p>
      </section>
    </div>
  );
}
