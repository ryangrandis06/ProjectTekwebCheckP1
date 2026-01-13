import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CatalogPage from "./Pages/CatalogPage";
import AdminDashboard from "./Pages/AdminDashboard";
import Navbar from "./Components/Public/Navbar";
import Footer from "./Components/Public/Footer";
import ProductDetail from "./Pages/ProductDetail";
import HomePage from "./Homepage";
import AboutPage from "./Components/Public/AboutPage";

function App() {
    
    const [products, setProducts] = useState([]);

    
    const deleteProduct = (id) => {
        const updatedProducts = products.filter((item) => item.id !== id);
        setProducts(updatedProducts);
        console.log(`Produk dengan ID ${id} telah dihapus dari state.`);
    };

    return (
        <Router>
            <Navbar />
            <div className="min-h-screen bg-white">
                <Routes>
                    
                    <Route path="/" element={<HomePage />} />

                    
                    <Route 
                        path="/catalog" 
                        element={<CatalogPage products={products} setProducts={setProducts} />} 
                    />

                    
                    <Route 
                        path="/detail-produk/:id" 
                        element={<ProductDetail products={products} />} 
                    />

                    
                    <Route
                        path="/admin"
                        element={
                            <AdminDashboard 
                                products={products} 
                                setProducts={setProducts} 
                                onDelete={deleteProduct} 
                            />
                        }
                    />
                    <Route path="/tentang-kami" element={<AboutPage />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;