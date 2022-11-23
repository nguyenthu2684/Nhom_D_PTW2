const Post = require('../models/post.models');

module.exports = {
    getAll: (req, res) => {
        Post.getAll(function(err, post) {
            console.log('controller - Get all post');
            if (err) {
                res.send(err);
            }
            console.log('Res: ', post);
            res.send(post);
        })
    },

    getPostById: (req, res) => {
        const postId = req.params.id;
        Post.getPostById(function(err, post) {
            if (err) {
                console.log('Controller - Get post by id: ', err);
                res.send(err);
            }
            console.log('Res: ', post);
            res.send(post);
        }, postId)
    },

    addPost: (req, res) => {
        data = req.body;
        console.log(JSON.stringify(data));
        Post.addPost(function(err, post) {
            if (err) {
                res.send(err);
            }
            console.log('Res: ', post);
            res.send(post);
        }, data)
    },
    
}
