document.addEventListener("DOMContentLoaded", () => {
    const bagButton = document.getElementById("showBag");

    if (bagButton) {
        bagButton.addEventListener("click", showMyBag);
    }
});

function showMyBag() {
    var myBag = [
        { name: "노트북", count: 1 },
        { name: "충전기", count: 1 },
        { name: "필기구", count: 3 },
        { name: "텀블러", count: 1 }
    ];
    var message = "내 가방 속 물품\n";
    var bagBox = document.getElementById("bag-box");

    for (var i = 0; i < myBag.length; i++) {
        message += myBag[i].name + ": " + myBag[i].count + "개\n";
    }

    if (bagBox) {
        bagBox.innerHTML = myBag.map(function (item) {
            return "<p>" + item.name + ": " + item.count + "개</p>";
        }).join("");
    }

    alert(message);
}
