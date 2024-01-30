import axios from "axios";

class AuthService {
    static async login(data) {
        return await axios.post("https://fakestoreapi.com/auth/login", data)
    }
}

export default AuthService;