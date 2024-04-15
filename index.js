let text = document.querySelector(".text")
let button = document.querySelector(".button")
let noteContainer = document.querySelector(".note-container")
let reset = document.getElementById("reset")
let sort = document.querySelector(".sort")
let notes = []

button.addEventListener("click", () => {
    if (text.value !== "") {
        notes.push(text.value);
        addNote(notes)
        text.value = "";
    } else {
        alert("elave edin")
    }

});
function addNote(arr) {
    noteContainer.innerHTML = "";
    arr.forEach((element) => {
        let noteDiv = document.createElement("div");
        noteDiv.classList.add("note");
        let note = document.createElement("p");
        note.textContent = element;
        let removeBtn = document.createElement("i")
        removeBtn.classList.add("ri-close-circle-line");
        noteDiv.append(note, removeBtn);
        noteContainer.append(noteDiv)
        removeBtn.addEventListener("click", () => {
            notes = notes.filter((value) => element !== value);
            addNote(notes);
        });
    });
}

reset.addEventListener("click", () => {
    text.value = "";
});

let sorted = false;
sort.addEventListener("click", () => {
    if (!sorted) {
        notes.sort((a, b) => {
            return a.localeCompare(b);

        })
        sorted = true;
        sort.firstElementChild.classList.add("fa-arrow-up-short-wide")
        sort.firstElementChild.classList.remove("fa-arrow-down-short-wide")
    }else{
        sorted = false;
        sort.firstElementChild.classList.add("fa-arrow-down-short-wide")
        sort.firstElementChild.classList.remove("fa-arrow-up-short-wide")

    }
    addNote(notes);
});
