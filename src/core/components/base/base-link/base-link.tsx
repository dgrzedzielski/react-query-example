import React from 'react';
import { Link } from 'react-router-dom';
import './base-link.scss';

type BaseLinkProps = {
  children: React.ReactNode;
  to: string;
};

export function BaseLink({ children, to }: BaseLinkProps) {
  return (
    <Link className="base-link" to={to}>
      {children}
    </Link>
  );
}
