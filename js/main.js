let player = "PLAYER1";
var game_options = document.querySelector('.game-options');
var add_name = document.querySelector('.onready-container');
var content_container = document.querySelector('.content-container');
var ingame_wrapper = document.querySelector('.wrapper-ingame');

ingame_wrapper.classList.add("blank");
add_name.classList.add("blank");
content_container.classList.add("blank");

game_options.addEventListener('click', (e) => {
    e.target.getAttribute('id') === "play-friend" ? playFriend() : playOnline();
})

function playFriend() {
    console.log("PvP");
    game_options.classList.add("blank");
    setUserName();
}

function playOnline() {
    console.log("vsBot");
    game_options.classList.add("blank");
    setUserName();
}

function setUserName() {
    add_name.classList.remove("blank");
    add_name.addEventListener('click', (e) => {
        if (e.target.className === "close-absolute") {
            add_name.classList.add("blank");
        } else if (e.target.id === "nameSubmit") {
            player = document.getElementById('userName').value;
            add_name.classList.add("blank");
            console.log(player);
            content_container.classList.remove("blank");
            document.querySelector('.name-change').textContent = player;
            ingame_wrapper.classList.remove("blank");
        }
    })
}