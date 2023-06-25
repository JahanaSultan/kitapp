export interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    image: string;
    genre: string;
    raiting: number;
  }

export interface Author{
    id: number;
    name: string;
    image: string;
    about: string;
}