import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../Components/Public/ProductCard";
import { Skeleton } from "@/components/ui/skeleton"; 
import { Button } from "@/Components/ui/button";

const CatalogPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_URL = "https://695bbbda1d8041d5eeb82c39.mockapi.io/products";

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                
                const response = await axios.get(API_URL);
                setProducts(response.data);
            } catch (error) {
                console.error("Gagal mengambil data produk:", error);
            } finally {
                
                setTimeout(() => setLoading(false), 200);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <main className="grow p-8 bg-gray-50/50">
                <div className="container mx-auto">
                    <div className="flex flex-col mb-8">
                        <h1 className="text-3xl font-black text-gray-900 tracking-tight uppercase italic">
                            Katalog Produk
                        </h1>
                        <div className="h-1.5 w-20 bg-blue-600 mt-2 rounded-full" />
                    </div>

                    {loading ? (
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[1, 2, 3, 4].map((n) => (
                                <div key={n} className="space-y-4 bg-white p-4 rounded-3xl shadow-sm">
                                    <Skeleton className="aspect-square w-full rounded-2xl" />
                                    <Skeleton className="h-6 w-3/4 rounded-full" />
                                    <Skeleton className="h-4 w-1/2 rounded-full" />
                                    <Skeleton className="h-10 w-full rounded-xl" />
                                </div>
                            ))}
                        </div>
                    ) : products.length > 0 ? (
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-700">
                            {products.map((item) => (
                                <ProductCard key={item.id} product={item} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                            <p className="text-lg font-medium">Belum ada produk yang tersedia di MockAPI.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default CatalogPage;