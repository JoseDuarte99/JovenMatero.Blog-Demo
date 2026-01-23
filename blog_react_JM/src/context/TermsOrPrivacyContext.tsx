
// Import Style
// Import React
import { createContext } from "react";

// Import Contexts
// Import Components
// Import Types
// Import Others




interface TermsAndPrivacyContextType {
    termsOrPrivacy: boolean;
    setTermsOrPrivacy: (value:boolean) => void;
}


const TermsAndPrivacyContext = createContext<TermsAndPrivacyContextType | null>(null);


export default TermsAndPrivacyContext;
