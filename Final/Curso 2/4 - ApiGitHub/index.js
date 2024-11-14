import * as githubService from "./githubService.js";

function setUserElement(user) {
    if ("status" in user) return;

    document.getElementById("avatar").setAttribute("src", user.avatar_url);
    document.getElementById("name").innerHTML = user.name;
    document.getElementById("bio").innerHTML = user.bio;
    document.getElementById("repos").innerHTML = user.public_repos;
    document.getElementById("followers").innerHTML = user.followers;
    document.getElementById("following").innerHTML = user.following;
    document.getElementById("profile-link").setAttribute("href", user.html_url);

    document.getElementById("profile-container").classList.remove("hidden");
}

document.getElementById("search").addEventListener("click", (event) => {
    event.preventDefault();

    document.getElementById("profile-container").classList.add("hidden");
    
    const username = document.getElementById("username").value;

    if (username.trim() === "") return;

    githubService.findUserById(username).then(setUserElement).catch(console.error);
});

document.getElementById("profile-container").classList.add("hidden");