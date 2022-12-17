const url_posts = 'http://localhost:8080/posts';
const url_answer = 'http://localhost:8080/answers';

const base_url = 'http://localhost:5500';

let postList;

// $(document).ready(() => {
//     getNick();
// });

document.onreadystatechange = () => {
    if (document.readyState == 'complete') {
        getAllPosts();
        getNick();
    }
}

function getNick() {
    console.log(213);
    const userNickname = localStorage.getItem("userNickname");
    $(".nickname").html(userNickname);
}

function postCreate(){
    const comment = $("#comment-home").val();
    const idUser = localStorage.getItem("userId");

    const body = `{"comment": "${comment}", "user_id": "${idUser}"}`;

    $.ajax({
        type: "POST",
        url: url_posts,
        data: body,
        success: (res) => {
            console.log('post done.');
            window.location.href = `/home.html`;
        },
        contentType: "application/json",
        dataType: "json"
    });
}

function getAllPosts(){
    $("#post-list").empty();
    $.getJSON(url_posts, function(data){
        const ul = $("<ul>");
        data.forEach(e => {
            const li = $("<li>");
            const postLabel = $(`<label>${e.comment}</label><br><br>`);
            const userLabel = $(`<label>Usuário-Post: ${e.user.nickname}</label><br><br><hr>`);
            const answerLabel = $(`<div id="comment-answer"></div><br>Usuário-resposta: <div id="user-answer"></div><br>`);
            const answerArea = $(
                `<input type="textarea" id="comment-home" placeholder="Deixe uma resposta" />
                <button id="hmanswer-btn" onclick="answerCreate()">Responder</button> `
                );
            ul.append(li.append(postLabel, userLabel, answerLabel, answerArea));
        });
        $("#post-list").append(ul);
    });
}
