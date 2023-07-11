

const Footer = () => {
    return (
        <div className='bg-black text-white'>
        <div className='w-10/12 mx-auto  pb-14'>
            <div className='flex  justify-between py-10'>
                <div className='w-96'>
                    <h2 className='text-3xl underline mb-4 font-semibold'>Millen<span className="text-red-700">Nium</span></h2>
                    <p className='text-lg font-semibold text-gray-400'>There are many variations of passages of Lorem Ipsum,but the majority have suffered alteration in some form.</p>
                </div>
                <div>
                    <h3 className='text-3xl underline mb-4 font-semibold'>About More</h3>
                    <ul className='text-lg font-semibold text-gray-400'>
                        <li>Rating Us</li>
                        <li>Chefs</li>
                        <li>Recipes</li>
                        <li>Servant</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-3xl underline mb-4 font-semibold'>Hospitality</h3>
                    <ul className='text-lg font-semibold text-gray-400'>
                        <li>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li>Customers</li>
                        <li>Custom</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-3xl mb-4 font-semibold underline'>Support</h3>
                    <ul className='text-lg font-semibold text-gray-400'>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a Partner</li>
                        <li>Developers</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-3xl mb-4 font-semibold underline'>Contact</h3>
                    <p className='text-lg font-semibold text-gray-400'>524 Broadway , NYC</p>
                    <p className='text-lg font-semibold text-gray-400'>+1 777 - 978 - 5570</p>
                </div>
            </div>
            <hr />
            <div className='flex justify-between'>
                <div><p className='text-lg font-semibold text-gray-400'>@2023 SFC tech. All Rights Reserved</p></div>
                <div><p className='text-lg font-semibold text-gray-400'>Powered by SFC tech</p></div>
            </div>
        </div>
    </div>
    );
};

export default Footer;