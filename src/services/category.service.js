import axios from "axios";

class CategoryService {
    static async getAll() {
        return axios.get("https://fakestoreapi.com/products/categories")
    }
}
export default CategoryService;