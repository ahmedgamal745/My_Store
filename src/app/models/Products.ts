export class Product{
    id : number;
    title: string;
    price : number;
    image: string;
    description: string;
    quantity: number;

    constructor(){
        this.id = 0;
        this.title= '';
        this.price = 0;
        this.image = '';
        this.description = '';
        this.quantity = 0;
    }
}
