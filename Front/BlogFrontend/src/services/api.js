import axios from 'axios'
import toast from 'react-hot-toast'

const api = axios.create({
  baseURL: 'http://localhost:3676',
  timeout: 4000,

})

export const getPostsRequest = async () => {
    try{
        return await api.get('/post/getposts')
    }catch (error) {
        return {
            error: true,
            error
        }
    }
}

export const addCommentRequest = async (data) => {
    try{
        return await api.put('/post/addcomment',{
            type: 'mulpart/form-data',
            data
        })
    }catch (error) {
        return {
            error: true,
            error
        }
    }
}


export const getCoursesRequest = async () => {
    try{
        return await api.get('/course/getcourses')
    }catch (error) {
        return {
            error: true,
            error
        }
    }
}

export const addPostRequest = async (data) => {
    try{
        return await api.post('/post/addposts',{
            type: 'mulpart/form-data',
            data
        })
    }catch (error) {
        return {
            error: true,
            error
        }
    }
}