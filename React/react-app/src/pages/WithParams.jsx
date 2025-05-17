import { useParams } from "react-router-dom";

export default function WithParams() {
  const params = useParams();
  return (
    <div>
      <h1>With Params</h1>
      <p>This is a page with params.</p>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
}
