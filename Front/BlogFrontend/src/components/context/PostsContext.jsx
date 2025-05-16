import { usePost } from "../../shared/hooks/usePost"
import { createContext, useEffect } from "react"

export const PostsContext = createContext()

export const PostProvider = ({ children }) => {
    const { posts, isFetchingPosts, getPosts } = usePost()
    useEffect(() => {
        getPosts()
    }, [])
    return (
        <PostsContext.Provider value={{ posts, isFetchingPosts }}>
            {children}
        </PostsContext.Provider>
    )
}