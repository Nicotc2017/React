import { FunctionComponent } from "react";

interface Welcome2Props {
   isAdmin: boolean; 
}
 
const Welcome2: FunctionComponent<Welcome2Props> = ({isAdmin}) => {
    return ( <>
    {isAdmin && <p>Hello admin</p>}
    
    
    
    
    </> );
}
 
export default Welcome2;