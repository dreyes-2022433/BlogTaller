import { usePost } from "../../shared/hooks/usePost"
import { createContext, useEffect } from "react"

export const PostsContext = createContext()

export const PostProvider = ({ children }) => {
    const { posts, isFetchingPosts, getPosts,  fetchingComments} = usePost()
    useEffect(() => {
        getPosts()
    }, [fetchingComments])
    return (
        <PostsContext.Provider value={{ posts, isFetchingPosts }}>
            {children}
        </PostsContext.Provider>
    )
}