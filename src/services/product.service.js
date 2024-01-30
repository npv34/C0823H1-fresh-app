import axios from "axios";

class ProductService {
    static async getAll(limit) {
        return await axios.get(`https://fakestoreapi.com/products?limit=${limit}`);
    }
}

export default ProductService