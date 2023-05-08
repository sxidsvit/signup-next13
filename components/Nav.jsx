"use client";

import Link from "next/link";
import Image from "next/image";

const Nav = () => {

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.png'
          alt='logo'
          width={145}
          height={36}
          className='object-contain'
        />
      </Link>
    </nav>
  );
};

export default Nav;