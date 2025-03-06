import { Character } from './character.api-model';
import { schema } from '../api/graphql/schema';
import { CharacterResponse } from './character.api-model';

export const getCharacter = async (id: string): Promise<CharacterResponse> => {
  //cambiar por API
  const response = await fetch(`https://rickandmortyapi.com/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: schema, variables: { id: id } }),
  });
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
