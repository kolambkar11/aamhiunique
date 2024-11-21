import React from "react";
import { useParams } from "react-router-dom";
import { categoryData } from "../data/sampleData"; // Import mock data

const CategoryListingPage = () => {
  const { category } = useParams(); // Get category from URL
  const categoryItems = categoryData[category] || []; // Get the items for the category

  if (categoryItems.length === 0) {
    return (
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold text-blue-900">
          No items found in this category.
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">
        {category.charAt(0).toUpperCase() + category.slice(1)} Listings
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold text-blue-800">{item.name}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryListingPage;
