import React from "react";
import SearchBy from "@/components/SearchBy";
import SearchTerm from "@/components/SearchTerm";

const SearchControls: React.FC = () => {
    return (
        <div>
            <SearchBy />
            <SearchTerm />
        </div>
    );
};

export default SearchControls;