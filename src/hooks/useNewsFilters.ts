import { useSearchParams } from "react-router";

const useNewsFilters = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get("search") || "";
    const selectedSource = searchParams.get("source") || "all";
    const sortOrder = (searchParams.get("sort") as "desc" | "asc") || "desc";

    const setSearchQuery = (val: string) => {
        setSearchParams(
            (prev) => {
                if (val) prev.set("search", val);
                else prev.delete("search");

                return prev;
            },
            { replace: true }
        );
    };

    const setSelectedSource = (val: string) => {
        setSearchParams(
            (prev) => {
                if (val !== "all") prev.set("source", val);
                else prev.delete("source");

                return prev;
            },
            { replace: true }
        );
    };

    const setSortOrder = (val: "desc" | "asc") => {
        setSearchParams(
            (prev) => {
                if (val !== "desc") prev.set("sort", val);
                else prev.delete("sort");

                return prev;
            },
            { replace: true }
        );
    };

    return {
        searchQuery,
        setSearchQuery,
        selectedSource,
        setSelectedSource,
        sortOrder,
        setSortOrder,
    };
};

export default useNewsFilters;
