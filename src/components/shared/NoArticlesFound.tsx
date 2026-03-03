const NoArticlesFound = () => {
    return (
        <div className="flex h-64 flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
            <p className="font-medium text-muted-foreground">
                No articles found.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
                Try adjusting your search query or selecting a different source.
            </p>
        </div>
    );
};

export default NoArticlesFound;
