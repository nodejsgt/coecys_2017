import {TipoExposicion} from './tipo-exposicion';


export class Exposicion {
    id?:string;
    name:string;
    description?:string;
    exposureDate:string;
    exposureAt:string;
    tipoExposicion:TipoExposicion;
}
