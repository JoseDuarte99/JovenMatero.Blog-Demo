// Import Style

// Import React
import type { ReactNode } from "react";

// Import Contexts
import AuthProvider  from "./AuthProvider";
import SearchProvider from "./SearchProvider";

// Import Components
// Import Types
// Import Others


interface AppProviderProps {
    children: ReactNode;
}

const AppProviders = ({ children }: AppProviderProps) => (
    <AuthProvider>
        <SearchProvider>
            {children}
        </SearchProvider>
    </AuthProvider>
);

export default AppProviders