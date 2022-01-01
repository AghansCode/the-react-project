import React, { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    document.title = "Profile";
  }, []);
  return (
    <section className="section">
      <h1 className="section-title">Profile Page</h1>
      <p className="section-desc">Halo Semua, saya adalah seorang fullstack developer dan java stack developer</p>
    </section>
  );
}
