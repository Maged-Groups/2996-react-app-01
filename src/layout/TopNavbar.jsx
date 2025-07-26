import { useEffect } from "react";
import { useState } from "react";
import { FaBars, FaHome, FaInfo, FaTimes } from "react-icons/fa";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { useHref } from 'react-router'
import { useSelector } from "react-redux";


export default function TopNavbar() {

    const [showMobileNav, setShowMobileNav] = useState(false)

    const { isLoggedin, username } = useSelector(store => store.userSlice);


    const href = useHref();
    console.log(href)

    const logout = () => {
        toast.error(<div>
            <h2 className="text-2xl text-red">Message Title</h2>
            <p><FaInfo /> Lorem ipsum dolor sit amet.</p>

        </div>, {
            autoClose: false,
            position: 'bottom-left'
        });
        toast.info('Some info', {
            theme: 'dark'
        })
    }

    // When the url changed, navbar closed
    useEffect(() => {
        setShowMobileNav(false);
    }, [href])

    return (
        <nav className="bg-white shadow-sm">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Left side - Logo/Brand */}
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-gray-800">MyApp</span>
                    </div>

                    {/* Center - Desktop Navigation Links */}
                    <div className="hidden 2xl:flex items-center space-x-8 overflow-auto">
                        <Link to="/" className="text-gray-800 hover:text-blue-600 px-3 py-2 font-medium flex items-center">
                            <FaHome />
                            Home
                        </Link>
                        {
                            isLoggedin &&
                            <>
                                <Link to="/users" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Users</Link>
                                <Link to="/users" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Products</Link>
                                <Link to="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Quotes</Link>
                                <Link to="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Todos</Link>
                                <Link to="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Carts</Link>
                                <Link to="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Posts</Link>
                                <Link to="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Comments</Link>
                                <Link to="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Recipes</Link>
                            </>
                        }
                        <Link to="/services" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Services</Link>
                        <Link to="/about" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">About</Link>
                        <Link to="/contact" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Contacts</Link>
                    </div>

                    {/* Center - Mobile Navigation Links */}
                    <div className={`${showMobileNav ? 'flex' : 'hidden'} flex-col gap-4 bg-white text-gray-700 w-screen h-screen z-50 fixed left-0`}>
                        <FaTimes onClick={() => setShowMobileNav(false)} className="fixed right-4 top-4 text-red-800 cursor-pointer" />

                        <Link to="/" className="text-gray-800 hover:text-blue-600 px-3 py-2 font-medium flex items-center">
                            <FaHome />
                            Home
                        </Link>
                        {
                            isLoggedin &&
                            <>
                                <Link to="/users" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Users</Link>
                                <Link to="/produts" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Products</Link>
                                <Link to="/quotes" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Quotes</Link>
                                <Link to="/todos" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Todos</Link>
                                <Link to="/carts" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Carts</Link>
                                <Link to="/posts" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Posts</Link>
                                <Link to="/comments" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Comments</Link>
                                <Link to="/recipes" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Recipes</Link>
                            </>
                        }
                        <Link to="/services" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Services</Link>
                        <Link to="/about" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">About</Link>
                        <Link to="/contact" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Contacts</Link>
                    </div>

                    {/* Accoutn */}
                    <div className="flex items-center space-x-4">
                        {
                            isLoggedin ?
                                <>
                                    <span>Welcome {username}</span>
                                    <button onClick={logout} className="cursor-pointer bg-white hover:bg-red-700 text-red-700 hover:text-white px-4 py-2 rounded-md font-medium">Logout</button>
                                </>
                                :
                                <>
                                    <span>{username}</span>
                                    <Link to='auth/login' className="cursor-pointer text-gray-500 hover:text-gray-800 px-3 py-2 font-medium">Sign In</Link>
                                    <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">Sign Up</button>
                                </>
                        }
                    </div>

                    {/* Mobile menu button (hamburger) - simple version without icons */}
                    <div className="2xl:hidden flex items-center">
                        <button onClick={() => setShowMobileNav(true)} className="cursor-pointer text-gray-500 hover:text-gray-800">
                            <FaBars />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}