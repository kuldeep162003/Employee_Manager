// import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import CreateEmployeePage from "./pages/CreateEmployeePage";

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/addemployee" element={<CreateEmployeePage />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateEmployeePage from "./pages/CreateEmployeePage";
import { Toaster } from "react-hot-toast"

function App() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/create-employee" element={<CreateEmployeePage/>} />
        </Routes>
        <Toaster/>
      </div>
    );
}

export default App;