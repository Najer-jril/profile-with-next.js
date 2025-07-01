// import Image from "next/image";

import Aboutme from "../components/Aboutme";
import Contact from "../components/Contact";
import Porto from "../components/Porto"

export default function Home() {
  return (
    <><main>
      <Aboutme />
      <Porto />
      <Contact />
    </main><footer className="py-6 bg-footerbg text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Nazril. All rights reserved.
      </footer></>
  );
}