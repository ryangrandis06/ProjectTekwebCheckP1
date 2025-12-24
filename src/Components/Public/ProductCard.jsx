import React from "react";
import { ShoppingCart, ExternalLink } from "lucide-react";

const ProductCard = ({ product }) => {
    const WHATSAPP_NUMBER = "6281394785848";

    const handleBuyWhatsApp = () => {
        const message = `Halo Admin, saya ingin memesan produk berikut:%0A%0A` +
            `*Nama Produk:* ${product.name}%0A` +
            `*Harga:* Rp ${product.price.toLocaleString("id-ID")}%0A` +
            `*Kategori:* ${product.category}%0A%0A` +
            `Apakah stok masih tersedia?`;

        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

        window.open(waUrl, "_blank");
        console.log(`Mengarahkan pesanan ${product.name} ke WhatsApp`);
    };

    return (
        <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative aspect-square overflow-hidden bg-gray-50">
                <img
                    src={product.image || "https://placehold.co/400x400?text=No+Image"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                    <span className="bg-white/90 backdrop-blur-sm text-blue-600 text-[10px] font-black px-3 py-1 rounded-full shadow-sm uppercase tracking-widest">
                        {product.category || "Produk"}
                    </span>
                </div>
            </div>

            <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {product.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2 h-10 leading-relaxed">
                    {product.desc || "Tidak ada deskripsi produk."}
                </p>

                <div className="mt-6 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Harga</span>
                        <span className="text-xl font-black text-gray-900 leading-none">
                            Rp {product.price ? product.price.toLocaleString("id-ID") : "0"}
                        </span>
                    </div>

                    <button
                        onClick={handleBuyWhatsApp}
                        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-xl shadow-lg shadow-green-100 transition-all active:scale-95 group/btn"
                        title="Beli via WhatsApp"
                    >
                        <ShoppingCart size={20} className="group-hover/btn:rotate-12 transition-transform" />
                    </button>
                </div>

                <button className="w-full mt-4 py-2 text-xs font-bold text-gray-400 border border-gray-100 rounded-lg hover:bg-gray-50 hover:text-blue-500 hover:border-blue-100 transition-all flex items-center justify-center gap-2">
                    LIHAT DETAIL <ExternalLink size={14} />
                </button>
            </div>
        </div>
    );
};

export default ProductCard;