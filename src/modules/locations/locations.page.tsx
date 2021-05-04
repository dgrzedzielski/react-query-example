import { BaseFetchWrapper } from 'core/components/base/base-fetch-wrapper';
import { BaseList } from 'core/components/base/base-list';
import { BasePagination } from 'core/components/base/base-pagination';
import { LocationsItem } from 'modules/locations/components/locations-item';
import { useLocations } from 'modules/locations/hooks/useLocations';

export function LocationsPage() {
  const { page, setPage, pageCount, error, status, items } = useLocations();

  return (
    <div>
      <h2>Locations</h2>
      <BaseFetchWrapper status={status} error={error}>
        <BaseList
          items={items}
          renderItem={(item) => <LocationsItem location={item} />}
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
