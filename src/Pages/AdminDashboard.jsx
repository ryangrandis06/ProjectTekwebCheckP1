import React, { useState } from "react";
import AdminHeader from "../Components/Admin/AdminHeader";
import FormData from "../Components/Admin/FormData";
import DataTable from "../Components/Admin/DataTable";

const AdminDashboard = ({ products, setProducts }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: "Elektronik",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingId) {
            setProducts(
                products.map((p) =>
                    p.id === editingId
                        ? { ...formData, id: editingId, price: Number(formData.price) }
                        : p
                )
            );
            setEditingId(null);
        } else {
            const newProduct = {
                ...formData,
                id: Date.now(),
                price: Number(formData.price),
                image: "https://placehold.co/400x400?text=" + formData.name,
                desc: `Produk berkualitas kategori ${formData.category}`,
            };
            setProducts([...products, newProduct]);
        }
        setFormData({ name: "", price: "", category: "Elektronik" });
        setIsFormOpen(false);
    };

    const handleDelete = (id) => {
        if (window.confirm("Yakin ingin menghapus produk ini?")) {
            setProducts(products.filter((p) => p.id !== id));
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
        <div className="p-6 lg:p-10 bg-gray-50 min-h-screen">

            <AdminHeader
                onAddClick={() => {
                    setIsFormOpen(!isFormOpen);
                    setEditingId(null);
                    setFormData({ name: "", price: "", category: "Elektronik" });
                }}
                isFormOpen={isFormOpen}
            />

            {isFormOpen && (
                <FormData
                    formData={formData}
                    onChange={handleInputChange}
                    onSubmit={handleSubmit}
                    onCancel={() => setIsFormOpen(false)}
                    isEditing={!!editingId}
                />
            )}

            <DataTable
                products={products}
                onEdit={startEdit}
                onDelete={handleDelete}
            />

            <div className="mt-6 text-sm text-gray-400 text-right font-medium">
                Total Inventory: {products.length} Items
            </div>
        </div>
    );
};

export default AdminDashboard;