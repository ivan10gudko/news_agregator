import ArticleCardSkeleton from "./ArticleCardSkeleton";

const NewsGridSkeleton = () => {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
                <ArticleCardSkeleton key={index} />
            ))}
        </div>
    );
};

export default NewsGridSkeleton;
