import axios from 'axios';
import { BookSearchParams } from '../types/Books';

export default class BookService {
  static async getBooks(props: BookSearchParams) {
    const category =
      props.searchCategory !== 'all' ? `+subject:${props.searchCategory}` : '';

    const response = await axios({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes',
      params: {
        q: props.searchQuery + category,
        orderBy: props.searchSorting,
        startIndex: props.startIndex,
        maxResults: props.maxResults,
      },
    });

    return response;
  }

  static async getBookById(id: string | undefined) {
    const response = await axios({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes/' + id,
    });
    return response;
  }
}
