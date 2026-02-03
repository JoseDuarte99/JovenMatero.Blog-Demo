
// Import Style
// Import React
import { useState, type ReactNode } from "react";
import TermsAndPrivacyContext from "./TermsOrPrivacyContext";

// Import Contexts


// Import Components
// Import Types
// Import Others




interface TermsAndPrivacyProviderType {
    children: ReactNode;
}

const TermsOrPrivacyProvider = ( {children} :TermsAndPrivacyProviderType ) => {

    
    const [ termsOrPrivacy, setTermsOrPrivacy ] = useState(true); 

    return (
        <TermsAndPrivacyContext.Provider value={{termsOrPrivacy, setTermsOrPrivacy}}>
            {children}
        </TermsAndPrivacyContext.Provider>
    )
}

export default TermsOrPrivacyProvider

