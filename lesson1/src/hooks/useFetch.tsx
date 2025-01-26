import { useEffect, useState } from "react";

const useFetch = (endpoint: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [endpoint]);


  return [data];
};

export default useFetch;