import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ArticleCardSkeleton = () => {
    return (
        <Card className="flex h-full flex-col overflow-hidden pt-0 gap-4">
            
            <Skeleton className="h-48 w-full rounded-none" />

            <CardHeader className="pb-3 pt-5">
                <div className="mb-3 flex gap-2">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-24" />
                </div>
                
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-4/5" />
            </CardHeader>

            <CardContent className="flex grow flex-col pb-5">
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
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