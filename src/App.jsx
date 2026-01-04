import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CatalogPage from "./Pages/CatalogPage";
import AdminDashboard from "./Pages/AdminDashboard";
import Navbar from "./Components/Public/Navbar";
import Footer from "./Components/Public/Footer";
import ProductDetail from "./Pages/ProductDetail";

function App() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Laptop Gaming Pro",
            price: 15000000,
            category: "Elektronik",
            image: "https://placehold.co/400x400",
            desc: "Performa tinggi untuk gaming dan desain."
        },
        {
            id: 2,
            name: "Mechanical Keyboard",
            price: 1200000,
            category: "Aksesoris",
            image: "https://placehold.co/400x400",
            desc: "Switch tactile yang nyaman untuk mengetik."
        }

    ]);
    const deleteProduct = (id) => {

        const updatedProducts = products.filter((item) => item.id !== id);
        setProducts(updatedProducts);

        console.log(`Produk dengan ID ${id} telah dihapus dari state.`);
    };
    return (
        <Router>
            <Navbar />
            <div className="min-h-screen bg-gray-50">
                <Routes>

                    <Route
                        path="/"
                        element={<CatalogPage products={products} />}
                    />
                    <Route path="/detail-produk/:id" 
                    element={<ProductDetail products={products} />} />

                    <Route
                        path="/admin"
                        element={<AdminDashboard products={products} setProducts={setProducts} onDelete={deleteProduct} />}
                    />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;