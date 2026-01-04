import ProductCard from "../Components/Public/ProductCard";

const CatalogPage = ({ products }) => {
    return (
        <div className="flex flex-col min-h-screen">


            <main className="grow p-8 bg-gray-50/50">
                <div className="container mx-auto">
                    <div className="flex flex-col mb-8">
                        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Katalog Produk</h1>
                        <div className="h-1 w-20 bg-primary mt-2 rounded-full" />
                    </div>

                    {products.length > 0 ? (
                        /* Grid responsif sesuai instruksi */
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {products.map((item) => (
                                <ProductCard key={item.id} product={item} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                            <p className="text-lg">Belum ada produk yang tersedia.</p>
                        </div>
                    )}
                </div>
            </main>


        </div>
    );
};

export default CatalogPage;