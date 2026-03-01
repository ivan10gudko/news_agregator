import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import ArticlePage from "@/pages/ArticlePage";
import NewsFeedPage from "@/pages/NewsFeedPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Navigate to="/news" replace /> },
            { path: "news", element: <NewsFeedPage /> },
            { path: "article/:slug", element: <ArticlePage /> },
        ],
    },
]);

export default router;
