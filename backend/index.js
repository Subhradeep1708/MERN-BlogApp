import express from 'express'
import UserRouter from './routes/user.route.js'
import PostRouter from './routes/post.route.js'
import CommentRouter from './routes/comment.route.js'
import dbConnect from './lib/dbConnect.js'
import dotenv from 'dotenv'

const app = express()
dotenv.config()
app.use('/users', UserRouter);
app.use('/posts', PostRouter);
app.use('/comments', CommentRouter);

app.listen(3000, () => {
    dbConnect();
    console.log('listening....');

})