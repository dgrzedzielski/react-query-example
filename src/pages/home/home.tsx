import { BaseLink } from 'core/components/base/base-link';
import './home.scss';

export function HomePage() {
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
            You can go to <BaseLink to="/characters">🧍‍♀️🧍‍♂️ Characters</BaseLink>{' '}
            and <BaseLink to="/locations">🗺 Locations</BaseLink>
          </div>
        </div>
      </div>
    </section>
  );
}
