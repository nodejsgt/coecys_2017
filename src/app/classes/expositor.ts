import { Exposicion } from "./exposicion";

export class Expositor {
    id?:string;
    name:string;
    description?:string;
    avatar?:string;
    represents?:string;
    exposiciones?:Array<Exposicion>;
}
