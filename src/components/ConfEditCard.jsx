import { useState } from "react";
import { MdErrorOutline } from "react-icons/md";

function ConfEditCard({confirmEditHandler, cancelEditHandler}){
    const [formData, setFormData] = useState({name:"", email:"", title:"", department:"", role:""})


    function changeHandler(event){
        const {value, name} = event.target;

        setFormData(prevData => {
            return {
            ...prevData,
            [name]: value
            }
        })
    }

    function submitHandler(event){
        event.preventDefault();
        confirmEditHandler(formData)
    }

    return (
        <div className="w-screen h-screen fixed top-0 left-0">
            <div onClick={cancelEditHandler} className="w-full h-full overflow-hidden bg-slate-300 opacity-50 absolute top-0 left-0"></div>
            <div className="bg-gray-200 absolute flex flex-col justify-center items-center px-10 py-5 rounded-md top-[56%] left-[50%] -translate-x-[50%] -translate-y-[70%]">
                <form onSubmit={submitHandler} className="flex flex-col gap-2">
                    <div className="font-semibold text-[1.2rem]">Fill only the fields you wish to change!</div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name">Employee Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={changeHandler}
                            placeholder="Enter New Full Name"
                            className="rounded-md py-1 px-3 bg-black border text-white"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Employee Email Id</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={changeHandler}
                            placeholder="Enter New Email"
                            className="rounded-md py-1 px-3 bg-black border text-white"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="title">Employee Title</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={formData.title}
                            onChange={changeHandler}
                            placeholder="Enter New Employee Title"
                            className="rounded-md py-1 px-3 bg-black border text-white"
                            />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="department">Employee Department</label>
                        <input 
                            type="text" 
                            name="department" 
                            id="department"
                            value={formData.department}
                            onChange={changeHandler}
                            placeholder="Enter New Employee Department" 
                            className="rounded-md py-1 px-3 bg-black border text-white"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="role">Employee Role</label>
                        <input 
                            type="text" 
                            name="role" 
                            id="role"
                            value={formData.role}
                            onChange={changeHandler}
                            placeholder="Enter New Employee Role" 
                            className="rounded-md py-1 px-3 bg-black border text-white"
                        />
                    </div>

                    
                    <div className="w-full flex justify-between mt-2">
                        <button type="submit" className="bg-green-500 text-gray-100 font-semibold px-4 py-1 rounded-md">Update</button>
                        <button className="bg-red-500 text-gray-100 font-semibold px-4 py-1 rounded-md" onClick={cancelEditHandler}>Cancel</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default ConfEditCard;
