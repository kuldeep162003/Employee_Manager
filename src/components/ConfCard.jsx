import { MdErrorOutline } from "react-icons/md";

function ConfCard({confirmDeleteHandler, cancelDeleteHandler}){
    return (
        <div className="w-screen h-screen fixed top-0 left-0">
            <div onClick={cancelDeleteHandler} className="w-full h-full overflow-hidden bg-slate-300 opacity-50 absolute top-0 left-0"></div>
            <div className="bg-gray-200 absolute flex flex-col justify-center items-center px-10 py-5 rounded-md top-[50%] left-[50%] -translate-x-[50%] -translate-y-[70%]">
                <MdErrorOutline className="text-orange-400 text-4xl font-extralight mb-2"/>
                <p className="font-semibold text-2xl">Are you sure?</p>
                <p className="mb-4 text-center">You won't be able to revert this!</p>
                <div className="w-full flex justify-between">
                    <button className="bg-blue-500 text-gray-100 font-semibold px-4 py-1 rounded-md" onClick={confirmDeleteHandler}>Delete</button>
                    <button className="bg-red-500 text-gray-100 font-semibold px-4 py-1 rounded-md" onClick={cancelDeleteHandler}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default ConfCard;
