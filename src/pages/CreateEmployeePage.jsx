import { useNavigate } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import EmployeeForm from "../components/EmployeeForm";


const CreateEmployeePage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="w-screen h-screen relative pb-6">
      <div className="h-full grid md:grid-cols-2 md:grid-rows-1">
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
