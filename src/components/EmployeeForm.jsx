// import React from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SubmitConf from "./SubmitConf";


// const EmployeeForm = () => {
//   const { register, handleSubmit } = useForm();
//   const navigate = useNavigate();

//   const createEmployee = async (data) => {

//     const savedUserResponse = await fetch(
//       `${process.env.REACT_APP_BASE_URL}/createUser`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ ...data }),
//       }
//     );

//     console.log("FORM RESPONSE......", savedUserResponse);

//     navigate("/")
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(createEmployee)} className="mt-8">
//         <div className="space-y-5">
//           <div>
//             <label
//               htmlFor="name"
//               className="text-base font-medium text-gray-200"
//             >
//               {" "}
//               Employee Name{" "}
//             </label>
//             <div className="mt-2.5">
//               <input
//                 className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-gray-200"
//                 type="text"
//                 placeholder="Enter You Full Name"
//                 {...register("name")}
//               ></input>
//             </div>
//           </div>

//           <div>
//             <label
//               htmlFor="email"
//               className="text-base font-medium text-gray-200"
//             >
//               {" "}
//               Employee Email Id{" "}
//             </label>
//             <div className="mt-2.5">
//               <input
//                 className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-gray-200"
//                 type="email"
//                 placeholder="Enter Your Email"
//                 {...register("email")}
//               ></input>
//             </div>
//           </div>

//           <div>
//             <label
//               htmlFor="title"
//               className="text-base font-medium text-gray-200"
//             >
//               {" "}
//               Employee Title{" "}
//             </label>
//             <div className="mt-2.5">
//               <input
//                 className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-gray-200"
//                 type="text"
//                 placeholder="Enter Your Employee Title"
//                 {...register("title")}
//               ></input>
//             </div>
//           </div>

//           <div>
//             <label
//               htmlFor="department"
//               className="text-base font-medium text-gray-200"
//             >
//               {" "}
//               Employee Department{" "}
//             </label>
//             <div className="mt-2.5">
//               <input
//                 className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-gray-200"
//                 type="text"
//                 placeholder="Enter Your Employee Department"
//                 {...register("department")}
//               ></input>
//             </div>
//           </div>

//           <div>
//             <label
//               htmlFor="role"
//               className="text-base font-medium text-gray-200"
//             >
//               {" "}
//               Employee Role{" "}
//             </label>
//             <div className="mt-2.5">
//               <input
//                 className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-gray-200"
//                 type="text"
//                 placeholder="Enter Your Employee Role"
//                 {...register("role")}
//               ></input>
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
//             >
//               Create Employeee
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="ml-2 h-4 w-4"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EmployeeForm;

const EmployeeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({name:"", email:"", title:"", department:"", role:""})
  const [submitData, setSubmitData] = useState(false);

  function changeHandler(event){
    const {value, name} = event.target;

    setFormData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  async function postData(obj){
    try{
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/users/addUser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(obj)
        }
      );

      const result = await res.json();

      if(res.status === 200){
        setFormData({name:"", email:"", title:"", department:"", role:""})
        toast.success(result.message);
        navigate("/");
      }
      else if(res.status === 400){
        toast.error(result.message);
      }
      else{
        toast.error(result.message);
      }
    }
    catch(e){
      console.error(e.message);
      toast.error("Some error occured!");
    }

  }

  function confirmHandler(){
    postData(formData);
    setSubmitData(false)
  }

  function cancelHandler(){
    setSubmitData(false);
  }

  function submitHandler(event){
    event.preventDefault();
    setSubmitData(true);
  }

  return(
    <div>
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold">Employee Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={changeHandler}
            placeholder="Enter Your Full Name"
            className="rounded-md py-1 px-3 bg-black border"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold">Employee Email Id</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter Your Email"
            className="rounded-md py-1 px-3 bg-black border"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="font-semibold">Employee Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={changeHandler}
            placeholder="Enter Your Employee Title"
            className="rounded-md py-1 px-3 bg-black border"
            />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="department" className="font-semibold">Employee Department</label>
          <input 
            type="text" 
            name="department" 
            id="department"
            value={formData.department}
            onChange={changeHandler}
            placeholder="Enter Your Employee Department" 
            className="rounded-md py-1 px-3 bg-black border"
        />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="role" className="font-semibold">Employee Role</label>
          <input 
            type="text" 
            name="role" 
            id="role"
            value={formData.role}
            onChange={changeHandler}
            placeholder="Enter Your Employee Role" 
            className="rounded-md py-1 px-3 bg-black border"
        />
        </div>

        <button className="bg-blue-500 py-2 rounded-md mt-4">Submit</button>
      </form>

      {
        submitData && <SubmitConf confirmHandler={confirmHandler} cancelHandler={cancelHandler}/>
      }
    </div>
  );
}

export default EmployeeForm;