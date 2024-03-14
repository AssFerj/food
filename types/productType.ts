export interface Product {
    id: number;
    nome: string;
    descricao?: string;
    img: string;
    preco: number;
    tamanhos?: string[],
    type?: string;
}