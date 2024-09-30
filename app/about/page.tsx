import React from "react";
import Head from "next/head";

const page = () => {
  return (
    <div>
      <Head>
        <title>Your Page Title</title>
        <meta
          name="description"
          content="A short description of your page's content"
        />
        <meta property="og:title" content="Your Page Title" />
        <meta
          property="og:description"
          content="A detailed description of your page's content"
        />
        <meta
          property="og:image"
          content="https://i.pinimg.com/736x/28/8f/e4/288fe428ac009fdb595bd2cf74a90051.jpg"
        />
      </Head>
      <div>
        about
        <img
          src="https://i.pinimg.com/736x/28/8f/e4/288fe428ac009fdb595bd2cf74a90051.jpg"
          sizes="(max-width: 600px) 400px, (max-width: 900px) 800px, 1200px"
          alt="Description of the image"
        ></img>
      </div>
    </div>
  );
};

export default page;
