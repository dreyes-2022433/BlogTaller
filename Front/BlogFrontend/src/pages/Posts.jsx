import { SimpleGrid , Box} from "@chakra-ui/react"
import { CardsPosts } from "../components/PostsCard"
import { useContextPosts } from "../shared/hooks/useContextPosts"
import { Comments } from "../components/Comments/Comments"



export const Postspage = () => {
       const { posts } = useContextPosts()
         console.log(posts);  
       
    return (
      <>
           <SimpleGrid spacing={6} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
           
            {posts?.map((post) => (
              <>
                <CardsPosts
                    key={post._id}
                    title={post.title}
                    description={post.description}
                    course={[post.course.courseName]}
                    creationDate={post.creationDate}
                
                />
                <Comments/>
                </>
            ))}
            
        </SimpleGrid>
        </>
    )
}