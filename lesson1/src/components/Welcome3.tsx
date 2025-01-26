import { FunctionComponent } from "react";

interface Welcome3Props {
  isAdmin: boolean;
}

const Welcome3: FunctionComponent<Welcome3Props> = ({ isAdmin }) => {
  return (
    <>
      {isAdmin ? (
        <button className="btn btn-success">Edit Product</button>
      ) : (
        <p>Welcome Back User</p>
      )}
    </>
  );
};

export default Welcome3;
