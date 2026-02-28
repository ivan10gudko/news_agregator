import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArticleImageProps {
    src?: string | null;
    alt: string;
    className?: string;
}

const ArticleImage = ({ src, alt, className="aspect-3/2" }: ArticleImageProps) => {
    const [hasError, setHasError] = useState(false);

    const placeholder = (
        <div className="text-muted-foreground bg-muted flex h-full w-full items-center justify-center">
            <ImageOff className="h-8 w-8 opacity-50" />
        </div>
    );

    return (
        <div className={cn("bg-muted relative w-full overflow-hidden", className)}>
            {src && !hasError ? (
                <img
                    src={src}
                    alt={alt}
                    className="h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
                    onError={() => setHasError(true)}
                />
            ) : (
                placeholder
            )}
        </div>
    );
};

export default ArticleImage;
