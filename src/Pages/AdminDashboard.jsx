import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "../Components/Admin/AdminHeader";
import FormData from "../Components/Admin/FormData";
import DataTable from "../Components/Admin/DataTable";


const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: "Elektronik",
    });

    const API_URL = "https://695bbbda1d8041d5eeb82c39.mockapi.io/products";

    useEffect(() => {
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
        fetchProducts();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (editingId) {
                
                const response = await axios.put(`${API_URL}/${editingId}`, {
                    ...formData,
                    price: Number(formData.price),
                });
                if (response.status === 200) {
                    setProducts(products.map((p) => (p.id === editingId ? response.data : p)));
                    setEditingId(null);
                }
            } else {
                
                const response = await axios.post(API_URL, {
                    ...formData,
                    price: Number(formData.price),
                    image: `https://placehold.co/400x400?text=${encodeURIComponent(formData.name)}`,
                    desc: `Produk berkualitas kategori ${formData.category}`,
                });
                setProducts([...products, response.data]);
            }
            setFormData({ name: "", price: "", category: "Elektronik" });
            setIsFormOpen(false);
        } catch (error) {
            console.error("Gagal menyimpan data:", error);
            alert("Terjadi kesalahan saat menyimpan data. Cek koneksi atau masalah CORS.");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Yakin ingin menghapus produk ini?")) return;
        try {
            await axios.delete(`${API_URL}/${id}`);
            setProducts(products.filter((p) => p.id !== id));
        } catch (error) {
            console.error("Gagal menghapus data:", error);
        }
    };

    const startEdit = (product) => {
        setEditingId(product.id);
        setFormData({
            name: product.name,
            price: product.price,
            category: product.category,
        });
        setIsFormOpen(true);
    };

    return (
        <div className="p-6 lg:p-10 bg-gray-50/50 min-h-screen">
            <AdminHeader
                onAddClick={() => {
                    setIsFormOpen(!isFormOpen);
                    setEditingId(null);
                    setFormData({ name: "", price: "", category: "Elektronik" });
                }}
                isFormOpen={isFormOpen}
            />
            

            {isFormOpen && (
                <div className="mb-8">
                    <FormData
                        formData={formData}
                        onChange={handleInputChange}
                        onSubmit={handleSubmit}
                        onCancel={() => setIsFormOpen(false)}
                        isEditing={!!editingId}
                        loading={loading} 
                    />
                </div>
            )}

            
            {loading && products.length === 0 ? (
                <p className="text-center py-10">Memuat data produk...</p>
            ) : (
                <DataTable
                    products={products}
                    onEdit={startEdit}
                    onDelete={handleDelete}
                />
            )}

            <div className="mt-6 text-sm text-muted-foreground text-right font-medium">
                Total Inventory: <span className="text-foreground font-bold">{products.length}</span> Items
            </div>
        </div>
    );
};

export default AdminDashboard;