import {useRef} from "react";

 export let usePrevious = (value:any) => {
    const currentRef = useRef(value);
    const previousRef = useRef();
    if(currentRef.current !== value){
        previousRef.current = currentRef.current;
    }
    return previousRef.current;
}
