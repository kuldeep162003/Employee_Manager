import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import ConfCard from "../components/ConfCard";
import { toast } from "react-hot-toast"
import ConfEditCard from "../components/ConfEditCard";
import Spinner from "../components/Spinner";

function HomePage(){
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState({show: false, employeeId: null});
  const [confirmEdit, setConfirmEdit] = useState({show: false, employeeId: null});
  const [loding, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}/users`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json();
        // console.log(result);
        setPeople(result.data || []);
    } catch (e) {
        console.error(e.message);
        setPeople([]);
    } finally {
        setLoading(false);
    }
};


  async function deleteEmployee(){
    try{
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/users/deleteUser/${confirmDelete.employeeId}`,
        {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      const result = res.json();
      toast.success("Successfully deleted");
      getData();
    }
    catch(e){
      console.error(e.message);
      toast.error("Error Occured! Data not deleted");
    }
  }

  async function editEmployee(obj){
    try{
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/users/editUser/${confirmEdit.employeeId}`,
        {
          method: 'PUT',
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify(obj)
        }
      );
  
      const result = res.json();
      toast.success("Data Updated Successfully");
      getData();
    } catch(e){
      console.error(e.message);
      toast.error("Error Occured! Data not updated");
    }
  }

  function deleteClickHandler(employeeId){
    setConfirmDelete({show: true, employeeId})
  }
  
  function confirmDeleteHandler(){
    deleteEmployee();
    setConfirmDelete({show: false, employeeId: null})
  }
  
  function cancelDeleteHandler(){
    setConfirmDelete({show: false, employeeId: null})
  }
  
  function editClickHandler(employeeId){
    setConfirmEdit({show: true, employeeId})
  }

  function confirmEditHandler(obj){
    editEmployee(obj);
    setConfirmEdit({show: false, employeeId: null});
  }

  function cancelEditHandler(){
    setConfirmEdit({show: false, employeeId: null});
  }


  useEffect(()=>{
    getData();
  }, [])

  return (
    <div className="flex flex-col items-center px-4 pb-6">
      <div className="text-gray-100 w-full max-w-[1200px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold">Employee</h2>
          <p className="text-sm">
            This is the list of current Employees. You can add new employees or delete the existing
            employee data.
          </p>
        </div>
        <div>
          <button
            onClick={() => navigate("/create-employee")}
            className="bg-blue-400 rounded-md text-gray-100 px-4 py-2 text-sm font-semibold mt-2 sm:mt-0"
          >
            Add Employee
          </button>
        </div>
      </div>
    
      <div className="w-full max-w-[1200px]">
        <div className="w-full grid grid-cols-1 gap-1">
          <div className="grid grid-cols-1 sm:grid-cols-[5fr_3fr_2fr] text-left text-gray-400 font-bold bg-gray-800 rounded-md py-2 px-4">
            <div>Employee</div>
            <div className="hidden sm:block">Title</div>
            <div className="hidden sm:block">Role</div>
          </div>
          {loding ? (
            <Spinner></Spinner>
          ) : people?.length === 0 ? (
            <div className="text-gray-50 text-center text-2xl mt-10">
              No Employees in the Database
            </div>
          ) : (
            people.map((person) => {
              return (
                <div
                  key={person._id}
                  className="grid grid-cols-1 sm:grid-cols-[5fr_3fr_2fr] text-left text-gray-100 bg-gray-700 rounded-lg px-5 py-4 gap-4"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="w-11">
                        <img src={person.image} alt="" className="rounded-full" />
                      </div>
                      <div className="flex flex-col justify-center gap-1">
                        <p className="font-semibold leading-4">{person.name}</p>
                        <p className="text-sm text-gray-300">{person.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center mt-4 sm:mt-0">
                    <p>{person.title}</p>
                    <p className="text-sm text-gray-300">{person.department}</p>
                  </div>
                  <div className="flex items-center justify-between gap-4 mt-4 sm:mt-0">
                    <p>{person.role}</p>
                    <div className="flex gap-3">
                      <button onClick={() => editClickHandler(person._id)}>
                        <MdModeEditOutline />
                      </button>
                      <button onClick={() => deleteClickHandler(person._id)}>
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    
      {confirmDelete.show && (
        <ConfCard
          confirmDeleteHandler={confirmDeleteHandler}
          cancelDeleteHandler={cancelDeleteHandler}
        />
      )}
      {confirmEdit.show && (
        <ConfEditCard
          confirmEditHandler={confirmEditHandler}
          cancelEditHandler={cancelEditHandler}
        />
      )}
    </div>
  );
}

export default HomePage;
