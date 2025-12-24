
import React from "react";
import { Save, X } from "lucide-react";

const FormData = ({ formData, onChange, onSubmit, onCancel, isEditing }) => {
    return (
        <div className="bg-white p-6 rounded-2xl border-2 border-blue-50 shadow-sm mb-8 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-gray-700">
                    {isEditing ? "📍 Edit Produk" : "✨ Tambah Produk Baru"}
                </h2>
                <button onClick={onCancel} className="text-gray-400 hover:text-red-500">
                    <X size={20} />
                </button>
            </div>

            <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-gray-400 ml-1">NAMA PRODUK</label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={onChange}
                        placeholder="Contoh: Sepatu Nike"
                        className="p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        required
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-gray-400 ml-1">HARGA (RP)</label>
                    <input
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={onChange}
                        placeholder="0"
                        className="p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        required
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-gray-400 ml-1">KATEGORI</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={onChange}
                        className="p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                        <option value="Elektronik">Elektronik</option>
                        <option value="Aksesoris">Aksesoris</option>
                        <option value="Pakaian">Pakaian</option>
                    </select>
                </div>

                <div className="flex items-end">
                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-green-100 transition-all"
                    >
                        <Save size={18} />
                        {isEditing ? "Simpan Perubahan" : "Simpan Produk"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormData;