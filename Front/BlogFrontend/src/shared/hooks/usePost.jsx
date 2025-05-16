import { useState } from 'react'
import { getPostsRequest, addPostRequest, addCommentRequest } from '../../services/api'
import toast from 'react-hot-toast'

export const usePost = () => {
    const [posts, setPosts] = useState(null)
    const [fetchingComments, setFetchingComments] = useState(second)
    const getPosts = async()=>{
       const response = await getPostsRequest()
       console.log(response)
       if(response.error){
        return toast.error(
            response?.error?.response?.data?.message ||
            'Error al obtener las publicaciones'
        )
       }
       setPosts(response.data.posts)

    }
    const addComment = async(data)=>{
      
      const response = await  addCommentRequest(data)
      console.log(response)
      if(response.error){
        console.log(response.error)
        return toast.error(
            response?.error?.response?.data?.message ||
            'Error al colocar tu comentario'
        )
       }
     
       return toast.success('Comentario guardado')
    }
    
  
    
  return {
    posts, //Tiene las publicacioens
    isFetchingPosts: !posts, //Valida si ya respondió el back o no
    getPosts,
    addComment, //Consulta las publicaciones al back
  }
}
