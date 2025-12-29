import { createContext } from "react";

export type PostType = {
    title: string;
    subtitle: string;
    text: string;
    author: string;
    category: string;
    tags: string[];
    published: Date | string;
    img: string | File | null;
}

interface PostsContextType {
    posts: PostType[];
    isPending: boolean;
    isError: boolean;
    error: unknown;
    refetch: () => Promise<unknown>;
}



const SearchContext = createContext<PostsContextType | null>(null);

export default SearchContext;