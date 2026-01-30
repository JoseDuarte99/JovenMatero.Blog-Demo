// Import Style
// Import React
import { createContext } from "react";

// Import Contexts
// Import Components
// Import Types
import type { PostType } from "../types/Types"

// Import Others



interface PostsContextType {
    posts: PostType[];
    isPending: boolean;
    isError: boolean;
    error: unknown;
    refetch: () => Promise<unknown>;
}


const PostContext = createContext<PostsContextType | null>(null);

export default PostContext;