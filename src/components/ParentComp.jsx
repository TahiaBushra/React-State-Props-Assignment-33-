const ParentComp = ({ children, isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="bg-white p-4 my-52 mx-auto rounded-md justify-center text-center items-center">
      {isLoggedIn ? (
        <div>
          <p className="text-green-500 font-semibold">
            Logged in as: {children}
          </p>
          <button
            className="bg-red-500 text-white font-semibold hover:bg-rose-700 px-3 py-1 rounded-md mt-2"
            onClick={() => setIsLoggedIn(false)}
          >
            Log out
          </button>
        </div>
      ) : (
        <div>
          <p className="text-red-500 font-semibold">User not logged in</p>
          <button
            className="bg-green-800 text-white font-semibold hover:bg-lime-400 px-3 py-1 rounded-md mt-2"
            onClick={() => setIsLoggedIn(true)}
          >
            Log in
          </button>
        </div>
      )}
    </div>
  );
};

export default ParentComp;
