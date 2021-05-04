import { BaseFetchWrapper } from 'core/components/base/base-fetch-wrapper';
import { BaseList } from 'core/components/base/base-list';
import { BasePagination } from 'core/components/base/base-pagination';
import { CharactersItem } from 'modules/characters/components/characters-item';
import { useCharacters } from 'modules/characters/hooks/useCharacters';

export function CharactersPage() {
  const { items, status, error, page, setPage, pageCount } = useCharacters();

  return (
    <div>
      <h2>Characters</h2>
      <BaseFetchWrapper status={status} error={error}>
        <BaseList
          items={items}
          renderItem={(item) => <CharactersItem character={item} />}
        />
        <BasePagination
          pageCount={pageCount}
          currentPage={page}
          onChange={setPage}
        />
      </BaseFetchWrapper>
    </div>
  );
}
