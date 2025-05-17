import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NormalAPIPage from "./pages/Todo";
import SWRPage from "./pages/SWRPage";
import Layout from "../components/layout";
import WithParent from "./pages/WithParent";
import StateLearning from "./pages/State";
import { WithUiComponents } from "./pages/WithUiComponents";
import WithParams from "./pages/WithParams";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/normal-api" element={<NormalAPIPage />} />
            <Route path="/swr" element={<SWRPage />} />
            <Route path="/with-parent" element={<WithParent />} />
            <Route path="/state-learning" element={<StateLearning />} />
            <Route path="/with-ui-components" element={<WithUiComponents />} />
            <Route path="/with-id/:id" element={<WithParams />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
