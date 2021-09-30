import axios from 'axios'

// const INSTRUCTOR = 'in28minutes'
// const PASSWORD = 'dummy'
const COURSE_API_URL = 'http://localhost:8083'
// const INSTRUCTOR_API_URL = `${COURSE_API_URL}/${INSTRUCTOR}`

class CourseDataService {

    retrieveAllCourses(name) {
        // console.log('executed service')
        return axios.get(`${COURSE_API_URL}/api/admins`,
            // { headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
        );
    }
}

export default new CourseDataService()