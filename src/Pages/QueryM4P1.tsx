import { useQuery } from "@tanstack/react-query";
import { fetchPerson } from "../services/swapiService";
import { useState } from "react";
import QueryP1 from "../components/QueryP1/QueryP1";

const QueryM4P1 = () => {
  const [counter, setCounter] = useState<number>(1);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["cherecter", counter],
    queryFn: () => fetchPerson(counter),
    enabled: counter > 0,
    staleTime: 60 * 1000,
    // 1 minute
  });

  // console.log({ data, isLoading, isError });

  return (
    <div className="module__container">
      <h2>Використання Query. Приклад 1</h2>
      <div className="flex__container">
        <button type="button" onClick={() => setCounter((prev) => prev - 1)}>
          -
        </button>
        <p>counter:{counter}</p>
        <button type="button" onClick={() => setCounter((prev) => prev + 1)}>
          +
        </button>
      </div>

      {isLoading && <p>Loading....</p>}
      {isError && <p>Oops.. try again later</p>}
      <h3>Name: {data?.name}</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h2>Використання Query. Приклад 2</h2>
      <QueryP1 />
    </div>
  );
};

export default QueryM4P1;
