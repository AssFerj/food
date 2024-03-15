export const pedidos: any = [
    {id: 1, data: "20/10/2022", total: 250},
    {id: 2, data: "20/10/2022", total: 250},
    {id: 3, data: "20/10/2022", total: 250},
    {id: 4, data: "20/10/2022", total: 250},
    {id: 5, data: "20/10/2022", total: 250},
    {id: 6, data: "20/10/2022", total: 250},
  ]
export const products = {
    catogorias: {
        pizzas: [
            {
                id: 1,
                nome: 'Frango Catupiri',
                descricao: 'Frango, Catupiri, Molho de Tomate',
                img: 'https://jornadajs-food.s3.amazonaws.com/spicy.png',
                precos: [
                    { tamanho: 'P', preco: 35 },
                    { tamanho: 'M', preco: 45 },
                    { tamanho: 'G', preco: 55 }
                ]
            },
            {
                id: 2,
                tamanhos: ['P', 'M', 'G'],
                nome: 'Portuguesa',
                descricao: 'Presunto, Queijo, Catupiri, Molho de Tomate, Oregano',
                img: 'https://jornadajs-food.s3.amazonaws.com/spicy.png',
                precos: [
                    { tamanho: 'P', preco: 35 },
                    { tamanho: 'M', preco: 45 },
                    { tamanho: 'G', preco: 55 }
                ]
            },
        ],
        hamburgueres: [
            {
                id: 1,
                nome: 'X-Tudo',
                descricao: 'Frango, Catupiri, Queijo, Presunto, Tomate, Hamburguer 150g, Bacon',
                img: 'https://jornadajs-food.s3.amazonaws.com/spicy.png',
                preco: 18
            },
            {
                id: 2,
                nome: 'Simples',
                descricao: 'Hamburguer 150g, Queijo, Presunto, Alface, Tomate, Oregano',
                img: 'https://jornadajs-food.s3.amazonaws.com/spicy.png',
                preco: 14
            },
        ],
        bebidas: [
            {
                id: 1,
                type: 'Lata',
                nome: 'Coca Cola',
                img: 'https://jornadajs-food.s3.amazonaws.com/spicy.png',
                preco: 6
            },
            {
                id: 2,
                type: 'Lata',
                nome: 'Fanta Uva',
                img: 'https://jornadajs-food.s3.amazonaws.com/spicy.png',
                preco: 5
            },
        ]
    }
 }

 export const product = [
    {
        id: 1,
        nome: 'Frango Catupiri',
        descricao: 'Frango, Catupiri, Molho de Tomate',
        img: 'https://jornadajs-food.s3.amazonaws.com/spicy.png',
        precos: [
            { tamanho: 'P', preco: 35 },
            { tamanho: 'M', preco: 45 },
            { tamanho: 'G', preco: 55 }
        ]
    },
];