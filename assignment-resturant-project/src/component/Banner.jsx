
import { CircleStackIcon} from '@heroicons/react/24/solid'

const Banner = () => {
    return (
        <div className='bg-purple-50 m-2'>
        <div className='flex gap-9 w-10/12 mx-auto items-center'>
            <div className='w-2/4'>
                {/* <h1 className='text-7xl font-bold leading-tight'>One Step <br /> Closer To Your <br /> <span className='text-blue-500'>Dream Job</span></h1> */}
                <div className="flex items-center gap-2">
                    <CircleStackIcon className="W-9 text-orange-300  h-20 align-center"></CircleStackIcon>
                    <h1 className="font-bold text-5xl  text-black tracking-wide">Millen<span className="text-red-700">Nium</span> <br />   Restaurant</h1>
                </div>
                <p className='text-3xl mt-8 mb-4 text-black  leading-7 font-semibold w-3/4'>Resturant <br /><span className='text-blue-600'>Chafe</span> Theme</p>
                <button className='bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-5 px-10 rounded-lg text-xl font-extrabold leading-7 mb-2 '>Get Started</button>
            </div>
            <div>
                <img className="rounded py-8" src="https://i.ibb.co/1M7Lmxz/chef-picture.jpg" alt="" />
            </div>
        </div>
    </div>
    );
};

export default Banner;