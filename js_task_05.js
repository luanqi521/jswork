(function () {
    var num = document.getElementById("InputNum");
    var leftin = document.getElementById("leftin");
    var rightin = document.getElementById("rightin");
    var leftout = document.getElementById("leftout");
    var rightout = document.getElementById("rightout");
    var numlist = document.getElementById("numDisplay");

    function setDivHeight() {
        var item = document.createElement("div");
        item.style.height = num + 'px';
        item.innerHTML = num.value;
        return item;
    }
    function Leftin() {
        var item = setDivHeight();
        numlist.insertBefore(item, numlist.firstChild);
        num.value = "";
    }
    function Rightin() {
        var item = setDivHeight();
        numlist.appendChild(item);
        num.value = "";
    }
    function Leftout() {
        var itemlist = numlist.getElementsByTagName("div");
        if (confirm("确定要删除" + itemlist[0].innerHTML + "吗?"))
            itemlist[0].remove();
    }
    function Rightout() {
        var itemlist = numlist.getElementsByTagName("div");
        if (confirm("确定要删除" + itemlist[itemlist.length - 1] + "吗?"))
            itemlist[itemlist.length - 1].remove();
    }
    leftin.onclick = function () {
        Leftin();
    }
    rightin.onclick = function () {
        Rightin();
    }
    leftout.onclick = function () {
        Leftout();
    }
    rightout.onclick = function () {
        Rightout();
    }
}
)();
