import { SimpleGrid, Box, Card, CardBody, Button } from "@chakra-ui/react"
import { useState } from "react"
import { CardsPosts } from "../components/PostsCard"
import { useContextPosts } from "../shared/hooks/useContextPosts"
import { Comments, CommentsList } from "../components/Comments/Comments"
import { usePost } from "../shared/hooks/usePost"
import { NavRender } from "./NavRender"



export const Postspage = () => {
  const { posts } = useContextPosts()
  const {addComment} = usePost()
  const [selectedCourse, setSelectedCourse] = useState(null);
  const createComment = (data)=>{
    console.log(data)
    addComment(data)
  }
  const [openComments, setOpenComments] = useState({});
  const toggleComments = (postId) => {
    setOpenComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };
  
   const filteredPosts = selectedCourse
    ? posts.filter(post => post.course?.courseName === selectedCourse)
    : posts;

  return (
    <>
    <Box bg="blue.200" width='100%' padding="0px">
    <NavRender setSelectedCourse={setSelectedCourse}/>
    </Box>
      <SimpleGrid spacing={10}
        marginLeft={'35vh'}
        templateColumns="repeat(auto-fill, minmax(120vh, 2fr))"
        overflowY="auto"
      >

        {filteredPosts?.map((post) => (
          <
          >
          
            <Box padding="2"
              bg="blue.400"
              color="black"
              marginTop='5px'
              maxW='120vh'
              borderRadius="lg"
              boxShadow="lg"
            >
              <CardsPosts
                key={post._id}
                title={post.title}
                description={post.description}
                link={post.link}
                course={[post.course.courseName]}
                creationDate={post.creationDate}

              />
              <br></br>
              <Comments postId={post._id} onSubmitForm={createComment} />
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
                  <>
                  <Card 
                    h={'15vh'}
                    overflow={"auto"}
                    >
                      
                      <CardBody>
                    {post.comments.map((comment, idx) => (
                      <CommentsList
                        key={comment._id || idx}
                        name={comment.name}
                        content={comment.content}
                        creationDate={comment.creationDate}
                      />
                    ))}
                    </CardBody>
                  </Card>
                  <br></br>
                  </>
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