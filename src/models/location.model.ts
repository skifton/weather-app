export interface ILocation {
  country: string;
  id: number;
  lat: number;
  lon: number;
  name: string;
  region: string;
  url: string;
}

export const initialValue = {
  country: "Belarus",
  id: 304055,
  lat: 53.9,
  lon: 27.57,
  name: "Minsk",
  region: "Minsk",
  url: "minsk-minsk-belarus",
};
