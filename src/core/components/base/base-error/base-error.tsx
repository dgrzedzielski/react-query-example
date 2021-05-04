import React from 'react';
import './base-error.scss';

type BaseErrorProps = {
  children: React.ReactNode;
};

export function BaseError({ children }: BaseErrorProps) {
  return (
    <div className="base-error">
      <h4 className="base-error__heading">Error</h4>
      <div>{children}</div>
    </div>
  );
}
