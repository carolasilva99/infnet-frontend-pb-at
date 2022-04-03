class NutritionalInformationService {
    getAll() {
        return localStorage.getItem('nutritionalInformations') ? JSON.parse(localStorage.getItem('nutritionalInformations')) : [];
    }

    setDefaultList() {
        localStorage.setItem('nutritionalInformations', JSON.stringify([
            "Vegano",
            "Sem Glúten",
            "Sem lactose"
        ]));
    }
}

export default new NutritionalInformationService();