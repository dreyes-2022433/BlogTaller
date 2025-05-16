import { Router } from "express"
import { addCourse, getCourses } from "./Course.controller.js"


const api = Router()

api.post('/addCourse', addCourse)
api.get('/getCourses', getCourses)

export default api