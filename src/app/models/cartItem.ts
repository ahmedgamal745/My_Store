export class CartItem{
    [x: string]: any;
    id: number;
    quantity: number;
    product : {title: string; price:number; image:string; description: string};

    constructor(){
        this.id = 0
        this.quantity = 0;
        this.product = {
            title: '',
            price: 0,
            image : '',
            description : '',

        }
    }
}