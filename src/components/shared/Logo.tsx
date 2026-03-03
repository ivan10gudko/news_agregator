import { Newspaper } from "lucide-react";

const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <Newspaper className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">
                News Aggregator
            </span>
        </div>
    );
};

export default Logo;
