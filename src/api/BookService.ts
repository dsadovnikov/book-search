import axios from "axios";
import { FetchBooksProps } from "../types/Books";

export default class BookService {
  static async getBooks(props: FetchBooksProps) {
    const category =
      props.searchCategory !== "all" ? `+subject:${props.searchCategory}` : "";

    const response = await axios({
      method: "get",
      url: "https://www.googleapis.com/books/v1/volumes",
      params: {
        q: props.searchQuery + category,
        orderBy: props.searchSorting,
      },
    });

    return response;
  }
}
