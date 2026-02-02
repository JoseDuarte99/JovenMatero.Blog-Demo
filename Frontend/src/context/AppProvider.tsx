// Import Style

// Import React
import type { ReactNode } from "react";

// Import Contexts
import SearchProvider from "./SearchProvider";
import PostsProvider from "./PostsProvider";
import TermsOrPrivacyProvider from "./TermsOrPrivacyProvider";

// Import Components
// Import Types
// Import Others


interface AppProviderProps {
    children: ReactNode;
}

const AppProviders = ({ children }: AppProviderProps) => (
    <PostsProvider>
            <SearchProvider>
                <TermsOrPrivacyProvider>
                    {children}
                </TermsOrPrivacyProvider>
            </SearchProvider>
    </PostsProvider>
);

export default AppProviders