export interface Product {
    id: number;
    nome: string;
    descricao?: string;
    img: string;
    preco?: number | undefined | 0;
    precos?: { tamanho: string; preco: number }[];
    type?: string;
}