/*
let habilidades = ["TUTOR"];
let opcao = true;

console.log(habilidades.indexOf("TUTOR"))

if (opcao && habilidades.indexOf("TUTOR") !== -1) {
    console.log("OPÇÃO MARCADA E TEM TUTOR NA LISTA");
}
if (!opcao && habilidades.indexOf("TUTOR") !== -1) {
    console.log("OPÇÃO DESMARCADA E TEM TUTOR NA LISTA");
    let indexItem = habilidades.indexOf("TUTOR");
    habilidades.splice(indexItem, 1);
}
if (opcao && habilidades.indexOf("TUTOR") === -1) {
    console.log("ESTÁ MARCADO E NÃO TEM TUTOR NA LISTA");
    habilidades.push("TUTOR");
}
if (!opcao && habilidades.indexOf("TUTOR") === -1) {
    console.log("OPÇÃO DESMARCADA E NÃO TEM TUTOR NA LISTA");
    habilidades.push("TUTOR");
}
console.log (habilidades);


let habilidades = [];

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function() {
        console.log(checkbox);
        if (checkbox.id === "had-pet") {
            if (checkbox.checked === false && habilidades.indexOf("TUTOR") !== 1) {
                // OPÇÃO DESMARCADA E TEM TUTOR NA LISTA
                let indexItem = habilidades.indexOf("TUTOR");
                habilidades.splice(indexItem, 1);
                } else if (checkbox.checked === true && habilidades.indexOf("TUTOR") === -1) {
                    // OPÇÃO MARCADA E NÃO TEM TUTOR NA LISTA
                    habilidades.push("TUTOR");
                    }
                    console.log(habilidades);
                    }
                    })
                    const checkboxes = document.querySelectorAll(`input[type="checkbox"]`);
                    console.log(checkboxes.item(1).id)
                    console.log(checkboxes);
})*/