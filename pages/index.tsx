import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Avtar from "./component/avtar";
import Slider from "./component/slider";
import Navbar from "./component/navbar";
import Explore from "./component/explore";
import Text from "./component/text";
import Wave from "./component/wave";
import Card from "./component/card";
import Border from "./component/border";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  return (
    <div>
      <Head>
        <title>Home | Planet.in</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://img.icons8.com/?size=512&id=anVMIywDMl2b&format=png"
        />
      </Head>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <>
          <Navbar />
          <hr style={{ visibility: "hidden", marginTop: "0%" }} />
          <Avtar />
          <hr style={{ visibility: "hidden" }} />
          <Explore />
          <hr style={{ visibility: "hidden", marginTop: "3px" }} />
          <Slider />
          <Text />
          <Border />
          <Card />
          <Wave />
        </>
      )}
    </div>
  );
};

export default Home;
