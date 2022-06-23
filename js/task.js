
const addTaskButton = document.querySelector('#add-task');
const openTask = document.querySelector("#open-task");

let addTaskButtonFunction = () => {
    const input = document.querySelector('#title input');
    const inputValue = input.value;
    const dateTime = document.querySelector("#date-div input");
    const textArea = document.querySelector("#title textarea");
    const taskList = document.getElementById('task-list');
    const created = document.getElementById("created");
    const newModalBody = document.getElementById("new-modal-body");


    if (inputValue === "" || dateTime === "") {
        alert("Please Enter a Task")
    }
    else {
        taskList.innerHTML += `
            <div class="lists">
                <input id="radio" type="radio">
                <p type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1" id="open-task">
                    ${inputValue}
                </p>
                <button class="delete">
                    <img src="./images/trash-solid.svg" alt="">
                </button>
            </div>
        `;

        newModalBody.innerHTML = `

        <div id="new-title">
            <input id="input-title" type="text" placeholder="Title" value="${inputValue}" disabled>
            <hr>
            <textarea name="" placeholder="Notes" id="new-text-area" cols="30" rows="9" value="" disabled>
            ${textArea.value}
            </textarea>
        </div>
        

                            <form id="new-info">
                                <div class="input-group mb-3" id="new-date-div">
                                    <input class="form-control" id="new-date" name="new-date" type="datetime-local" required disabled
                                        placeholder="Date and Time" value="${dateTime.value}">
                                </div>
                                <div id="new-location">
                                    <input class="mb-3" type="text" value="" placeholder="Add Location" disabled>
                                </div>
                                    <p id="priority"> Priority </p>
                                    <div id="priority-list">
                                        <div class="form-check">
                                            <label for="1">1</label>
                                            <input type="radio" name="newflexRadioDefault" id="1" value="1" disabled>
                                        </div>
                                        <div class="form-check">
                                            <label for="2">2</label>
                                            <input type="radio" name="newflexRadioDefault" id="2" value="2" disabled>
                                        </div>
                                        <div class="form-check">
                                            <label for="3">3</label>
                                            <input type="radio" name="newflexRadioDefault" id="3" value="3" disabled>
                                        </div>
                                        <div class="form-check">
                                            <label for="4">4</label>
                                            <input type="radio" name="newflexRadioDefault" id="4" value="4" disabled>
                                        </div>
                                        <div class="form-check">
                                            <label for="5">5</label>
                                            <input type="radio" name="newflexRadioDefault" id="5" value="5" disabled>
                                        </div>
                                    </div>    
                                </div>
                            </form>
        `

        created.style.display = "flex";
        setTimeout(hideCreated, 2000)
        function hideCreated() {
            created.style.display = "none";
        }

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }


        input.value = "";
        dateTime.value = "";
        textArea.value = "";
    }
};

addTaskButton.addEventListener('click', addTaskButtonFunction);


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
});


