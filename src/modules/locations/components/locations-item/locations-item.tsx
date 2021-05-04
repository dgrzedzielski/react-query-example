import { BaseProperty } from 'core/components/base/base-property';
import { LocationModel } from 'modules/locations/types';
import './locations-item.scss';

type LocationItemProps = {
  location: Readonly<LocationModel>;
};

export function LocationsItem({
  location: { name, type, dimension, residents },
}: LocationItemProps) {
  return (
    <div className="locations-item">
      <h3>{name}</h3>
      <ul className="locations-item__properties">
        <BaseProperty
          label="Type"
          value={type}
          className="locations-item__property"
        />
        <BaseProperty
          label="Dimension"
          value={dimension}
          className="locations-item__property"
        />
        <BaseProperty
          label="Residents"
          value={residents.length}
          className="locations-item__property"
        />
      </ul>
    </div>
  );
}
