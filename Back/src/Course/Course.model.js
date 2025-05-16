import { Schema,model } from "mongoose"

const CourseSchema = new Schema({
    courseName: {
        type: String,
        required: [true, 'Course name is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post',
    }],
})

export default model('Course', CourseSchema)