import Ajax from "./Ajax";

class ProductService {
    async getProductsForBanner(category = {id: 'razor'}) {
        const response = await Ajax.get(`/products/filter?categories=${category.id}`);
        if (response.productsQuantity > 0) {
            return response.products.splice(0,4);
        } else {
            return null;
        }
    }
}

export default new ProductService();