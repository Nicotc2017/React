import { FunctionComponent, useEffect, useState } from "react";

interface DetailsProps {}

const Details: FunctionComponent<DetailsProps> = () => {
  // function handleInput(newInput: string) {
  //     console.log(newInput);

  // }

  const handleInput = (newValue: string) => {
    console.log(newValue);
    setName(newValue);
  };
  const [name, setName] = useState("Enter Name");
  let counter: number = 1;
  useEffect(() => {
    console.log("Detais Component was rendered!");
  });
  useEffect(() => {
    console.log("details component was rendered first time!");
  }, []);
  useEffect(() => {
    console.log("name was changed!");
  }, [name]);
useEffect(() => {

},[counter])
  return (
    <>
      <label htmlFor="userName">Enter User Name</label>
      <input
        type="text"
        id="userName"
        onChange={(e) => handleInput(e.target.value)}
      />
      <p>{name}</p>
      <button className="btn btn-primary" onClick={() => {
        counter = counter++;
      }}></button>
    </>
  );
};

export default Details;
