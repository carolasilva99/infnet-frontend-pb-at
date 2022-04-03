class BreadService {
    getAll() {
        return localStorage.getItem('breads') ? JSON.parse(localStorage.getItem('breads')) : [];
    }

    setDefaultList() {
        localStorage.setItem('breads', JSON.stringify([
            {
                id: 1,
                imagePath: 'pao.jpg',
                name: 'Pão de sal',
                categories: ['Salgado'],
                ingredients: ['Trigo'],
                nutritionalInformations: ['Vegano', 'Sem lactose'],
            },
            {
                id: 2,
                imagePath: 'pao.jpg',
                name: 'Pão de cebola',
                categories: ['Salgado'],
                ingredients: ['Trigo', 'Cebola'],
                nutritionalInformations: [],
            },
            {
                id: 3,
                imagePath: 'pao.jpg',
                name: 'Pão de batata',
                categories: ['Salgado'],
                ingredients: ['Trigo', 'Batata', 'Orégano'],
                nutritionalInformations: ['Vegano', 'Sem lactose'],
            },
            {
                id: 4,
                imagePath: 'pao.jpg',
                name: 'Pão doce',
                categories: ['Doce'],
                ingredients: ['Trigo'],
                nutritionalInformations: [],
            },
            {
                id: 5,
                imagePath: 'pao.jpg',
                name: 'Pão de Chocolate',
                categories: ['Doce'],
                ingredients: ['Trigo', 'Chocolate', 'Brigadeiro'],
                nutritionalInformations: [],
            },
            {
                id: 6,
                imagePath: 'pao.jpg',
                name: 'Pão de Aveia',
                categories: ['Salgado'],
                ingredients: ['Aveia'],
                nutritionalInformations: ['Vegano', 'Sem lactose', 'Sem glúten'],
            }
        ]));
    }
}

export default new BreadService();