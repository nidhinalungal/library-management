import axios from "axios";


const BOOKS_REST_API_URL = 'http://localhost:8082/api/books';

class BookService {

    getBooks() {
        return axios.get(BOOKS_REST_API_URL);
    }

    
    deleteUser(id){
        return axios.delete(BOOKS_REST_API_URL+'/'+id)
    }
}

export default new BookService();