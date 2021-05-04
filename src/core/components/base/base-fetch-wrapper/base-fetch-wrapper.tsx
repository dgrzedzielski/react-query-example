import React from 'react';
import { BaseError } from 'core/components/base/base-error';
import { BaseLoader } from 'core/components/base/base-loader';
import { Status } from 'core/types';

type BaseFetchWrapperProps = {
  status: Status;
  children: React.ReactNode;
  error: string | null;
};

export function BaseFetchWrapper({
  children,
  status,
  error,
}: BaseFetchWrapperProps) {
  if (status === 'loading') return <BaseLoader />;

  if (error) return <BaseError>{error}</BaseError>;

  return <>{children}</>;
}
