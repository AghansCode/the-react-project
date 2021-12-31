import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="app">
      <div className="brand">Website Aghans</div>
      <nav className="nav">
        <Link to="/" className="nav-item">
          Home
        </Link>

        <Link to="/profile" className="nav-item">
          Profile
        </Link>

        <Link to="/blog" className="nav-item">
          Blog
        </Link>

        <Link to="/contact" className="nav-item">
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetails />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
