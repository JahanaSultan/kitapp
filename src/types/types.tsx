export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
  genre: string;
  raiting: number;
}

export interface Author {
  id: number;
  name: string;
  image: string;
  about: string;
}

export interface CartCardProps {
  id: number;
  image: string;
  title: string;
  author: string;
  price: number;
}

export interface HeadingProps {
  h1: string;
  text: string;
}

export interface RentProps {
  id: number;
  name: string;
  image: string;
  author: string;
}

export interface BlogProps {
  id: number;
  title: string;
  image: string;
  about: string;
}
