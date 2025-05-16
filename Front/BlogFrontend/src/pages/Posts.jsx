import { SimpleGrid , Box,UnorderedList,Heading,Button} from "@chakra-ui/react"
import { useState } from "react"
import { CardsPosts } from "../components/PostsCard"
import { useContextPosts } from "../shared/hooks/useContextPosts"
import { Comments, CommentsList } from "../components/Comments/Comments"



export const Postspage = () => {
       const { posts } = useContextPosts()
       
        const [openComments, setOpenComments] = useState({});
         console.log(posts);  
          const toggleComments = (postId) => {
    setOpenComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };
        
    return (
      <>
           <SimpleGrid spacing={6} templateColumns="repeat(auto-fill, minmax(600px, 1fr))">
           
            {posts?.map((post) => (
              <>
              <Box padding="2"
                          bg="blue.400"
                          color="black"
                          marginTop='5px'
                          maxW='75vh'
                          borderRadius="lg"
                          boxShadow="lg"
                          >
                <CardsPosts
                    key={post._id}
                    title={post.title}
                    description={post.description}
                    course={[post.course.courseName]}
                    creationDate={post.creationDate}
                
                />
                <br></br>
                 <Comments />
                <br></br>
                <br></br>
            <Button
            colorScheme="blue"
              size="md"
              color="white"
              as="button"
              cursor="pointer"
              onClick={() => toggleComments(post._id)}
            >
              Comments
            </Button>
                    
                {openComments[post._id] && (
              post.comments && post.comments.length > 0 ? (
                <UnorderedList>
                  {post.comments.map((comment, idx) => (
                    <CommentsList
                      key={comment._id || idx}
                      name={comment.name}
                      content={comment.content}
                      creationDate={comment.creationDate}
                    />
                  ))}
                </UnorderedList>
              ) : (
                <p>No hay comentarios</p>
              )
            )}
  </Box>
                </>
            ))}
            
        </SimpleGrid>
        </>
    )
}