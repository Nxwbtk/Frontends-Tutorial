import useSWR from "swr";
import { BackBtn } from "../../components/back-btn";
export default function SWRPage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isValidating } = useSWR(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher
  );

  if (error) return <div className="failed">failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <div>
      <BackBtn />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
