async function findAllPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
}

async function findPostById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.json();
}

async function findCommentsByPostId(postId) {
    const url = new URL("https://jsonplaceholder.typicode.com/comments");

    url.searchParams.append("postId", postId);

    const response = await fetch(url);

    return response.json(); 
}

async function savePost(post) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(post)
    });

    return response.json(); 
}

async function updatePostTitleById(postId, title) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({ title: title })
    });

    return response.json(); 
}

async function updatePostById(postId, post) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(post)
    });

    return response.json(); 
}

async function deletePostById(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "DELETE"
    });

    return response.json(); 
}

export { deletePostById, updatePostById, updatePostTitleById, findAllPost, findPostById, findCommentsByPostId, savePost };