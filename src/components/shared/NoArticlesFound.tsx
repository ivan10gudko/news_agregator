
const NoArticlesFound = () => {
    return (
        <div className="flex h-64 flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
            <p className="text-muted-foreground font-medium">
                No articles found.
            </p>
            <p className="text-muted-foreground mt-1 text-sm">
                Try adjusting your search query or selecting a different source.
            </p>
        </div>
    );
};

export default NoArticlesFound;
