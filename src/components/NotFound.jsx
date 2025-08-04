import React from "react";

const NotFound = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">We Are Working on this page</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-400 mb-6">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-full text-white font-medium"
        >
          Go Back Home
        </a>
      </div>
    </section>
  );
};

export default NotFound;
