const form = document.getElementById("signupForm") as HTMLFormElement;
const firstName = document.getElementById("firstName") as HTMLInputElement;
const age = document.getElementById("age") as HTMLInputElement;

function gift(age: number) {
    return +age + 3;
}

form.addEventListener("submit", e => {
    e.preventDefault(); // To avoid Page Reload

    if (+age.value < 18) {
        console.log("Inscription Refusée.");
    } else {
        console.log(`
            Bienvenue ${firstName.value}.
            Vous avez ${age.value} ans.
            Vous aurez droit à un Cadeau quand vous aurez ${gift(+age.value)} ans.
        `);
    }
})