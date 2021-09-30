import axios from "axios";


const ADMIN_REST_API_URL = 'http://localhost:8083/api/admin';

class AdminService {

    getAdmin() {
        return axios.get(ADMIN_REST_API_URL);
    }
}

export default new AdminService();