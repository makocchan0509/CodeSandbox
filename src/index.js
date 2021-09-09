import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  addToIncompleteList(inputText);
};

//未完了リストから指定要素削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//完了リストから指定要素削除
const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

const addToIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);

  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });

  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode;
    deleteFromIncompleteList(completeTarget);

    const text = completeTarget.firstElementChild.innerText;
    completeTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    backButton.addEventListener("click", () => {
      const backTarget = backButton.parentNode;
      deleteFromCompleteList(backTarget);

      const text = backTarget.firstElementChild.innerText;

      addToIncompleteList(text);
    });

    completeTarget.appendChild(li);
    completeTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(completeTarget);
  });
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
