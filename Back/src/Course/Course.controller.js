import Course from './Course.model.js'
import Post from '../Post/Post.model.js'

export const addCourse = async (req, res) => {
    try {
        const { courseName, description } = req.body
        const course = new Course({ courseName, description })
        await course.save()
        res.status(201).json({
            status: 'success',
            data: {
                course
            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        })
    }
}

export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find().populate('posts')
       return res.status(200).json({
            status: 'success',
            message: 'Courses found',
            courses
        })
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        })
    }
}