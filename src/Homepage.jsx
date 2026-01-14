import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import { Skeleton } from "@/components/ui/skeleton"; 
import ProductCard from "./Components/Public/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; 
import { ArrowRight, Search, X } from "lucide-react"; 

const Homepage = () => {
    const navigate = useNavigate(); 
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);
    
    const [searchQuery, setSearchQuery] = useState("");

    const API_URL = "https://695bbbda1d8041d5eeb82c39.mockapi.io/products";

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await axios.get(API_URL); 
            setProducts(response.data); 
        } catch (error) {
            console.error("Gagal mengambil data:", error); 
        } finally {
            setLoading(false);
        }
    };

    const handleSeeMore = () => {
        if (!isCatalogOpen) fetchProducts();
        setIsCatalogOpen(true);
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <main className="grow">
                <section className="relative py-24 lg:py-32 bg-slate-950 text-white overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]"></div>
                    </div>
                    
                    <div className="container mx-auto px-6 text-center relative z-10">
                        <h1 className="text-6xl lg:text-8xl font-black mb-6 tracking-tighter italic">
                            GENG. <span className="text-blue-500">KAPAK.</span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-medium">
                            Dapatkan Belanjaan Yang WOW.
                        </p>
                        <Button 
                            size="lg" 
                            variant="default" 
                            onClick={() => navigate("/catalog")} 
                            className="bg-blue-600 hover:bg-blue-700 text-white font-black px-12 py-8 text-xl rounded-2xl shadow-2xl shadow-blue-500/20 transition-transform hover:scale-105 active:scale-95"
                        >
                            KATALOG 
                        </Button>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-black tracking-tighter uppercase italic text-slate-900">Featured Items</h2>
                            <p className="text-slate-500 font-medium">Produk pilihan terbaik minggu ini.</p>
                        </div>

                        {isCatalogOpen && (
                            <div className="relative w-full md:w-96 group animate-in fade-in slide-in-from-right-5 duration-500">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                                <Input 
                                    placeholder="Cari produk atau kategori..." 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-12 pr-10 py-7 rounded-2xl border-2 border-slate-100 focus:border-blue-500 bg-slate-50/50 shadow-sm transition-all text-lg font-medium"
                                />
                                {searchQuery && (
                                    <button 
                                        onClick={() => setSearchQuery("")}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                    >
                                        <X size={18} />
                                    </button>
                                )}
                            </div>
                        )}

                        {!isCatalogOpen && (
                            <Button 
                                variant="outline" 
                                onClick={handleSeeMore} 
                                className="border-2 border-slate-900 font-bold hover:bg-slate-900 hover:text-white rounded-xl py-6 px-8 transition-all"
                            >
                                SEE MORE KATALOG <ArrowRight className="ml-2" size={20} />
                            </Button>
                        )}
                    </div>

                    {isCatalogOpen && (
                        <div className="animate-in fade-in slide-in-from-bottom-10 duration-700">
                            {loading ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {[1, 2, 3, 4].map((n) => (
                                        <div key={n} className="space-y-4">
                                            <Skeleton className="aspect-square w-full rounded-3xl" />
                                            <Skeleton className="h-6 w-3/4 rounded-full" />
                                            <Skeleton className="h-10 w-full rounded-2xl" />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <>
                                    {filteredProducts.length === 0 ? (
                                        <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                                            <p className="text-xl font-bold text-slate-400">Oops! Produk "{searchQuery}" tidak ditemukan.</p>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                            {filteredProducts.map((product) => (
                                                <ProductCard key={product.id} product={product} />
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
};

export default Homepage;