import { CharactersCollectionData } from './character-collection.api-model';
import { schema } from './graphql/schema';

export const getCharacterCollection =
  async (): Promise<CharactersCollectionData> => {
    const response = await fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: schema }),
    });
    if (response.ok) {
      const data = response.json();
      console.log(data);
      return await data;
    } else {
      throw Error(response.statusText);
    }
  };
