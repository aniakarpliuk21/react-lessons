import {useState} from "react";


export const useToggle = (value:boolean) => {
    const [component,setComponent]
        = useState<boolean>(value);
    const toggleValue = (valueState:boolean) =>{
        setComponent((valueState) =>!valueState)
    }
return [component,toggleValue]
}
