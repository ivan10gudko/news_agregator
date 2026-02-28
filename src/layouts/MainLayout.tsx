import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <div className="bg-background flex min-h-screen flex-col">
            <Header />

            <main className="container mx-auto flex-1 px-4 py-8 md:px-8">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;
