import React, { useState } from "react";
import AdminHeader from "../Components/Admin/AdminHeader";
import FormData from "../Components/Admin/FormData";
import DataTable from "../Components/Admin/DataTable";
import { Button } from "@/components/ui/button"; // Pastikan alias @ sudah benar

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
                        ? { ...formData, id: editingId, price: Number(formData.price), image: p.image, desc: p.desc }
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

    // Fungsi Delete diperbarui untuk dipanggil dari Dialog Shadcn
    const handleDelete = (id) => {
        setProducts(products.filter((p) => p.id !== id));
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
        /* Menggunakan Tailwind untuk layout profesional */
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
                    {/* Komponen FormData harus berisi Input Shadcn */}
                    <FormData
                        formData={formData}
                        onChange={handleInputChange}
                        onSubmit={handleSubmit}
                        onCancel={() => setIsFormOpen(false)}
                        isEditing={!!editingId}
                    />
                </div>
            )}

            {/* DataTable diperbarui menggunakan komponen Table & Dialog Shadcn */}
            <DataTable
                products={products}
                onEdit={startEdit}
                onDelete={handleDelete}
            />

            <div className="mt-6 text-sm text-muted-foreground text-right font-medium">
                Total Inventory: <span className="text-foreground font-bold">{products.length}</span> Items
            </div>
        </div>
    );
};

export default AdminDashboard; //