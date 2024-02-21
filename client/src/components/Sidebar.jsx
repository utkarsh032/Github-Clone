import { Link } from "react-router-dom"

import { IoHome } from "react-icons/io5";
import { PiSignInBold } from "react-icons/pi";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineExplore } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import Logout from './Logout.jsx'


const Sidebar = () => {
const authUser = true

  return (
    <aside className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto border-r bg-morphism">
      <nav className="h-full flex flex-col gap-3 ">
        <Link to='/' className="flex justify-center" title="Github">
          <img className='h-10' src="github.svg" alt="Github" />
        </Link>
        <hr />

        <Link to="/" className="p-1.5 flex justify-center transition-colors duration-300 rounded-lg hover:bg-gray-800" title="Home">
          <IoHome size={22} />
        </Link>

        {authUser && (
          <Link to="likes"  className="p-1.5 flex justify-center transition-colors duration-300 rounded-lg hover:bg-gray-800" >
        <FaHeart size={22} />
      </Link> 
      )}

        {authUser && (
          <Link to="explore"  className="p-1.5 flex justify-center transition-colors duration-300 rounded-lg hover:bg-gray-800" >
        <MdOutlineExplore size={22} />
      </Link> 
      )}


      {!authUser && (
          <Link to="/signup" className="p-1.5 flex justify-center transition-colors duration-300 rounded-lg hover:bg-gray-800" title="Edit">
        <PiSignInBold size={22} />
      </Link>
      )}

      {!authUser && (
          <Link className="p-1.5 flex justify-center transition-colors duration-300 rounded-lg hover:bg-gray-800" title="Edit">
        <FaEdit size={22} />
      </Link>
      )}

      {authUser && (
        <div className='flex flex-col gap-2 mt-auto'>
        <Logout />
        </div>
      )}
        
      </nav>
    </aside>
  )
}

export default Sidebar
