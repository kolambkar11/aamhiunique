import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import CategoryListingPage from "./pages/CategoryListingPage"; // Import the new listing page component
import CategoryPage from "./pages/CategoryPage"; // Import the category page component

const App = () => {
  return (
    <Router>
      <div className="font-sans text-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route
            path="/category/:category/listing"
            element={<CategoryListingPage />}
          />{" "}
          {/* New route for category listings */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
