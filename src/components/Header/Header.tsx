import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <nav className="header__nav">
        <Link
          className={`header__nav-link ${pathname === '/inbox' ? 'header__nav-link__active' : ''}`}
          to="/inbox"
        >
          Inbox
        </Link>
        <Link
          className={`header__nav-link ${pathname === '/outbox' ? 'header__nav-link__active' : ''}`}
          to="/outbox"
        >
          Outbox
        </Link>
        <Link
          className={`header__nav-link ${pathname === '/new' ? 'header__nav-link__active' : ''}`}
          to="/new"
        >
          New Message
        </Link>
      </nav>
    </header>
  );
};
