import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "../layouts/MainLayout";
import NewsFeed from "../pages/NewsFeed";
import NewsDetails from "../pages/NewsDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Navigate to="/news" replace /> },
            { path: "news", element: <NewsFeed /> },
            { path: "news/:newsId", element: <NewsDetails /> },
        ],
    },
]);

export default router;
