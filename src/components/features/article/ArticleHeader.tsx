import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";
import type { Article } from "@/types/news.types";
import { formatDate } from "@/utils/date.utils";

interface ArticleHeaderProps {
    article: Article;
}

const ArticleHeader = ({ article }: ArticleHeaderProps) => {
    const formattedDate = formatDate(article.publishedAt);

    return (
        <header className="mb-8">
            <div className="mb-4 flex flex-wrap gap-2">
                {article.topics && article.topics.length > 0 ? (
                    article.topics.map((topic) => (
                        <Badge
                            key={topic.id}
                            className="tracking-wider uppercase"
                        >
                            {topic.name}
                        </Badge>
                    ))
                ) : (
                    <Badge
                        variant="secondary"
                        className="tracking-wider uppercase"
                    >
                        General
                    </Badge>
                )}
            </div>

            <h1 className="mb-6 text-3xl leading-tight font-bold tracking-tight md:text-5xl">
                {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <span className="font-semibold text-foreground">
                    {article.source.name}
                </span>
                <span className="text-muted-foreground/50">•</span>

                <div className="flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4" />
                    <span>{formattedDate}</span>
                </div>

                {article.author && (
                    <>
                        <span className="text-muted-foreground/50">•</span>
                        <span>By {article.author}</span>
                    </>
                )}
            </div>
        </header>
    );
};

export default ArticleHeader;
