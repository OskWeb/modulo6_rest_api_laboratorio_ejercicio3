export interface CharacterEntityApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  created: string;
}
interface Origin {
  name: string;
}
interface Location {
  name: string;
}
export interface CharactersCollectionData {
  data: {
    characters: {
      info: {
        count: number;
        page: number;
        next: string;
        prev: string;
      };
      results: CharacterEntityApi[];
    };
  };
}
