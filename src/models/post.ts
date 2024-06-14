import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    
});

const Post = mongoose.models.posts || mongoose.model('posts',postSchema);

export default Post;