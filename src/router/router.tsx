import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "../layouts/MainLayout";
import NewsFeed from "../pages/NewsFeed";
import ArticlePage from "../pages/ArticlePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Navigate to="/news" replace /> },
            { path: "news", element: <NewsFeed /> },
            { path: "article/:slug", element: <ArticlePage /> },
        ],
    },
]);

export default router;
