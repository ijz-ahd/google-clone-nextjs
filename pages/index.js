import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import { useRef } from "react";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google-clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header  */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* left  */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* right  */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* icon  */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          {/* avatar  */}
          <Avatar url="https://media-exp1.licdn.com/dms/image/C5103AQG_KvzE-_Seeg/profile-displayphoto-shrink_200_200/0/1567234457371?e=1622678400&v=beta&t=eMdwOf4-uxpi-NBTli9foEfI7URVxPWg0W9GUAund3o" />
        </div>
      </header>
      {/* body  */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={300}
          height={100}
        />
        <div className="flex w-full hover:shadow-lg mt-5 focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5 w-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn" onClick={search}>
            Google Search
          </button>
          <button className="btn" onClick={search}>
            I'm feeling lucky
          </button>
        </div>
      </form>
      {/* footer  */}
      <Footer />
    </div>
  );
}
