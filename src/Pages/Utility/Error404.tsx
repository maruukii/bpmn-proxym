import { Link } from "react-router-dom";

const Error404 = () => {
  document.title = "404 Not Found";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center px-4 py-8 bg-white rounded-lg shadow-lg w-full max-w-lg">
        <div>
          <h1 className="text-6xl font-extrabold text-gray-800">4 0 4</h1>
        </div>
        <div className="mt-6">
          <h4 className="text-xl font-semibold text-gray-600 uppercase mt-4">
            Sorry, page not found
          </h4>

          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 text-white bg-yellow-500 hover:bg-yellow-400 rounded-md"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
