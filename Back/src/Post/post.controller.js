import Post from './Post.model.js'


export const addPost = async (req, res) => {
    try {
        const { title, description, course, creationDate } = req.body
        const post = new Post({ title, description, course, creationDate })
        await post.save()
        res.status(201).json({
            status: 'success',
            data: {
                post
            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        })
    }
}

export const addComment = async (req, res) => {
    try {
        const { postId } = req.body
        const { name, content } = req.body
        const post = await Post.findById(postId)
        if (!post) {
            return res.status(404).json({
                status: 'error',
                message: 'Post not found'
            })
        }
        post.comments.push({ name, content })
        await post.save()
        res.status(201).json({
            status: 'success',
            data: {
                post
            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        })
    }
}

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('course')

       if (posts.length === 0) {
            return res.status(404).send({
                status: 'error',
                message: 'No posts found'
            })
        }
        return res.status(200).send({
            success: true, message: 'Posts found', posts
        })
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        })
    }
}
