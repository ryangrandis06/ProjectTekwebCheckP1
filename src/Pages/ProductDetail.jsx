import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft } from "lucide-react";
import ProductCard from "../Components/Public/ProductCard"; 

const ProductDetail = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    
    const API_URL = `https://695bbbda1d8041d5eeb82c39.mockapi.io/products/${id}`;

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                setLoading(true);
                
                const response = await axios.get(API_URL);
                setProduct(response.data);
            } catch (error) {
                console.error("Gagal memuat detail produk:", error);
            } finally {
                
                setTimeout(() => setLoading(false), 800);
            }
        };

        if (id) fetchProductDetail();
    }, [id]);

    return (
        <div className="min-h-screen bg-white py-12">
            <div className="container mx-auto px-6">
                
                <Button 
                    variant="ghost" 
                    onClick={() => navigate(-1)} 
                    className="mb-8 hover:bg-slate-100 font-bold"
                >
                    <ChevronLeft className="mr-2" /> Kembali ke Katalog
                </Button>

                
                {loading ? (
                    <div className="max-w-md mx-auto space-y-4">
                        
                        <Skeleton className="aspect-square w-full rounded-3xl" />
                        <Skeleton className="h-8 w-3/4 rounded-full" />
                        <Skeleton className="h-6 w-1/2 rounded-full" />
                        <Skeleton className="h-12 w-full rounded-xl" />
                    </div>
                ) : product ? (
                    <div className="max-w-md mx-auto animate-in fade-in duration-700">
                        
                        <ProductCard product={product} />
                        
                        
                        <div className="mt-8 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                            <h3 className="text-lg font-black text-slate-900 mb-2 uppercase italic">Deskripsi Produk</h3>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                {product.desc || "Produk berkualitas tinggi yang dirancang khusus untuk kenyamanan dan produktivitas Anda sehari-hari."}
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-20 text-slate-400 font-medium italic">
                        Maaf, produk tidak ditemukan atau terjadi masalah pada server.
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;