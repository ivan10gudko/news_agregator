import LoadMore from "@/components/features/news/LoadMore";
import NewsFilters from "@/components/features/news/NewsFilter";
import NewsGrid from "@/components/features/news/NewsGrid";
import NewsGridSkeleton from "@/components/features/news/NewsGridSkeleton";
import ErrorMessage from "@/components/shared/ErrorMessage";
import NoArticlesFound from "@/components/shared/NoArticlesFound";
import { useNewsFeed } from "@/hooks/useNewsFeed";

const NewsFeedPage = () => {
    const { articles, cmsConfig, isLoading, error, filters, pagination } =
        useNewsFeed();

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Top Headlines
                </h1>
                <p className="mt-1 text-muted-foreground">
                    Stay updated with the latest news tailored to your
                    interests.
                </p>
            </div>

            <NewsFilters
                filters={filters}
                allowedSources={cmsConfig?.allowedSources}
            />

            {isLoading && <NewsGridSkeleton />}

            {error && !isLoading && (
                <ErrorMessage
                    title="Oops! Failed to load the news."
                    description="Please check your internet connection."
                />
            )}

            {!isLoading && !error && (
                <>
                    {articles.length > 0 ? (
                        <>
                            <NewsGrid articles={articles} />
                            <LoadMore {...pagination} />
                        </>
                    ) : (
                        <NoArticlesFound />
                    )}
                </>
            )}
        </div>
    );
};

export default NewsFeedPage;
