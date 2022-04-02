class KitService {
    getAll() {
        return localStorage.getItem('kits') ? JSON.parse(localStorage.getItem('kits')) : [];
    }

    setDefaultList() {
        localStorage.setItem('kits', JSON.stringify([
            {
                id: 1,
                name: "Kit Dia a Dia",
                description: "Um kit especial para você que quer os melhores pães todos os dias",
                categories: ["Salgado"],
                ingredients: ["Trigo", "Cebola"],
                nutritionalInformations: ["Vegano", "Sem lactose"],
            },
            {
                id: 2,
                name: "Kit Momentos Especiais",
                description: "Que tal um kit para aquele momento de sentimentos especiais?",
                categories: ["Salgado", "Doce"],
                ingredients: ["Trigo", "Cebola", "Chocolate"],
                nutritionalInformations: [],
            },
            {
                id: 3,
                name: "Kit Formiguinha",
                description: "Sabe aquele momento que você só quer comer algo docinho? Esse kit é pra isso mesmo!",
                categories: ["Doce"],
                ingredients: ["Chocolate", "Brigadeiro", "Canela"],
                nutritionalInformations: ["Sem Glúten"],
            },
            {
                id: 4,
                name: "Kit Go Vegan",
                description: "Quer experimentar os melhores pães veganos? Esse kit é pra você!",
                categories: ["Salgado", "Doce"],
                ingredients: ["Chocolate", "Brigadeiro", "Canela", "Trigo", "Cebola", "Aveia"],
                nutritionalInformations: ["Vegano", "Sem lactose"],
            },
            {
                id: 5,
                name: "Kit Sem Lactose",
                description: "Já pensou em comer os melhores pães sem se preocupar com lactose? Esse kit é pra você!",
                categories: ["Salgado", "Doce"],
                ingredients: ["Chocolate", "Brigadeiro", "Canela", "Trigo", "Cebola", "Aveia"],
                nutritionalInformations: ["Sem lactose"],
            },
            {
                id: 6,
                name: "Kit Café da Manhã",
                description: "Nesse kit colocamos os melhores pães para você montar aquela mesa de café da manhã digna de hotel!",
                categories: ["Salgado", "Doce"],
                ingredients: ["Chocolate", "Brigadeiro", "Canela", "Trigo", "Cebola"],
                nutritionalInformations: ["Sem lactose"],
            }
        ]));
    }
}

export default new KitService();