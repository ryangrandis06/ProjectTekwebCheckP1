import Navbar from "../Components/Public/Navbar";
import ProductCard from "../Components/Public/ProductCard";
import Footer from "../Components/Public/Footer";

const CatalogPage = ({ products }) => {
    {
        products.map((item) => (
            <ProductCard key={item.id} product={item} />
        ))
    }
    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="container mx-auto">
                <h1 className="text-3xl font-black text-gray-800 mb-8">Katalog Produk</h1>

                {products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-gray-400">
                        Belum ada produk yang tersedia.
                    </div>
                )}
            </div>
        </div>

    );
};

export default CatalogPage;