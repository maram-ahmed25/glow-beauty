
import { ShoppingBag, Menu, X, House, Package, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="relative bg-[#FAF6F0] shadow-sm px-10 py-4 flex items-center justify-between gap-4 border-b border-[#D8CBBF]">

            <div className="flex items-center gap-2">
                <div className="bg-[#512A3A] text-[#FAF6F0] p-2 rounded-xl">
                    <ShoppingBag size={24} strokeWidth={1.7} />
                </div>

                <div>
                    <h1 className="text-xl font-bold tracking-wide text-[#512A3A] font-display">
                        GLOW
                    </h1>

                    <p className="text-xs tracking-[0.25em] text-[#C2A36B]">
                        BEAUTY
                    </p>
                </div>
            </div>

            <button
                className="ml-auto md:hidden text-[#512A3A]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div
                className={`${isMenuOpen
                    ? "flex flex-col gap-4 absolute top-full left-0 w-full bg-[#FAF6F0] p-4 shadow-md border-b border-[#D8CBBF]"
                    : "hidden"
                    } md:flex md:flex-row md:items-center md:gap-6 md:mx-auto`}
            >
                <div className="md:hidden border-t border-[#D8CBBF] pt-3" />

                <Link
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 text-[#302A2B] font-medium hover:text-[#C2A36B] transition-colors duration-300 hover:underline underline-offset-8 decoration-[#C2A36B]"
                >
                    <House className="md:hidden" size={18} />
                    Home
                </Link>

                <Link
                    to="/#products"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 text-[#302A2B] font-medium hover:text-[#C2A36B] transition-colors duration-300 hover:underline underline-offset-8 decoration-[#C2A36B]"
                >
                    <Package className="md:hidden" size={18} />
                    Products
                </Link>


                <Link
                    to="/about"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 text-[#302A2B] font-medium hover:text-[#C2A36B] transition-colors duration-300 hover:underline underline-offset-8 decoration-[#C2A36B]"
                >
                    About Us
                </Link>

                <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 text-[#302A2B] font-medium hover:text-[#C2A36B] transition-colors duration-300 hover:underline underline-offset-8 decoration-[#C2A36B]"
                >
                    Contact Us
                </Link>
            </div>

            <div className="hidden md:block">
                <Link
                    to="/cart"
                    aria-label="Shopping cart"
                    className="text-[#512A3A] hover:text-[#C2A36B] transition-colors duration-300"
                >
                    <ShoppingBag size={24} strokeWidth={1.7} />
                </Link>
            </div>

        </nav>
    );
}

export default Navbar;

