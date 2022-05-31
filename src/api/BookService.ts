import axios from "axios";

export default class BookService {
  static async getBooks(query = "") {
    const response = await axios({
      method: "get",
      url: "https://www.googleapis.com/books/v1/volumes",
      params: {
        q: query,
      },
    });

    return response;
  }
}
