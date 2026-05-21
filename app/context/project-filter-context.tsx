"use client"

import { createContext, useState, useContext, ReactNode } from "react";

type ProjectFilterContextType = {
    projectFilter: {filter: string, sorting: 'alphabetical' | 'date'};
    setTextFilter: (value: string) => void;
    setSorting: (value: "alphabetical" | "date") => void;
};

const ProjectFilterContext = createContext<ProjectFilterContextType | undefined>(undefined);

export function ProjectFilterProvider({ children }: { children: ReactNode }) {
    const [projectFilter, setProjectFilterState] = useState<{
        filter: string;
        sorting: "alphabetical" | "date";
    }>({
        filter: "",
        sorting: "date",
    });

    const setTextFilter = (value: string) => {
        setProjectFilterState((prev) => ({
            ...prev,
            filter: value,
        }));
    };

    const setSorting = (value: "alphabetical" | "date") => {
        setProjectFilterState((prev) => ({
            ...prev,
            sorting: value,
        }));
    };

    return (
        <ProjectFilterContext.Provider value={{ projectFilter, setTextFilter, setSorting }}>
            {children}
        </ProjectFilterContext.Provider>
    );
}

export function useProjectFilter() {
    const context = useContext(ProjectFilterContext);

    if (!context) {
        throw new Error("useSearch must be used within SearchProvider");
    }

    return context;
}
