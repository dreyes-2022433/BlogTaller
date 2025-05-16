import { Schema, model } from "mongoose"

const PostSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
       
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        
    },
    course :{
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: [true, 'Course is required'],
    },
    creationDate: {
       type: String,
        
    },
    comments : [{
        name: {
            type: String,
        },
        content: {
            type: String,
        },
        creationDate: {
            type: String,
        }
        
    }]
    

})

export default model('Post', PostSchema)