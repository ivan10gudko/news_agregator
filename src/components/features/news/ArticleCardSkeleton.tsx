import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ArticleCardSkeleton = () => {
    return (
        <Card className="flex h-full flex-col gap-4 overflow-hidden pt-0">
            <Skeleton className="h-48 w-full rounded-none" />

            <CardHeader className="pt-5 pb-3">
                <div className="mb-3 flex gap-2">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-24" />
                </div>

                <Skeleton className="mb-2 h-6 w-full" />
                <Skeleton className="h-6 w-4/5" />
            </CardHeader>

            <CardContent className="flex grow flex-col pb-5">
                <Skeleton className="mb-2 h-4 w-full" />
                <Skeleton className="mb-2 h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
            </CardContent>

            <CardFooter className="mt-auto flex items-center justify-between border-t border-muted pt-4">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-20" />
            </CardFooter>
        </Card>
    );
};

export default ArticleCardSkeleton;
