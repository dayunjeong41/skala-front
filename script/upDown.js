document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startUpDown");

    if (startButton) {
        startButton.addEventListener("click", playUpDownGame);
    }
});

function playUpDownGame() {
    var computerNum = Math.floor(Math.random() * 50) + 1;
    var count = 0;

    while (true) {
        var answer = prompt("1부터 50 사이의 숫자를 입력하세요.");

        if (answer === null) {
            alert("게임을 종료합니다.");
            break;
        }

        var userNum = Number(answer);

        if (!Number.isInteger(userNum) || userNum < 1 || userNum > 50) {
            alert("1부터 50 사이의 숫자만 입력해주세요.");
            continue;
        }

        count++;

        if (userNum > computerNum) {
            alert("Down!");
        } else if (userNum < computerNum) {
            alert("Up!");
        } else {
            alert("축하합니다! " + count + "번 만에 맞추셨습니다.");
            break;
        }
    }
}
