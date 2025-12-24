import React from "react";
import { PackagePlus, LayoutDashboard } from "lucide-react";

const AdminHeader = ({ onAddClick, isFormOpen }) => {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
                <h1 className="text-2xl font-black text-gray-800 flex items-center gap-2">
                    <LayoutDashboard className="text-blue-600" size={28} />
                    Admin Panel
                </h1>
                <p className="text-gray-500 text-sm">Kelola stok dan harga produk toko Anda.</p>
            </div>

            <button
                onClick={onAddClick}
                className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg ${isFormOpen
                        ? "bg-gray-100 text-gray-500 hover:bg-gray-200"
                        : "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-100"
                    }`}
            >
                <PackagePlus size={20} />
                {isFormOpen ? "Batal" : "Tambah Produk"}
            </button>
        </div>
    );
};

export default AdminHeader;