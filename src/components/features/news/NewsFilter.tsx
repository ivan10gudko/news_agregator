import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import SearchFilter from "./SearchFilter";

interface FiltersProps {
    searchQuery: string;
    setSearchQuery: (val: string) => void;
    selectedSource: string;
    setSelectedSource: (val: string) => void;
    sortOrder: "desc" | "asc";
    setSortOrder: (val: "desc" | "asc") => void;
}

interface NewsFiltersProps {
    filters: FiltersProps;
    allowedSources?: { id: string; name: string }[];
}

const NewsFilters = ({ filters, allowedSources = [] }: NewsFiltersProps) => {
    const {
        searchQuery,
        setSearchQuery,
        selectedSource,
        setSelectedSource,
        sortOrder,
        setSortOrder,
    } = filters;

    return (
        <div className="mb-8 grid grid-cols-2 gap-4 md:flex md:flex-row md:items-center">
            <SearchFilter
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            <div className="col-span-1 md:w-52">
                <Select
                    value={selectedSource}
                    onValueChange={setSelectedSource}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="All Sources" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Sources</SelectItem>
                        {allowedSources.map((source) => (
                            <SelectItem key={source.id} value={source.id}>
                                {source.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="col-span-1 md:w-48">
                <Select
                    value={sortOrder}
                    onValueChange={(val) => setSortOrder(val as "desc" | "asc")}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sort by Date" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="desc">Newest first</SelectItem>
                        <SelectItem value="asc">Oldest first</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default NewsFilters;
