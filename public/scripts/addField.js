// Procurar o botão
document.querySelector("#add-time")
// When click
.addEventListener("click", cloneField)

// Execute
function cloneField() {
    
    // Duplicate field, which?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    
    //Reset fields, which fields?
    const fields = newFieldContainer.querySelectorAll("input")

    // For each, reset
    fields.forEach(function(field) {
        field.value = ""
    })

    // ADD in page, but where?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}