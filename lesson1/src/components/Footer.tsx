import { FunctionComponent } from "react";

interface FooterProps {
    devName: string;
}
 
const Footer: FunctionComponent<FooterProps> = ({devName}) => {
    
    return ( 
        <>
        <p>Developed By : {devName}</p>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-whatsapp"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-linkedin"></i>
        </>
     );
}
 
export default Footer;