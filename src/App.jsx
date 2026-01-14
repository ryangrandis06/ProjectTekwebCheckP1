import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CatalogPage from "./Pages/CatalogPage";
import AdminDashboard from "./Pages/AdminDashboard";
import Navbar from "./Components/Public/Navbar";
import Footer from "./Components/Public/Footer";
import ProductDetail from "./Pages/ProductDetail";
import HomePage from "./Homepage";
import AboutPage from "./Components/Public/AboutPage";
import LoginPage from "./Pages/LoginPage";
import NotFound from "./Pages/NotFound"; // Pastikan file ini sudah dibuat

// Komponen Proteksi Rute Admin
const ProtectedRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    return isLoggedIn ? children : <Navigate to="/login" replace />;
};

function App() {
    return (
        <Router>
            <Navbar />

            <div className="min-h-screen bg-white">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />

                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="/detail-produk/:id" element={<ProductDetail />} />
                    <Route path="/tentang-kami" element={<AboutPage />} />

                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute>
                                <AdminDashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>

            <Footer />
        </Router>
    );
}

export default App;