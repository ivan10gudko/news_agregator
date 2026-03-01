import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface LoadMoreProps {
    hasNextPage: boolean;
    isFetchingNextPage: boolean;
    fetchNextPage: () => void;
}

const LoadMore = ({ hasNextPage, isFetchingNextPage, fetchNextPage }: LoadMoreProps) => {
    if (!hasNextPage) {
        return (
            <p className="text-muted-foreground mt-8 pb-4 text-center text-sm">
                You've caught up with all the news!
            </p>
        );
    }

    return (
        <div className="mt-8 flex justify-center">
            <Button
                size="lg"
                variant="outline"
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
                className="w-full min-w-52 md:w-auto"
            >
                {isFetchingNextPage ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Loading...
                    </>
                ) : (
                    "Load More"
                )}
            </Button>
        </div>
    );
};

export default LoadMore;