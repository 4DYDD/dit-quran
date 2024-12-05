import { useState, useEffect } from "react";
import axios from "axios";
import Scrollbars from "rc-scrollbars";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState("home");

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")) || null);

    const fetchData = async () => {
      try {
        const response = await axios.get("https://equran.id/api/v2/surat");

        setTimeout(() => {
          localStorage.setItem("data", JSON.stringify(response.data.data));
          setData(response.data.data);
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    };

    if (!JSON.parse(localStorage.getItem("data"))) fetchData();
  }, []);

  return (
    <>
      <Scrollbars
        className={`relative bg-gradient-to-b bg-cover bg-center min-h-[100vh] flexc flex-col w-full bg-fuchsia-600`}
        universal
        autoHide
        renderThumbVertical={(props) => <div {...props} className="bg-dark" />}
      >
        <>
          <Navbar data={data} setData={setData} page={page} />
          <Main data={data} setPage={setPage} />
          <br />
        </>
        <Footer />
      </Scrollbars>
    </>
  );
}

export default App;
