import { useQuery } from "@tanstack/react-query";
import { fetchPerson } from "../../services/swapiService";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState<number>(1);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["cherecter", counter],
    queryFn: () => fetchPerson(counter),
    enabled: counter > 0,
    staleTime: 60 * 1000,
    // 1 minute
  });

  console.log({ data, isLoading, isError });

  return (
    <>
      <button type="button" onClick={() => setCounter((prev) => prev - 1)}>
        -
      </button>
      <p>counter:{counter}</p>
      <button type="button" onClick={() => setCounter((prev) => prev + 1)}>
        +
      </button>
      <h1>hello </h1>
      {isLoading && <p>Loading....</p>}
      {isError && <p>Oops.. try again later</p>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;
