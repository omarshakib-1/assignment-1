
import { Link, NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div>
      <div className='flex justify-between w-10/12 mx-auto mt-2'>
        <Link to={'/'} className='inline-flex items-center'>
          <span className='font-bold text-5xl ml-2 text-black tracking-wide'>Millen<span className="text-red-700">Nium</span></span>
        </Link>
        {/* nav bar section  */}
        <ul className='items-center space-x-8 lg:flex'>

          <li className='text-lg font-semibold'>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'text-blue-500 ' : 'default')}
            >
              Home
            </NavLink>
          </li>
          <li className='text-lg font-semibold'>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? 'text-blue-500 ' : 'default')}
            >
              About
            </NavLink>
          </li>
          <li className='text-lg font-semibold'>
            <NavLink
              to='/more'
              className={({ isActive }) => (isActive ? 'text-blue-500 ' : 'default')}
            >
              More Recipes
            </NavLink>
          </li>

          <li className='text-lg font-semibold'>
            <NavLink
              to='/Blogs'
              className={({ isActive }) => (isActive ? 'text-blue-500 ' : 'default')}
            >
              Blogs
            </NavLink>
          </li>

        </ul>

        <div className="flex gap-2">
            <button className='bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-7 rounded-md text-xl'>Log In</button>
          <button className='bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-7 rounded-md text-xl'>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Header;