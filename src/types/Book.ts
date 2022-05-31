export interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    description?: string;
    categories: string[];
    imageLinks?: {
      thumbnail: string;
    };
  };
}
