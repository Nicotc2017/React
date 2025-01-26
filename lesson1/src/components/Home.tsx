import { FunctionComponent } from "react";

interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
    const sayHello = () => {
        console.log("hello user");
        
    }
    const sayHolla = (username:string) => {
        console.log("hello" + " " + username);
        
    }
    return ( <>
    <h1>Home Page</h1>
    <button className="btn btn-primary" onClick={sayHello}>Say Hello</button>
    <button className="btn btn-danger" onClick={() => {sayHolla("david")}}>Say Holla</button>
    </> );
}
 
export default Home;