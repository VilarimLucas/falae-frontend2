$(document).ready(() => {
    getNick();
});


function getNick() {
    console.log(213);
    const userNickname = localStorage.getItem("userNickname");
    $("#nickname").html(userNickname);
}