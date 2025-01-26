import { FunctionComponent } from "react";

interface DishesProps {
    
}



const Dishes: FunctionComponent<DishesProps> = () => {
    interface dish {
        id: string,
        name: string,
        price: number,
    }
     
    const DishesArr: dish[] = [{
        id: "101",
        name: "pizza",
        price: 45
    },
    {
        id: "102",
        name: "pizza",
        price: 45
    },
    {
        id: "103",
        name: "pizza",
        price: 45
    },
    {
        id: "104",
        name: "pizza",
        price: 45
    },
    {
        id: "105",
        name: "pizza",
        price: 45
    },
    {
        id: "106",
        name: "pizza",
        price: 45
    },

];
    return (DishesArr[2].name);
}
 
export default Dishes;