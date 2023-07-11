export default class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    categoryId: number;
    imageUrl?: string;

    constructor(id?:number, name?: string, description?: string, price?: number, categoryId?: number, imageUrl?: string){
        this.id = id? id : 0;
        this.name = name? name : "No name";
        this.description = description? description : "No description";
        this.price = price? price : 0;
        this.categoryId = categoryId? categoryId : 0;
        this.imageUrl = imageUrl? imageUrl : undefined;
    }
}