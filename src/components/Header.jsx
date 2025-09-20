import { Link } from "react-router"

const Header = () => {
    return (
        <>
            <header className="p-4 bg-black">
                <div className="max-w-7xl mx-auto text-white flex justify-between items-center">
                    <Link to="/" className="text-3xl font-bold">My Blog</Link>
                    <div>
                        <nav className="flex gap-4 text-sm font-bold">
                            <Link to="/">Home</Link>
                            <Link to="/add-blog">Add Blog</Link>
                            <Link to="/about">About</Link>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;