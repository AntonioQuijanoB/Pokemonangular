export interface PokeList {
  count: number;
  next: string | null;
  previus: string | null;
  results: PokeData[];
}

export interface PokeData {
  name: string;
  url: string;
}

export interface PokeCard extends PokeList {
  image: string;
  height: number;
  weigth: number;
}
