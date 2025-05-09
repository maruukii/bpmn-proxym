const login = () => {
  const handleLogin = () => {
    fetch("/authorization/")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        console.log(data);
        // window.open(data.redirectUrl);
        window.open(data.redirectUrl, "_blank");
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <button
          className="px-6 py-3 text-white font-semibold bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition cursor-pointer"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};
export default login;
