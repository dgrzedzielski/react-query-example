import { ListResponse } from 'core/types';
import { makeRequest } from 'core/utils/api-client';
import { LocationModel } from 'modules/locations/types';

export type LocationsResponse = ListResponse<LocationModel>;

export async function fetchLocations(page: number) {
  return makeRequest<LocationsResponse>('location', {
    params: { page: page.toString() },
  });
}
