function addList() {
    var input = document.getElementById("listContent").value;
    var ul = document.getElementById("list__raw");

    var liContent = document.createElement('li');
    liContent.innerHTML = input;
    ul.appendChild(liContent);
    // console.log(input)
}