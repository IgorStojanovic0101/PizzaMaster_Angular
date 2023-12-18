import { DropItem_ResponseDTO } from "./dropItem_ResponseDTO";


    export interface Dropdown_ResponseDTO {
        id: number,
        dropdownName: string,
        dropdownImage: string,
        deader: boolean,
        navigationBar : boolean,
        dropItem_ResponseDTOs : DropItem_ResponseDTO[] 
      }