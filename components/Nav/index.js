import React from 'react';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link href='/'><a>Home</a></Link></li>
        <li><Link href='#portfolio'><a>Portfolio</a></Link></li>
        <li><Link href='#about'><a>About</a></Link></li>
        <li><Link href='/music'><a>Music</a></Link></li>
      </ul>
      <ThemeToggle />
    </nav>
  );
};

export default Nav;
