import type { Article } from "@/types/news.types";
import ArticleCard from "./ArticleCard";
import NoArticlesFound from "@/components/shared/NoArticlesFound";

interface NewsGridProps {
    articles: Article[];
}

const NewsGrid = ({ articles }: NewsGridProps) => {
    if (articles.length === 0) {
        return <NoArticlesFound />;
    }

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
                <ArticleCard key={article.url} article={article} />
            ))}
        </div>
    );
};

export default NewsGrid;
