class IngredientService {
    getAll() {
        return localStorage.getItem('ingredients') ? JSON.parse(localStorage.getItem('ingredients')) : [];
    }

    setDefaultList() {
        localStorage.setItem('ingredients', JSON.stringify([
            "Trigo",
            "Cebola",
            "Batata",
            "Orégano",
            "Chocolate",
            "Brigadeiro",
            "Aveia"
        ]));
    }
}

export default new IngredientService();