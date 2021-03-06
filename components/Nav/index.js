import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import ThemeToggle from '@components/ThemeToggle';

const Nav = () => {
  const router = useRouter();
  useEffect(() => {
    var body = document.querySelector('body');
    var navElement = document.querySelector('nav');
    var navToggle = document.querySelector('#js-nav-toggle');
    var navItems = document.querySelector('#js-nav-items');

    const toggleNav = () => {
      body.style.overflowY = body.style.overflowY ? '' : 'hidden';
      navElement.classList.toggle('active');
      navToggle.classList.toggle('active');
    };

    navToggle.addEventListener('click', function () {
      toggleNav();
    });

    navItems.addEventListener('click', function (event) {
      if (!navToggle.classList.contains('active')) return;
      if (event.target.tagName === 'UL') return;
      toggleNav();
    });
  }, []);
  return (
    <nav>
      <div id="js-nav-toggle" className="logo">
        <div className="open">
          <img
            src="/resources/ui/hamburger-light.svg"
            alt="open menu"
            className="light"
          />
          <img
            src="/resources/ui/hamburger-dark.svg"
            alt="open menu"
            className="dark"
          />
        </div>
        <div className="close">
          <img
            src="/resources/ui/close-light.svg"
            alt="close menu"
            className="light"
          />
          <img
            src="/resources/ui/close-dark.svg"
            alt="close menu"
            className="dark"
          />
        </div>
      </div>
      <ul id="js-nav-items">
        <li>
          <Link href={router.pathname === '/' ? '#' : '/'}>
            <a>Home</a>
          </Link>
        </li>
        {/* <li>
          <Link href="/#portfolio">
            <a>Portfolio</a>
          </Link>
        </li> */}
        <li>
          <Link href="/#about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/#tools">
            <a>Tools</a>
          </Link>
        </li>
        <li>
          <Link href="/music">
            <a>Music</a>
          </Link>
        </li>
        {/* <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li> */}
      </ul>
      <ThemeToggle />
    </nav>
  );
};

export default Nav;
