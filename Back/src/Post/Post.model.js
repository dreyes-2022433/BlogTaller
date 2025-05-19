import { Schema, model } from "mongoose"
import moment from "moment"



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
    link: {
        type: String,
        required: [true, 'Link is required'],
        
    },
    creationDate: {
       type: String,
        default: moment().format('L')
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
        default: moment().format('L')
        }
        
    }]
    

})

export default model('Post', PostSchema)