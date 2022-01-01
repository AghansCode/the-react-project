import React, { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <section className="section">
      <h1 className="section-title">Contact Page</h1>
      <p className="section-desc">Silahkan hubungi saya melalui contact dibawah ini</p>
      <ul>
        <li>WA: 085694523</li>
        <li>Email: test@gmail.com</li>
      </ul>
    </section>
  );
}
