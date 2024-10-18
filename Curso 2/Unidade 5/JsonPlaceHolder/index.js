import * as postService from "./postService.js";

function genPostElement(post) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const postTitle = document.createElement('h2');
    postTitle.textContent = post.title;

    const postBody = document.createElement('p');
    postBody.textContent = post.body;

    postElement.appendChild(postTitle);
    postElement.appendChild(postBody);

    return postElement;
}

postService.findAllPost().then(posts => {
    const postsContainer = document.getElementById('posts');
    const loadingText = document.getElementById('loading');
    loadingText.style.display = 'none'; 
    postsContainer.innerHTML = "";

    for (const post of posts) postsContainer.appendChild(genPostElement(post));
});

