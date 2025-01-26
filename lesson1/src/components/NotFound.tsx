import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface NotFoundProps {}
 
const NotFound: FunctionComponent<NotFoundProps> = () => {
    const navigate = useNavigate();
    return ( 
        <div>
            <h2 className="display-2">Page Not Found - 404</h2>
            <button className="btn btn-primary" onClick={() => navigate('/')}>Go to Home</button>
            <button className="btn btn-warning" onClick={() => navigate(-1)}>Go Back</button>
        </div>
     );
}
 
export default NotFound;