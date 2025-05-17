import { BackBtn } from "../../components/back-btn";
import { Parent } from "../../components/parent";

export default function WithParent() {
  return (
    <div>
      <BackBtn />
      <Parent>
        <h1>This is children</h1>
        <p>This is a page with a parent layout.</p>
      </Parent>
    </div>
  );
}
