// Import Style

// Import React

import { useQuery } from "@tanstack/react-query";

// Import Contexts
import PostsContext from "./PostsContext";

// Import Components

// Import Others

// Import Types
import type { ReactNode } from "react";

import { getAllPostsService } from "../api/postService";



interface PostsProviderType {
    children: ReactNode;
}


function PostsProvider( {children}:PostsProviderType ) {



   // --------------------------------- IMPLEMENTANDO SERVICIOS CON REACT QUERY -----------------------------------
    
        const { isPending, isError, data, error, refetch} = useQuery({
            queryKey:["getAllPosts"],
            queryFn: getAllPostsService,
            refetchOnWindowFocus: false,
            retry: false,
        })


    
    // -------------------------------------------------------------------------------------------------------------

    

    return (
        <PostsContext.Provider value={{ posts: data ?? [], isPending, isError, error, refetch }} >
            {children}
        </PostsContext.Provider>
    )
}

export default PostsProvider