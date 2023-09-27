import React from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Navbar />
      <main className="mx-auto my-10 max-w-6xl rounded-md bg-white px-5 py-10 shadow-md">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default layout;
