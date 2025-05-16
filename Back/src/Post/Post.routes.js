import { Router } from "express"
import { addPost, getPosts } from "./post.controller.js"
import { validateComment } from "../../helpers/validator.js"
import { addComment } from "./post.controller.js"
const api = Router()

api.post('/addPost',addPost)
api.get('/getPosts', getPosts)
api.put('/addComment', validateComment, addComment)

export default api