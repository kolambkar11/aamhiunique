import React from "react";

const Footer = () => {
  return (
    <footer className="bg-custom-color text-white py-8">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} AamhiUnique's Arena. All Rights
          Reserved.
        </p>
        <div className="mt-4">
          <a
            href="https://facebook.com/aamhiunique"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 mx-2"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/aamhiunique"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 mx-2"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/aamhiunique"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 mx-2"
          >
            Instagram
          </a>

          <a
            href="https://youtube.com/@aamhiunique"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 mx-2"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "20px 0",
  textAlign: "center",
  fontSize: "14px",
};

const footerContentStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const socialLinksStyle = {
  margin: "10px 0",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  margin: "0 10px",
  fontSize: "16px",
};

export default Footer;
