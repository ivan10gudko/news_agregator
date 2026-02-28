import { useLocation, Navigate, useNavigate } from "react-router";
import type { Article } from "@/types/news.types";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

import ArticleImage from "@/components/shared/ArticleImage";
import ArticleHeader from "@/components/features/article/ArticleHeader";

const ArticlePage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const article = location.state?.article as Article | undefined;

    if (!article) {
        return <Navigate to="/" replace />;
    }

    return (
        <article className="animate-in fade-in mx-auto max-w-3xl py-8 duration-500">
            <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="hover:text-primary mb-8 pl-0 hover:bg-transparent"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to news
            </Button>

            <ArticleHeader article={article} />

            {article.urlToImage && (
                <div className="mb-10 w-full overflow-hidden rounded-xl">
                    <ArticleImage
                        src={article.urlToImage}
                        alt={article.title}
                        className="mb-10 aspect-video rounded-xl"
                    />
                </div>
            )}

            <div className="prose prose-lg dark:prose-invert mb-12 max-w-none">
                <p className="text-muted-foreground mb-6 text-xl leading-relaxed font-medium">
                    {article.description}
                </p>
                <p className="leading-relaxed">
                    {article.content?.replace(/\[\+\d+ chars\]$/, "") ||
                        "Full content is not available via the API."}
                </p>
            </div>

            <div className="border-muted flex justify-center border-t pt-10">
                <Button
                    size="lg"
                    asChild
                    className="rounded-full px-8 transition-transform hover:scale-105"
                >
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read full story on {article.source.name}
                        <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                </Button>
            </div>
        </article>
    );
};

export default ArticlePage;
