import { useQuery } from "@tanstack/react-query";
import { fetchPerson } from "../../services/swapiService";
function App() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["cherecter"],
    queryFn: fetchPerson,
  });

  console.log({ data, isLoading, isError });

  return (
    <>
      <h1>hello </h1>
      {isLoading && <p>Loading....</p>}
      {isError && <p>Oops.. try again later</p>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;
