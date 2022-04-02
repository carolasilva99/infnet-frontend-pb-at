class CategoryService {
    getAll() {
        return localStorage.getItem('categories') ? JSON.parse(localStorage.getItem('categories')) : [];
    }

    setDefaultList() {
        localStorage.setItem('categories', JSON.stringify([
            "Salgado",
            "Doce"
        ]));
    }
}

export default new CategoryService();