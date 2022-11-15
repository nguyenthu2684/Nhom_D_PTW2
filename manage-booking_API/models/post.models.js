const dbConnection = require('../configs/db.config');

const Post = function(post) {
    this.idPost = post.idPost;
    this.namePost = post.namePost;
    this.idCate  = post.idCate;
    this.content = post.content;
    this.createPost = new Date();
    this.img = user.img;
}

Post.getAll = function(result) {
    dbConnection.query("select * from post", function(err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("Post: ", res);
            result(null, res);
        }
    });
}

Post.getPostById = function(result, postID) {
    dbConnection.query("select * from post where idPost=" + postID, function(err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("Post: ", res);
            result(null, res);
        }
    });   
}

Post.addPost = function(result, data) { 
    const d = new Date(Date.now());
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDay();
    const ymd = year + "/" + month + "/" + day ; 
    dbConnection.query('insert into `post`(`namePost`, `idCate`, `content`, `img`, `createPost`) value("'+ data.namePost +'","'+ data.idCate + '","'+ data.content +'","'+ data.img +'",'+ ymd +')', function(err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("User: ", res);
            result(null, res);
        }
    });
}


module.exports = Post;
