import { BaseProperty } from 'core/components/base/base-property';
import { Character } from 'modules/characters/types';
import './characters-item.scss';

type CharactersItemProps = {
  character: Readonly<Character>;
};
export function CharactersItem({
  character: { status, name, image, species, type, gender },
}: CharactersItemProps) {
  return (
    <div className="characters-item">
      <img
        src={image}
        alt={`Image of ${name}`}
        loading="lazy"
        width={318}
        height={318}
      />
      <div className="characters-item__content">
        <h3 className="characters-item__name">{name}</h3>
        <ul className="characters-item__properties">
          <BaseProperty label="Status" value={status} />
          <BaseProperty label="Species" value={species} />
          <BaseProperty label="Type" value={type || ' - '} />
          <BaseProperty label="Gender" value={gender} />
        </ul>
      </div>
    </div>
  );
}
