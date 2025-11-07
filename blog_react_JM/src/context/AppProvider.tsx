// Import Style

// Import React
import type { ReactNode } from "react";

// Import Contexts
import AuthProvider  from "./AuthProvider";

// Import Components
// Import Types
// Import Others


interface AppProviderProps {
    children: ReactNode;
}

const AppProviders = ({ children }: AppProviderProps) => (
    <AuthProvider>
        {children}
    </AuthProvider>
);

export default AppProviders