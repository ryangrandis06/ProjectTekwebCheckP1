import React from "react";
import { Edit3, Trash2, Inbox } from "lucide-react";

const DataTable = ({ products, onEdit, onDelete }) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                        <th className="p-4 text-xs font-black text-gray-400 uppercase tracking-widest">Produk</th>
                        <th className="p-4 text-xs font-black text-gray-400 uppercase tracking-widest">Kategori</th>
                        <th className="p-4 text-xs font-black text-gray-400 uppercase tracking-widest">Harga</th>
                        <th className="p-4 text-xs font-black text-gray-400 uppercase tracking-widest text-center">Aksi</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {products.length > 0 ? (
                        products.map((item) => (
                            <tr key={item.id} className="hover:bg-blue-50/30 transition-colors group">
                                <td className="p-4 font-bold text-gray-700">{item.name}</td>
                                <td className="p-4">
                                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black rounded-full uppercase">
                                        {item.category}
                                    </span>
                                </td>
                                <td className="p-4 font-medium text-gray-600">
                                    Rp {item.price.toLocaleString("id-ID")}
                                </td>
                                <td className="p-4">
                                    <div className="flex justify-center gap-2">
                                        <button
                                            onClick={() => onEdit(item)}
                                            className="p-2 text-amber-500 hover:bg-amber-50 rounded-lg transition-all"
                                        >
                                            <Edit3 size={18} />
                                        </button>
                                        <button
                                            onClick={() => onDelete(item.id)}
                                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="p-12 text-center text-gray-300">
                                <div className="flex flex-col items-center gap-2">
                                    <Inbox size={40} />
                                    <p className="font-medium">Belum ada data produk</p>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;