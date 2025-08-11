import LocationCard from "../features/amenities/components/LocationCard";
import Layout from "./Layout";
import { routeConfig } from "./router/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



export default function App() {


  return (
    
    <div className="p-1 flex ">
          
        {/*  <Router  basename="/equi365">*/}
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                {
                routeConfig.map((r, i) => (
                    <Route key={i} path={r.path} element={r.element} />
                ))
                }
                </Route>
            </Routes>
      </Router>
     
    </div>
  );
}
