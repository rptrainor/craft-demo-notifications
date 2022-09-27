import { NavLink } from 'react-router-dom';
import type { ComponentPropsWithoutRef, FC } from 'react';

//* COMPONENT IMPORTS
import NotificationContainer from './notifications/notification-container';

export const Layout: FC<ComponentPropsWithoutRef<'main'>> = ({ children }) => (
  <div className="layout">
    <header className="p-4 border-b border-gray-200">
      <h1 className="text-2xl font-bold mb-2">Craft Demo: Notifications</h1>
      <nav className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/page">Page</NavLink>
      </nav>
    </header>
    <main className="max-w-xl p-4">{children}</main>
    <footer className="p-4 border-t border-gray-200">
      Copyright &copy; 2022&ndash; OfColor, Inc.
    </footer>
    <NotificationContainer />
  </div>
);
