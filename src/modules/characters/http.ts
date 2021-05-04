import { ListResponse } from 'core/types';
import { makeRequest } from 'core/utils/api-client';
import { Character } from 'modules/characters/types';

export type CharactersResponse = ListResponse<Character>;

export async function fetchCharacters(page: number) {
  return makeRequest<CharactersResponse>('character', {
    params: { page: page.toString() },
  });
}
