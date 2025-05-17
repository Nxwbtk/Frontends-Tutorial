import { useEffect } from "react";
import { useState } from "react";
import { BackBtn } from "../../components/back-btn";
export default function NormalAPIPage() {
  const [dataDisplay, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const r = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await r.json();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <BackBtn />
      <pre>{JSON.stringify(dataDisplay, null, 2)}</pre>
    </div>
  );
}
