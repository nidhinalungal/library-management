import axios from "axios";


const ADMIN_LIST_REST_API_URL = 'http://localhost:8083/api/admins';

class AdminListService {

    getAdminList() {
        return axios.get(ADMIN_LIST_REST_API_URL);
    }
}

export default new AdminListService();