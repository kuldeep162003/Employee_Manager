// import React from "react";
// import { Link } from "react-router-dom";
// import { FaBackward } from "react-icons/fa";
// import EmployeeForm from "../components/EmployeeForm";

import { useNavigate } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import { useState } from "react";
import EmployeeForm from "../components/EmployeeForm";

// const CreateEmployeePage = () => {
//   return (
//     <section>
//       <div className="grid grid-cols-1 lg:grid-cols-2">
//         <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
//           <div className="absolute inset-0">
//             <img
//               className="h-full w-full object-cover object-top"
//               src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               alt=""
//             />
//           </div>
//           <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

//           <div className="relative">
//             <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
//               <h3 className="text-4xl font-bold text-white">
//               Empower your business with our employee creation!
//               </h3>
//             </div>
//           </div>
//         </div>

//         <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
//           <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
//             <h2 className="text-3xl font-bold leading-tight text-gray-100 sm:text-4xl">
//               Create a Employee
//             </h2>
//             <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
//               <Link
//                 to={"/"}
//                 className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700 flex items-center gap-3"
//               >
//                 <FaBackward />
//                 Back to all Employee List
//               </Link>
//             </p>

//             <EmployeeForm />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CreateEmployeePage;



const CreateEmployeePage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="w-screen h-screen">
      <div className="h-full grid grid-cols-2 grid-rows-1">
        <div className="relative w-full h-full overflow-hidden">
          <img
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="w-[84%] absolute bottom-16 left-[50%] -translate-x-[50%] text-5xl font-bold text-gray-100">Empower your business with our employee creation!</div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-8 w-[84%] max-w-[450px]">
            <div className="flex flex-col gap-3">
              <p className="text-gray-100 text-4xl font-bold">Create a Employee</p>
              <button onClick={() => navigate('/')} className="text-blue-600 flex items-center gap-2"><FaBackward className="inline"/>Back to the Employee List</button>
            </div>
            <div className="text-gray-100">
              <EmployeeForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEmployeePage;