import React from 'react';
import { Link } from 'react-router-dom';
import './base-link.scss';

type BaseLinkProps = {
  children: React.ReactNode;
  to: string;
  onMouseEnter?: () => void;
  onFocus?: () => void;
};

export function BaseLink({
  children,
  to,
  onMouseEnter,
  onFocus,
}: BaseLinkProps) {
  return (
    <Link
      className="base-link"
      to={to}
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
    >
      {children}
    </Link>
  );
}
