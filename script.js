window.addEventListener("load", () => {
  const form = document.getElementById("add-task-form");
  const addtask = document.getElementById("add-task-input");
  const todotask_el = document.getElementById("todo-tasks");
  const completedtasks_el = document.getElementById("completed-tasks");
  const pendingtasks_el = document.getElementById("pending-tasks");

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskvalue = addtask.value;
    if (!taskvalue) {
      alert("Please fill out the task");
    } else {
      
      
      const currentDate = new Date();

      const timestamp = currentDate.toLocaleString();

      const list_input_box_el = document.createElement("div");
      list_input_box_el.classList.add("list-input-box");

      const input_filed_element = document.createElement("input");
      input_filed_element.type = "text";
      input_filed_element.classList.add("input-filed");
      input_filed_element.setAttribute("readonly", "readonly");
      input_filed_element.value = taskvalue + " (Added: " + timestamp + ")";

      const edit_el = document.createElement("button");
      edit_el.classList.add("btn-sub");
      edit_el.innerHTML = "edit";

      const delete_el = document.createElement("button");
      delete_el.classList.add("btn-sub");
      delete_el.innerHTML = "delete";

      const complete_el = document.createElement("button");
      complete_el.classList.add("btn-sub");
      complete_el.innerHTML = "complete";

      list_input_box_el.appendChild(input_filed_element);
      list_input_box_el.appendChild(edit_el);
      list_input_box_el.appendChild(delete_el);
      list_input_box_el.appendChild(complete_el);
      todotask_el.appendChild(list_input_box_el);

      addtask.value = "";

      edit_el.addEventListener("click", () => {
        if (edit_el.innerHTML == "edit") {
          edit_el.innerHTML = "save";
          input_filed_element.removeAttribute("readonly");
          input_filed_element.focus();
        } else {
          input_filed_element.setAttribute("readonly", "readonly");
          edit_el.innerHTML = "edit";
        }
      });

      delete_el.addEventListener("click", () => {
        todotask_el.removeChild(list_input_box_el);
      });

      complete_el.addEventListener("click", () => {
        completedtasks_el.appendChild(list_input_box_el);
        todotask_el.removeChild(list_input_box_el);
        complete_el.style.display = "none";
        input_filed_element.setAttribute("readonly", "readonly");
        edit_el.style.display = "none";
        delete_el.style.display = "none";
      });

      const pending_el = document.createElement("button");
      pending_el.classList.add("btn-sub");
      pending_el.innerHTML = "pending";

      pending_el.addEventListener("click", () => {
        pendingtasks_el.appendChild(list_input_box_el);
        completedtasks_el.removeChild(list_input_box_el);
      });

      list_input_box_el.appendChild(pending_el);
    }
  });

});
