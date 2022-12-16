const url = 'http://localhost:8080/users';
const base_url = 'http://localhost:5500'
let falae;

/*

// consulta re
document.onreadystatechange = () => {
    if (document.readyState == 'complete') {
        taskGetAll();
        $("#aquiVaiIdDoCampoParaConsulta").keyup(search);
    }
}

*/

// Cadastra Usuário
function userCreate() {
    const nickname = $("#adduser-nick").val();
    const email = $("#adduser-email").val();
    const password = $("#adduser-pass").val();

    const body = `{"nickname": "${nickname}", "email": "${email}", "password": "${password}"}`;

    $.ajax({
        type: "POST",
        url: url,
        data: body,
        success: (res) => {
            console.log('post done.');
            window.location.href = `/index.html`;
        },
        contentType: "application/json",
        dataType: "json"
    });
}

// Seleciona Usuário
function userSelect(){
    const email = $("#lguser-email").val();
    const password = $("#lguser-pass").val();
    const body = `{"email": "${email}", "password": "${password}"}`;
    $.ajax({
        type: "POST",
        url: url+'/auth',
        data: body,
        success: (res) => {
            console.log('post done.');
            console.log(res);
            localStorage.setItem("userId", res.id);
            localStorage.setItem("userEmail", res.email);
            localStorage.setItem("userNickname", res.nickname);
            window.location.href = '/home.html';
        },
        contentType: "application/json",
        dataType: "json"
    });
}



// function taskGetAll() {
//     $("#task-list").empty();
//     $.getJSON(url, function(data) {
//         tasklist = data;
//         const ul = $("<ul>");
//         tasklist.forEach(e => {
//             const status = (e.status == 'DONE') ? 'task-done' : 'task-pending';
//             const li = $("<li>");
//             const chk = $(`<input type='checkbox' ${(e.status == 'DONE') ? 'checked' : '' } onclick="${(e.status == 'DONE') ? 'markPending(this.value)' : 'markDone(this.value)'}" value='${e.id}'">`);
//             const desc = $(`<label>${e.descrition}</label>`);
//             ul.append(li.append(chk, desc));
//         });
//         $("#task-list").append(ul);
//     });
// }

// function markDone(id) {
//     console.log('markDone', id);
//     for (const e of tasklist) {
//         console.log(e.id, id);
//         if (e.id == id) {
//             const body = `{"description": "${e.description}", "status": "DONE"}`;
//             $.ajax({
//                 type: "PUT",
//                 url: `${url}/${e.id}`,
//                 data: body,
//                 success: (res) => { taskGetAll() },
//                 contentType: "application/json",
//                 dataType: "json"
//             });
//         }
//     }
// }
// const markPending = (id) => {
//     console.log('markPending', id);
//     for (const e of tasklist) {
//         console.log(e.id, id);
//         if (e.id == id) {
//             const body = `{"description": "${e.description}", "status": "PENDING"}`;
//             $.ajax({
//                 type: "PUT",
//                 url: `${url}/${e.id}`,
//                 data: body,
//                 success: (res) => { taskGetAll() },
//                 contentType: "application/json",
//                 dataType: "json"
//             });
//         }
//     }
// }

// const search = () => {
//     const desc = $("#searchtask-desc").val();
//     console.log(desc);

//     $("#task-list").empty();
//     $.getJSON(`${url}/desc/${desc}`, function(data) {
//         tasklist = data;
//         const ul = $("<ul>");
//         tasklist.forEach(e => {
//             const status = (e.status == 'DONE') ? 'task-done' : 'task-pending';
//             const li = $("<li>");
//             const chk = $(`<input type='checkbox' ${(e.status == 'DONE') ? 'checked' : '' } onclick="${(e.status == 'DONE') ? 'markPending(this.value)' : 'markDone(this.value)'}" value='${e.id}'">`);
//             const desc = $(`<label>${e.description}</label>`);
//             ul.append(li.append(chk, desc));
//         });
//         $("#task-list").append(ul);
//     });
// }