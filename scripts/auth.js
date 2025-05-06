Hooks.once("init", () => {
    game.settings.registerMenu("wordsmith", "authMenu", {
        name: "Wordsmith Authentication",
        label: "Log In / Link Patreon",
        icon: "fas fa-sign-in-alt",
        type: WordsmithAuthForm,
        restricted: false
    });
});

// A simple FormApplication
class WordsmithAuthForm extends FormApplication {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            title: "Wordsmith Authentication",
            template: "modules/wordsmith/templates/auth.html",
            width: 400
        });
    }

    getData() {
        const idToken = localStorage.getItem("wordsmithIdToken");
        const patreonLinked = localStorage.getItem("wordsmithPatreonLinked") === "true";
        return { idToken, patreonLinked };
    }

    activateListeners(html) {
        super.activateListeners(html);
        html.find(".btn-cognito-login").click(() => this._loginCognito());
        html.find(".btn-patreon-link").click(() => this._linkPatreon());
    }

    _loginCognito() {
        const clientId = game.settings.get("wordsmith", "cognitoClientId");
        const domain   = game.settings.get("wordsmith", "cognitoDomain");
        const redirect = `${window.location.origin}/modules/wordsmith/templates/cognito-callback.html`;
        const url = `https://${domain}.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirect)}`;
        window.open(url, "CognitoLogin", "width=500,height=600");
    }

    _linkPatreon() {
        const idToken = localStorage.getItem("wordsmithIdToken");
        const url = `https://api.yourdomain.com/patreon/auth?token=${idToken}`;
        const w = window.open(url, "PatreonLink", "width=500,height=600");
        window.addEventListener("message", (event) => {
            if (event.origin !== window.location.origin) return;
            if (event.data.success) {
                localStorage.setItem("wordsmithPatreonLinked", "true");
                ui.notifications.info("Patreon linked successfully!");
                w.close();
            }
        });
    }
}
