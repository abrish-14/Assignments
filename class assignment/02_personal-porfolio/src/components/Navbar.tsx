'use client';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-center bg-[#04024f] p-8 w-full">
      <Link className="text-[#f7eeec] text-2xl no-underline pr-[15vmin]" href="/">
        <span></span>Home
      </Link>
      <Link className="text-[#f7eeec] text-2xl no-underline pr-[15vmin]" href="/skills">
        <span></span>Skills
      </Link>
      <Link className="text-[#f7eeec] text-2xl no-underline pr-[15vmin]" href="/projects">
        <span></span>Project
      </Link>
      <Link className="text-[#f7eeec] text-2xl no-underline pr-[15vmin]" href="/contact">
        <span></span>Contact Me
      </Link>
    </nav>
  );
};

export default Navbar;