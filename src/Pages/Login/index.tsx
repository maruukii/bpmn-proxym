import { Mirage } from "ldrs/react";
import { useState } from "react";

const login = () => {
  const [logginIn, setLoggingIn] = useState<boolean | null>(false);
  const handleLogin = () => {
    setLoggingIn(true);
    fetch("/authorization/")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        setLoggingIn(false);
        window.location.replace(data.redirectUrl);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100 gap-10">
        <img src="/bankerise-flowable-logo.png" alt="" className="w-100" />
        <h3 className="text-xl font-bold">Welcome to the Studio</h3>
        <button
          className={`px-6 py-3 text-white font-semibold rounded-lg shadow-lg ${
            logginIn
              ? "hover:bg-gray-400 bg-gray-300"
              : "hover:bg-blue-600 bg-blue-500"
          } transition cursor-pointer`}
          onClick={handleLogin}
        >
          {logginIn ? <Mirage size="60" speed="2.5" color="black" /> : "Login"}
        </button>
      </div>
    </div>
  );
};
export default login;
