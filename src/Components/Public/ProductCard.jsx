import React from "react";
import { ShoppingCart, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProductCard = ({ product }) => {
    const WHATSAPP_NUMBER = "6281394785848";

    const handleBuyWhatsApp = (e) => {
        e.preventDefault(); 
        const message = `Halo Admin, saya ingin memesan produk berikut:%0A%0A` +
            `*Nama Produk:* ${product.name}%0A` +
            `*Harga:* Rp ${product.price.toLocaleString("id-ID")}%0A` +
            `*Kategori:* ${product.category}%0A%0A` +
            `Apakah stok masih tersedia?`;

        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
        window.open(waUrl, "_blank");
    };

    return (
        
        <Card className="group overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-xl">
            <CardHeader className="p-0 relative aspect-square overflow-hidden bg-muted">
                <img
                    src={product.image || "https://placehold.co/400x400?text=No+Image"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                    
                    <Badge variant="secondary" className="shadow-sm font-black uppercase tracking-widest">
                        {product.category || "Produk"}
                    </Badge>
                </div>
            </CardHeader>

            <CardContent className="p-5">
                <h3 className="text-lg font-bold line-clamp-1 group-hover:text-primary transition-colors">
                    {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2 h-10 leading-relaxed">
                    {product.desc || "Tidak ada deskripsi produk."}
                </p>

                <div className="mt-6 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-muted-foreground uppercase font-bold">Harga</span>
                        <span className="text-xl font-black leading-none">
                            Rp {product.price ? product.price.toLocaleString("id-ID") : "0"}
                        </span>
                    </div>

                    
                    <Button
                        size="icon"
                        onClick={handleBuyWhatsApp}
                        className="bg-green-200 hover:bg-green-600 shadow-lg shadow-green-100 rounded-xl"
                    >
                        <ShoppingCart size={20} />
                    </Button>
                </div>
            </CardContent>

            <CardFooter className="p-5 pt-0">
                
                <Button asChild variant="outline" className="w-full gap-2 font-bold text-xs uppercase tracking-wider">
                    <Link to={`/detail-produk/${product.id}`}>
                        LIHAT DETAIL <ExternalLink size={14} />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;