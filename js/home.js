$(document).ready(() => {
    getNick();
});


function getNick() {
    const userNickname = localStorage.getItem("userNickname");
    $("#nickname").val(userNickname);
}