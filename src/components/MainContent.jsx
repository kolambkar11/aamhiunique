import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">
          Explore Our Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            to="/category/hotels/listing"
            className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold text-blue-800">Hotels</h3>
            <p className="text-gray-600 mt-2">
              Explore the best hotels in your city.
            </p>
          </Link>

          <Link
            to="/category/cafes/listing"
            className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold text-blue-800">Cafes</h3>
            <p className="text-gray-600 mt-2">
              Discover the best cafes for coffee lovers.
            </p>
          </Link>

          <Link
            to="/category/boutiques/listing"
            className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold text-blue-800">Boutiques</h3>
            <p className="text-gray-600 mt-2">
              Shop unique and stylish clothing.
            </p>
          </Link>

          <Link
            to="/category/jewelry/listing"
            className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold text-blue-800">Jewelry</h3>
            <p className="text-gray-600 mt-2">
              Find the best jewelry stores near you.
            </p>
          </Link>

          <Link
            to="/category/photographers/listing"
            className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold text-blue-800">
              Photographers
            </h3>
            <p className="text-gray-600 mt-2">
              Hire the best photographers for your events.
            </p>
          </Link>

          <Link
            to="/category/artists/listing"
            className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold text-blue-800">Artists</h3>
            <p className="text-gray-600 mt-2">
              Find unique artworks and artists.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default MainContent;
