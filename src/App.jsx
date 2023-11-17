import { useState } from "react";
import { UserInfo } from "./userinfo";

function App() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchData(e) {
    e.preventDefault();

    try {
      const url = `https://api.github.com/users/${user}`;
      const res = await fetch(url);

      if (res.status === 404) {
        const errorData = await res.json();
        setError(errorData.message); // Capture the error message
        setUserData(null); // Reset user data
      } else {
        const data = await res.json();
        setUserData(data);
        setError(null); // Reset error
      }

      setUser("");
    } catch (error) {
      console.log(error);
      setError("An error occurred while fetching data.");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 border border-solid border-gray-400 rounded">
        <h1 className="text-3xl font-bold mb-4">GitHub User Search</h1>
        <form className="flex mb-4" onSubmit={fetchData}>
          <input
            onChange={(e) => {
              setUser(e.target.value);
              setError(null); // Reset error when input changes
            }}
            value={user}
            type="text"
            placeholder="Search GitHub users"
            className="p-2 border border-gray-300 rounded-l"
          />
          <button className="bg-blue-500 text-white p-2 rounded-r">Search</button>
        </form>
        {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
        <UserInfo fetchedData={userData} />
      </div>
    </div>
  );
}

export default App;
