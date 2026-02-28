import NewsFilters from "@/components/features/news/NewsFilter";
import NewsGrid from "@/components/features/news/NewsGrid";
import ErrorMessage from "@/components/shared/ErrorMessage";
import { useNewsFeed } from "@/hooks/useNewsFeed";

const HomePage = () => {
    const {
        articles,
        cmsConfig,
        isLoading,
        error,
        searchQuery,
        setSearchQuery,
        selectedSource,
        setSelectedSource,
        sortOrder,
        setSortOrder,
    } = useNewsFeed();

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Top Headlines</h1>
                <p className="text-muted-foreground mt-1">
                    Stay updated with the latest news tailored to your interests.
                </p>
            </div>

            <NewsFilters
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedSource={selectedSource}
                setSelectedSource={setSelectedSource}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                allowedSources={cmsConfig?.allowedSources}
            />

            {isLoading && (
                <div className="flex h-64 items-center justify-center">
                    <p className="text-lg animate-pulse text-muted-foreground">
                        Loading latest news...
                    </p>
                </div>
            )}

            {error && !isLoading && (
                <ErrorMessage
                    title="Oops! Failed to load the news."
                    description="Please check your internet connection or API key."
                />
            )}

            {!isLoading && !error && (
                <NewsGrid articles={articles} />
            )}
        </div>
    );
};

export default HomePage;