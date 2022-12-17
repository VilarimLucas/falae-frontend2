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

function answerCreate(idPost, answer){
    const idUser = localStorage.getItem("userId");
    const body = `{"comment": "${answer}", "user_id": "${idUser}", "post_id":"${idPost}"}`;

    $.ajax({
        type: "POST",
        url: url_answer,
        data: body,
        success: (res) => {
            console.log('answer done.');
            window.location.href = `/home.html`;
        },
        contentType: "application/json",
        dataType: "json"
    });
}

function getAllAnswer(idUser, idPost){
    const ul = $("<ul>");

    $.ajax({
        type: "GET",
        url:url_answer,
        async: false,
        sucess:function(res){
            res.forEach(e => {
                if(e.user.id === idUser && e.post.id === idPost){
                    const li = $("<li>");
                    const answerArea = $(
                        `<div>
                        <b>Resposta: </b>${e.comment}<br>
                        <b><${e.user.nickname}</b><hr>
                        </div>`
                    );
                    ul.append(li.append(answerArea));
                }
            });
        },
        contentType: "application/json",
        dataType: "json"
    });
    return ul;
}


function getAllPosts(){
    $("#post-list").empty();
    $.getJSON(url_posts, function(data){
        const ul = $("<ul>");
        data.forEach(e => {
            let answer = 'Resposta vai aqui';
            const li = $("<li>");
            const postArea = $(
                `<div class="comment"><p><b>Comentário: </b></p>
                ${e.comment}
                <p><b>ass: </b>${e.user.nickname}</p></div>
                <br><br>
                <div class="answer-area">
                    <textarea cols=60 id="answer-home" rows="10" name="answer-home" maxlength="500" wrap="hard" placeholder="Deixe sua resposta"></textarea><br>
                    <button id="hmanswer-btn" onclick="answerCreate(${e.id}, ${answer})">Responder</button> 
                </div><br><hr>`
                );
            ul.append(li.append(postArea.append(getAllAnswer(e.user.id, e.id))));
        });
        $("#post-list").append(ul);
    });
}
