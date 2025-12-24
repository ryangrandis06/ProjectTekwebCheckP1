import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Store, LayoutDashboard, ShoppingBag } from "lucide-react";

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">

                <Link to="/" className="flex items-center gap-2 group">
                    <div className="bg-blue-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
                        <Store className="text-white" size={20} />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-indigo-600">
                        Gk-Store
                    </span>
                </Link>

                <div className="flex items-center gap-1 md:gap-4">
                    <Link
                        to="/"
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive("/")
                                ? "bg-blue-50 text-blue-600"
                                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                    >
                        <ShoppingBag size={18} />
                        <span className="hidden md:block">Katalog</span>
                    </Link>

                    <Link
                        to="/admin"
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive("/admin")
                                ? "bg-blue-50 text-blue-600"
                                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                    >
                        <LayoutDashboard size={18} />
                        <span className="hidden md:block">Admin Panel</span>
                    </Link>
                </div>

                <div className="hidden md:block border-l border-gray-200 pl-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-tighter">
                            Checkpoint 1 Aktif
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;