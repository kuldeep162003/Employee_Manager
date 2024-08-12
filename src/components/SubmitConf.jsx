import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function SubmitConf({confirmHandler, cancelHandler}){
    return (
        <div className="w-screen h-screen absolute top-0 left-0">
            <div onClick={cancelHandler} className="w-full h-full overflow-hidden bg-slate-300 opacity-50 absolute top-0 left-0"></div>
            <div className="bg-gray-200 absolute flex flex-col justify-center items-center px-10 py-5 rounded-md top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <IoMdCheckmarkCircleOutline className="text-green-400 text-4xl font-extralight mb-2"/>
                <p className="font-semibold text-2xl text-black">Submit data?</p>
                <p className="mb-4 text-black text-center">Please confirm for the data submission!</p>
                <div className="flex gap-4">
                    <button className="bg-green-500 text-gray-100 font-semibold px-4 py-1 rounded-md" onClick={confirmHandler}>Yes, Submit!</button>
                    <button className="bg-gray-300 text-gray-800 font-semibold px-4 py-1 rounded-md" onClick={cancelHandler}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default SubmitConf;
