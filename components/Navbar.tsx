import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 py-7 text-white">
      <div className="flex-between mex-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </Link>
        <Image src="/hamburger-menu.svg"
          alt="hamburger menu"
          width={30}
          height={30}
          className="block md:hidden"
          />
            <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
              <li className="body-text text-gradient_blue-purple !font-bold">
                <Link href="https://www.lpreet.com/" target="_blank"
                >
                  Lpreet
                </Link>

              </li>
              <li className="body-text !font-normal">
                <Link href="https://github.com/Lpreets" target="_blank"
                >
                  GitHub
                </Link>
              </li>
            </ul>
      </div>
    </nav>
  );
};

export default Navbar;
