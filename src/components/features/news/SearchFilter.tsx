import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useDebounce } from "@/hooks/useDebounce";

interface SearchFilterProps {
    searchQuery: string;
    setSearchQuery: (val: string) => void;
}

const SearchFilter = ({ searchQuery, setSearchQuery }: SearchFilterProps) => {
    const [localQuery, setLocalQuery] = useState(searchQuery);

    const debouncedQuery = useDebounce(localQuery, 500);

    useEffect(() => {
        if (debouncedQuery !== searchQuery) {
            setSearchQuery(debouncedQuery);
        }
    }, [debouncedQuery, setSearchQuery, searchQuery]);

    useEffect(() => {
        setLocalQuery(searchQuery);
    }, [searchQuery]);

    return (
        <div className="relative col-span-2 md:flex-1">
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
                type="text"
                placeholder="Search news..."
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                className="w-full pl-10"
            />
        </div>
    );
};

export default SearchFilter;