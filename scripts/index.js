function postComment(event){
    event.preventDefault();

    var li = document.createElement("li");
    li.className = "d-flex align-items-center fw-lighter mt-2";

    var img = document.createElement("img");
    img.className = "avatar";
    img.src = "https://i.pinimg.com/280x280_RS/13/07/3a/13073ac076d38ca29e2866fddddbf677.jpg";
    li.appendChild(img);

    var newComment = document.getElementById("comment").value;
    var span = document.createElement("span");
    span.innerText = newComment;
    li.appendChild(span);

    if (newComment === '') {
        alert("Komentar tidak boleh kosong, cukup hatimu aja yang kosong, wkwkw..");
    } else {
        document.getElementById("comment-list").appendChild(li);
    }
    document.getElementById("comment").value = "";
}
