import { useState } from "react";
import { ImageOff } from "lucide-react";

interface ArticleImageProps {
    src?: string | null;
    alt: string;
}

const ArticleImage = ({ src, alt }: ArticleImageProps) => {
    const [hasError, setHasError] = useState(false);

    const placeholder = (
        <div className="text-muted-foreground bg-muted flex h-full w-full items-center justify-center">
            <ImageOff className="h-8 w-8 opacity-50" />
        </div>
    );

    return (
        <div className="bg-muted relative aspect-3/2 w-full overflow-hidden">
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
