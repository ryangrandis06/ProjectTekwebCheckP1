import React from "react";
import { Edit3, Trash2, Inbox } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose, // Tambahkan ini agar modal bisa menutup otomatis
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const DataTable = ({ products, onEdit, onDelete }) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <Table>
                <TableHeader className="bg-gray-50 border-b border-gray-100">
                    <TableRow>
                        <TableHead className="p-4 text-xs font-black text-gray-400 uppercase tracking-widest">Produk</TableHead>
                        <TableHead className="p-4 text-xs font-black text-gray-400 uppercase tracking-widest">Kategori</TableHead>
                        <TableHead className="p-4 text-xs font-black text-gray-400 uppercase tracking-widest">Harga</TableHead>
                        <TableHead className="p-4 text-xs font-black text-gray-400 uppercase tracking-widest text-center">Aksi</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-gray-50">
                    {products.length > 0 ? (
                        products.map((item) => (
                            <TableRow key={item.id} className="hover:bg-blue-50/30 transition-colors group">
                                <TableCell className="p-4 font-bold text-gray-700">{item.name}</TableCell>
                                <TableCell className="p-4">
                                    <Badge variant="secondary" className="bg-blue-50 text-blue-600 text-[10px] font-black rounded-full uppercase">
                                        {item.category}
                                    </Badge>
                                </TableCell>
                                <TableCell className="p-4 font-medium text-gray-600">
                                    {/* Gunakan optional chaining agar tidak error jika price undefined */}
                                    Rp {item.price?.toLocaleString("id-ID") || "0"}
                                </TableCell>
                                <TableCell className="p-4">
                                    <div className="flex justify-center gap-2">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => onEdit(item)}
                                            className="text-amber-500 hover:bg-amber-50 rounded-lg transition-all"
                                        >
                                            <Edit3 size={18} />
                                        </Button>

                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                                >
                                                    <Trash2 size={18} />
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Hapus Produk?</DialogTitle>
                                                    <DialogDescription>
                                                        Apakah Anda yakin ingin menghapus <strong>{item.name}</strong>? Tindakan ini tidak dapat dibatalkan.
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <DialogFooter className="gap-2 sm:gap-0">
                                                    <DialogClose asChild>
                                                        <Button variant="outline">Batal</Button>
                                                    </DialogClose>
                                                    <DialogClose asChild>
                                                        <Button
                                                            variant="destructive"
                                                            onClick={() => onDelete(item.id)}
                                                        >
                                                            Ya, Hapus
                                                        </Button>
                                                    </DialogClose>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan="4" className="p-12 text-center text-gray-300">
                                <div className="flex flex-col items-center gap-2">
                                    <Inbox size={40} />
                                    <p className="font-medium text-gray-400">Belum ada data produk</p>
                                </div>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default DataTable;