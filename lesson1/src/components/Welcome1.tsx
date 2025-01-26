import { FunctionComponent } from "react";

interface Welcome1Props {
  isAdmin: boolean;
}

const Welcome1: FunctionComponent<Welcome1Props> = ({ isAdmin }) => {
  if (isAdmin) {
    return (
      <>
        <h4>Hello Admin</h4>
        <button className="btn btn-primary">Admin Panel</button>
      </>
    );
  }

  return (
    <>
      <h4>Hello Admin</h4>
      <button className="btn btn-primary">Admin Panel</button>
      <br />
      <h4>Hello User</h4>
      <button className="btn btn-warning">Products Catalog</button>
    </>
  );
};

export default Welcome1;
