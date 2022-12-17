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

function getAllAnswer(idUser, idPost){
    $.getJSON(url_answer, function(data){
        const ul = $("<ul>");
        data.forEach(e => {
            if(e.user.id === idUser && e.post.id === idPost){
                const li = $("<li>");
                const answerArea = $(
                    `<b>Resposta: </b>${e.comment}<br>
                    <b><${e.user.nickname}</b>
                    <hr>`
                );
                ul.append(li.append(answerArea));
            }
        });
    });
}

function getAllPosts(){
    $("#post-list").empty();
    $.getJSON(url_posts, function(data){
        const ul = $("<ul>");
        data.forEach(e => {
            const li = $("<li>");
            const postArea = $(
                `<b>Comentário: </b><label>${e.comment}</label>
                <b>Usuário-Post: ${e.user.nickname}</b><br><br>
                <div class="answer-area">
                    <input type="textarea" id="comment-home" placeholder="Deixe uma resposta" />
                    <button id="hmanswer-btn" onclick="answerCreate()">Responder</button> 
                    <div id="answer-list">${getAllAnswer(e.user.id, e.id)}</div>
                </div><br><hr>`
                );
            ul.append(li.append(postArea));
        });
        $("#post-list").append(ul);
    });
}
