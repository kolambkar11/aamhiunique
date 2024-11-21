import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams(); // Get the category from the URL

  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">
        Welcome to the {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
        Page
      </h1>
      <p className="text-xl text-gray-700">
        Here you will find a list of the best {category} related services.
      </p>
      {/* You can add dynamic content here based on the category */}
    </div>
  );
};

export default CategoryPage;
