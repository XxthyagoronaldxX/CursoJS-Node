import * as postService from "./postService.js";

const postMock = {
    userId: 1,
    title: "TEST",
    body: "TEST"
};

postService.findAllPost().then(console.log);
postService.findPostById(1).then(console.log);
postService.savePost(postMock).then(console.log);
postService.findCommentsByPostId(1).then(console.log);
postService.updatePostTitleById(1, "Test A2").then(console.log);
postService.updatePostById(10, postMock).then(console.log);
postService.deletePostById(15).then(console.log);