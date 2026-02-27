import { useState } from "react";

const useNewsFilters = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSource, setSelectedSource] = useState("all");
    const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");

    return { searchQuery, setSearchQuery, selectedSource, setSelectedSource, sortOrder, setSortOrder };
};

export default useNewsFilters;