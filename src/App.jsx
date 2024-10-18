import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    return () => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://equran.id/api/v2/surat");
          setData(response.data.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    };
  }, []);

  return (
    <>
      <main
        className={`relative bg-gradient-to-b from-fuchsia-500 to-purple-600 bg-cover bg-center min-h-[100vh] flex flex-col w-full`}
      >
        <Navbar />
        <Card data={data} />
        <br />
      </main>
    </>
  );
}

export default App;
