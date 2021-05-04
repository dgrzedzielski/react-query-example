import clsx from 'clsx';
import './base-property.scss';

type BasePropertyProps = {
  label: string;
  value: string | number;
  className?: string;
};

export function BaseProperty({ label, value, className }: BasePropertyProps) {
  return (
    <li className={clsx('base-property', className)}>
      <span className="base-property__label">{label}</span>
      <span className="base-property__value">{value}</span>
    </li>
  );
}
