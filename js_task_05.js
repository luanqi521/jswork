(function () {
    var num = document.getElementById("InputNum");
    var leftin = document.getElementById("leftin");
    var rightin = document.getElementById("rightin");
    var leftout = document.getElementById("leftout");
    var rightout = document.getElementById("rightout");
    var sort = document.getElementById("sort");
    var numlist = document.getElementById("numDisplay");

    function setDivHeight() {
        if ((num.value < 10) || (num.value > 100)) {
            alert("请输入10-100之间的数字");
            return null;
        }
        else {
            var item = document.createElement("div");
            var item1 = document.createElement("div");
            item1.style.height = String((num.value) * 2) + "px";
            item1.innerHTML = num.value;
            item.appendChild(item1);
            return item;
        }
    }

    function Leftin() {
        debugger;
        var item = setDivHeight();
        var itemlist = numlist.getElementsByTagName("div");
        if (itemlist.length <= 60) {
            numlist.insertBefore(item, numlist.firstChild);
            num.value = "";
        }
        else {
            alert("队列元素数量最多限制为60个");
            num.value = "";
        }

    }
    function Rightin() {
        var item = setDivHeight();
        var itemlist = numlist.getElementsByTagName("div");
        if (itemlist.length <= 60) {
            numlist.appendChild(item);
            num.value = "";
        }
        else {
            alert("队列元素数量最多限制为60个");
            num.value = "";
        }

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

    //从小到大排序
    function Sort() {
        var itemlist = document.getElementsByTagName("div");
        for (var i = 0; i < itemlist.length; i++)
            for (var j = i + 1; j < itemlist.length; j++) {
                if (itemlist[j] < itemlist[i]) {
                    var t = itemlist[j];
                    itemlist[j] = itemlist[i];
                    itemlist[i] = itemlist[j];
                }
            }
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
    sort.onclick = function () {
        Sort();
    }

}
)();
