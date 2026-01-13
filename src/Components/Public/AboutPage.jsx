import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, ShieldCheck, Users, Headphones } from "lucide-react";

const AboutPage = () => {
    const features = [
        {
            icon: <Rocket className="text-blue-500" size={32} />,
            title: "Pengiriman Cepat",
            desc: "Kami menjamin pesanan Anda sampai tepat waktu dengan kurir terpercaya."
        },
        {
            icon: <ShieldCheck className="text-blue-500" size={32} />,
            title: "Garansi Resmi",
            desc: "Semua produk yang kami jual memiliki garansi resmi dan jaminan keaslian."
        },
        {
            icon: <Users className="text-blue-500" size={32} />,
            title: "Komunitas Terpercaya",
            desc: "Telah melayani lebih dari 10.000 pelanggan di seluruh Indonesia."
        },
        {
            icon: <Headphones className="text-blue-500" size={32} />,
            title: "Layanan 24/7",
            desc: "Tim support kami siap membantu Anda kapanpun melalui WhatsApp."
        }
    ];

    return (
        <div className="min-h-screen bg-white py-16">
            <div className="container mx-auto px-6">
                
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <Badge className="bg-blue-100 text-blue-600 mb-4 px-4 py-1">EST. 2026</Badge>
                    <h1 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter uppercase italic mb-6">
                        Tentang <span className="text-blue-600">Gk-Store</span>
                    </h1>
                    <p className="text-xl text-slate-500 leading-relaxed font-medium">
                        Gk-Store adalah destinasi utama bagi para antusias yang mencari barang premium dengan layanan terbaik dan harga kompetitif.
                    </p>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div className="bg-slate-950 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-[80px] opacity-50"></div>
                        <h2 className="text-3xl font-black mb-4 uppercase italic">Visi Kami</h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Menjadi platform e-commerce nomor satu di Indonesia yang mengedepankan 
                            inovasi, integritas, dan kepuasan pelanggan di setiap transaksi.
                        </p>
                    </div>
                    <div className="bg-blue-600 text-white p-10 rounded-[2.5rem] shadow-2xl">
                        <h2 className="text-3xl font-black mb-4 uppercase italic">Misi Kami</h2>
                        <ul className="space-y-4 text-blue-50/80 text-lg">
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-white">•</span> 
                                Menyediakan produk terbaru dan orisinal.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-white">•</span> 
                                Memberikan kemudahan akses belanja melalui integrasi WhatsApp.
                            </li>
                        </ul>
                    </div>
                </div>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, index) => (
                        <Card key={index} className="border-none shadow-xl shadow-slate-100 rounded-3xl p-4 hover:translate-y-2.5 transition-all duration-300">
                            <CardContent className="pt-6">
                                <div className="mb-4 bg-slate-50 w-16 h-16 flex items-center justify-center rounded-2xl">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-2 uppercase italic">{item.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    {item.desc}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutPage;