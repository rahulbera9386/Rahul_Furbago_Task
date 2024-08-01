import { BrowserRouter, Routes ,Route} from "react-router-dom";
import "./App.css";

import Home from './pages/Home';
import PackageDetail from "./components/PackageDetail";


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/package/:id" element={<PackageDetail />} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
