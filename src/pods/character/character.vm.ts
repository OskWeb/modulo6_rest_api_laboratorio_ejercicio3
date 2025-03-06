export interface Character {
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

export const createEmptyCharacter = (): Character => ({
  id: null,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: {
    name: '',
  },
  location: {
    name: '',
  },
  image: '',
  episode: [],
  created: '',
});
