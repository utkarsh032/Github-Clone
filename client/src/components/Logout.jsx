import { IoMdLogOut } from "react-icons/io";


const Logout = () => {
  return (
    <>
     <img 
     src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
     className="w-10 h-10 rounded-full border border-gray-800"
     /> 

     <div className='cursor-pointer flex items-center p-2 rounded-lg mt-auto border border-gray-800 hover:bg-gray-800'>
     <IoMdLogOut size={22}/>
     </div>
    </>
  )
}

export default Logout
