import { useQueryClient } from 'react-query';
import { BaseLink } from 'core/components/base/base-link';
import { CHARACTERS, LOCATIONS } from 'core/query-keys';
import { fetchCharacters } from 'modules/characters/http';
import { fetchLocations } from 'modules/locations/http';
import './home.scss';

type DataType = typeof CHARACTERS | typeof LOCATIONS;

export function HomePage() {
  const queryClient = useQueryClient();

  const prefetchData = async (dataType: DataType) => {
    if (queryClient.getQueryData([dataType, 1])) return;

    if (dataType === CHARACTERS)
      queryClient.prefetchQuery([CHARACTERS, 1], () => fetchCharacters(1));

    if (dataType === LOCATIONS)
      queryClient.prefetchQuery([LOCATIONS, 1], () => fetchLocations(1));
  };

  return (
    <section className="home-page__container">
      <header>
        <h2>Homepage</h2>
      </header>
      <div className="home-page__info">
        <div>
          <div>
            This is example app using <pre>react-query</pre> - this is codebase{' '}
            <strong>before</strong> implementing <pre>react-query</pre>.
          </div>
          <div>
            To check codebase with already implemented <pre>react-query</pre>{' '}
            check it on branch <pre>after</pre>
          </div>
          <div>
            You can go to{' '}
            <BaseLink
              to="/characters"
              onMouseEnter={() => prefetchData(CHARACTERS)}
              onFocus={() => prefetchData(CHARACTERS)}
            >
              🧍‍♀️🧍‍♂️ Characters
            </BaseLink>{' '}
            and{' '}
            <BaseLink
              to="/locations"
              onMouseEnter={() => prefetchData(LOCATIONS)}
              onFocus={() => prefetchData(LOCATIONS)}
            >
              🗺 Locations
            </BaseLink>
          </div>
        </div>
      </div>
    </section>
  );
}
