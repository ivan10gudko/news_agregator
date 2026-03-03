import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { Outlet, ScrollRestoration } from "react-router";

const MainLayout = () => {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />

            <main className="container mx-auto flex-1 px-4 py-8 md:px-8">
                <Outlet />
            </main>

            <Footer />

            <ScrollRestoration />
        </div>
    );
};

export default MainLayout;
