import { HomeDescriptionResponseDTO } from "../home/homeDescription_ResponseDTO";
import { PizzaType_ResponseDTO } from "./pizzaType_ResponseDTO";

export interface TopProductsResponseDTO {
    pizzaTypes: PizzaType_ResponseDTO[];
    homeDescription: HomeDescriptionResponseDTO;
  }