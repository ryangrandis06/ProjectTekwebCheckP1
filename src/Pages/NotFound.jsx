import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle, ArrowLeft } from "lucide-react";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-6 relative overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-50 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-slate-50 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
                <div className="flex justify-center">
                    <div className="relative">
                        <h1 className="text-[12rem] font-black text-slate-100 leading-none select-none">
                            404
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <AlertTriangle className="text-blue-600 w-24 h-24 animate-bounce" />
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter text-slate-900">
                        Halaman Hilang di <span className="text-blue-600">GK-STORE.</span>
                    </h2>
                    <p className="text-slate-500 text-lg font-medium max-w-md mx-auto">
                        Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan ke dimensi lain.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    
                    <Button 
                        variant="outline" 
                        size="lg"
                        onClick={() => navigate(-1)}
                        className="w-full sm:w-auto border-2 border-slate-900 rounded-2xl py-8 px-8 font-black transition-transform active:scale-95"
                    >
                        <ArrowLeft className="mr-2" size={20} /> KEMBALI
                    </Button>

                    <Button 
                        size="lg"
                        onClick={() => navigate("/")}
                        className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-8 px-8 font-black shadow-xl shadow-blue-500/20 transition-transform active:scale-95"
                    >
                        <Home className="mr-2" size={20} /> HOME KATALOG
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;