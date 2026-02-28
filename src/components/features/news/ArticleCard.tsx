import type { Article } from "@/types/news.types";
import { Link } from "react-router";
import { CalendarDays } from "lucide-react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ArticleImage from "./ArticleImage";
import { createSlug } from "@/utils/news.utils";

interface ArticleCardProps {
    article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
    const formattedDate = new Date(article.publishedAt).toLocaleDateString(
        "en-US",
        {
            month: "short",
            day: "numeric",
            year: "numeric",
        }
    );

    return (
        <Card className="group relative flex h-full cursor-pointer flex-col gap-4 overflow-hidden pt-0 transition-all duration-300 hover:shadow-lg">
            <ArticleImage src={article.urlToImage} alt={article.title} />

            <CardHeader className="pt-5 pb-3">
                <div className="mb-3 flex flex-wrap gap-2">
                    {article.topics && article.topics.length > 0 ? (
                        article.topics.map((topic) => (
                            <Badge
                                key={topic.id}
                                variant="default"
                                className="text-[10px] tracking-wider uppercase"
                            >
                                {topic.name}
                            </Badge>
                        ))
                    ) : (
                        <Badge
                            variant="secondary"
                            className="text-[10px] tracking-wider uppercase"
                        >
                            General
                        </Badge>
                    )}
                </div>

                <CardTitle className="group-hover:text-primary line-clamp-2 text-xl leading-snug transition-colors">
                    <Link
                        to={`/article/${createSlug(article.title)}`}
                        state={{ article }}
                        className="after:absolute after:inset-0"
                    >
                        {article.title}
                    </Link>
                </CardTitle>
            </CardHeader>

            <CardContent className="flex grow flex-col pb-5">
                <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                    {article.description ||
                        "No description available for this article."}
                </p>
            </CardContent>

            <CardFooter className="border-muted text-muted-foreground mt-auto flex items-center justify-between border-t pt-4 text-xs">
                <span className="text-foreground/80 font-semibold">
                    {article.source.name}
                </span>
                <div className="flex items-center gap-1">
                    <CalendarDays className="h-3 w-3" />
                    <span>{formattedDate}</span>
                </div>
            </CardFooter>
        </Card>
    );
};

export default ArticleCard;
