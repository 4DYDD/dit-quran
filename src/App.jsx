import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isNavbar, setIsNavbar] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://equran.id/api/v2/surat");

        setTimeout(() => {
          setData(response.data.data);
          console.log(response.data.data);
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main
        className={`relative bg-gradient-to-b from-fuchsia-500 to-purple-600 bg-cover bg-center min-h-[100vh] flex flex-col w-full`}
      >
        <>
          {isNavbar && <Navbar />}
          <Card setIsNavbar={setIsNavbar} data={data} />
          <br />
        </>
      </main>
    </>
  );
}

export default App;
