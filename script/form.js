document.addEventListener("DOMContentLoaded", () => {
    initSignUpForm();
    renderSignUpResult();
});

function initSignUpForm() {
    const form = document.getElementById("signupForm");
    const passwordInput = document.getElementById("userPw");
    const passwordToggle = document.getElementById("passwordToggle");
    const emailDomain = document.getElementById("emailDomain");
    const customDomain = document.getElementById("customDomain");
    const emailHidden = document.getElementById("userEmail");

    if (!form) {
        return;
    }

    passwordToggle.addEventListener("click", () => {
        const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";
        passwordToggle.textContent = isPassword ? "숨기기" : "보기";
    });

    emailDomain.addEventListener("change", () => {
        const isCustom = emailDomain.value === "custom";
        customDomain.style.display = isCustom ? "block" : "none";
        customDomain.required = isCustom;

        if (!isCustom) {
            customDomain.value = "";
        }
    });

    form.addEventListener("submit", () => {
        const emailId = document.getElementById("emailId").value.trim();
        const finalDomain = emailDomain.value === "custom"
            ? customDomain.value.trim()
            : emailDomain.value;

        emailHidden.value = `${emailId}@${finalDomain}`;
    });

    form.addEventListener("reset", () => {
        window.setTimeout(() => {
            customDomain.style.display = "none";
            customDomain.required = false;
            passwordInput.type = "password";
            passwordToggle.textContent = "보기";
        }, 0);
    });
}

function renderSignUpResult() {
    const resultList = document.querySelector(".result-list");

    if (!resultList) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const routeText = {
        recommend: "단순 포트폴리오 구경",
        sns: "프로젝트 협업 제안",
        search: "채용 및 면접 제안",
        etc: "기타 친목 및 네트워킹"
    };

    setText("resultUserId", params.get("userId"));
    setText("resultUserName", params.get("userName"));
    setText("resultUserEmail", params.get("userEmail"));
    setText("resultUserPhone", params.get("userPhone"));
    setText("resultBirthRoute", routeText[params.get("birthRoute")] || params.get("birthRoute"));
    setText("resultContactMethod", params.get("contactMethod"));
    setText("resultIntro", params.get("intro"));
}

function setText(id, value) {
    const element = document.getElementById(id);

    if (!element) {
        return;
    }

    element.textContent = value && value.trim() ? value : "-";
}
