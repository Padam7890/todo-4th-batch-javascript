const inputval = document.getElementById("inputval");
const btn = document.getElementById("btn");
const listContainer = document.getElementById("list__container");

//event listeners
//kunai kura trigger vayo vane dekhaune lai hamile
//event listeners vanxam

btn.addEventListener("click", (e) => {
  if (inputval.value === "") {
    alert("Please enter a value");
  } else {
    const htmlcontent = `
            <li class=" flex items-center w-full gap-10">
            <div class=" flex gap-4"> 
              <img id="check" class="w-8"  src="images/unchecked.png" alt="check/uncheck">
              <p id="texts" class="text-2xl">${inputval.value}</p>
            </div>
            <div class=" flex  items-center gap-4">
              <p id="cross" class="text-xl w-12 text-center border rounded-full p-2">&#10006</p>
              <img id="edit" class="w-14 border rounded-full p-2" src="images/icon.png" alt="edit">
            </div>
          </li>
    `;
    listContainer.insertAdjacentHTML("afterbegin", htmlcontent);
  }
});

listContainer.addEventListener("click", (e) => {
  //check wala kam sakiyo
  if (e.target && e.target.id === "check") {
    if (e.target.src.includes("images/unchecked.png")) {
      e.target.src = "images/checked.png";
      e.target.nextElementSibling.style.textDecoration = "line-through";
    } else {
      e.target.src = "images/unchecked.png";
      e.target.nextElementSibling.style.textDecoration = "none";
    }
  }
  //cross wala delete item wala kam

  if (e.target && e.target.id === "cross") {
    const listItem = e.target.closest("li");
    if (listItem) {
      listItem.remove();
    }
  }

  //edit wala from here

  if (e.target && e.target.id === "edit") {
    const textElement = e.target.closest("li").querySelector("#texts");

    if (textElement) {
      const currentText = textElement.textContent;
      const newtext = prompt("Edit the Text", currentText);

      if (newtext !== null && newtext.trim() !== "") {
        textElement.textContent = newtext.trim();
      }
    }
  }
});
