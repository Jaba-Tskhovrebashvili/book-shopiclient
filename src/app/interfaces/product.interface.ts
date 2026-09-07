import { PublishHouse } from "./publishhouse.interface";
import { ProductType } from "./product-type.interface";
import { Author } from "./author.interface";

export interface Product {
    id?: number,
    name: string,
    annotation: string,
    typeId: number,
    product_Type?: ProductType,
    isbn: string,
    release_date: string,
    publishId: 4,
    publishing_house?: PublishHouse,
    page_quantity: 30,
    address: string,
    authors?: Author[]
}
