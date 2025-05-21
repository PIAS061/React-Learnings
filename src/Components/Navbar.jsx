import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <nav className="bg-amber-950 text-white shadow-md">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center max-w-5xl mx-auto w-full ">
                    <Link to="/" className="text-xl font-bold"> My-Portfolio</Link>
                    <div className="space-x-4">
                        <Link to="/" className="hover:underline text-red-400" > Home</Link>
                        <Link to="/skills" className="hover:underline text-red-400" >Skills</Link>
                        <Link to="/about" className="hover:underline text-red-400" >About</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;