import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <Card className="overflow-hidden border-2 hover:shadow-lg transition-all">
            <CardHeader className="p-0">
                {/* Menggunakan placeholder 400x400 sesuai tampilan gambar */}
                <img
                    src={product.image || "https://placehold.co/400"}
                    alt={product.name}
                    className="aspect-square object-cover"
                />
            </CardHeader>
            <CardContent className="p-4">
                {/* Komponen Badge untuk Kategori */}
                <Badge variant="secondary" className="mb-2">
                    {product.category}
                </Badge>
                <h3 className="font-bold text-lg line-clamp-1">{product.name}</h3>
                <p className="text-xl font-black mt-2">
                    Rp {product.price?.toLocaleString("id-ID")}
                </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                {/* Navigasi Dynamic Route menggunakan Link */}
                <Button asChild className="w-full">
                    <Link to={`/detail-produk/${product.id}`}>Lihat Detail</Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;