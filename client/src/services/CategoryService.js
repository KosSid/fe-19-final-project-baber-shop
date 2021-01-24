import Ajax from "./Ajax";

class CategoryService {
    async getRandomCategories(count) {
        const allCategories = await Ajax.get('/catalog');

        if (allCategories && allCategories.length > 0) {
            const slice = allCategories.filter(c => +c.level === 1).sort(() => .5 - Math.random()).slice(0, count);
            return Promise.all(slice.map(async cat => {
                const lowest = await this.getLowestPrice(); // cat
                return {
                    ...cat,
                    price: lowest
                }
            }));
        } else {
            return null;
        }
    }

    async getLowestPrice(category = {id: 'razor'}) {
        const {products} = await Ajax.get(`/products/filter?categories=${category.id}`);
        return Math.min.apply(Math, (products || []).map(p => p.currentPrice));
    }
}

export default new CategoryService();