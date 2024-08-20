import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My App - Explore Your Passion and Hobbies</title>
        <meta name="description" content="Join our community of hobbyists and experts. Discover classes, workshops, and resources to help you explore your passion and hobbies." />
        <meta name="keywords" content="hobbies, passion, community, workshops, classes, experts, hobbyists, resources" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
