const toDoForm = document.querySelector(".todo");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector(".todo input");
let toDos = [];
const TODOS_KEY = "todos";

function handleToDoSubmit(event){ //javascript가 발생한 event를 함수의 첫번째 인자로 주게된다. 
  event.preventDefault();
  const newToDo = toDoInput.value ; // input의 값을 저장 
  toDoInput.value = ""; // enter를 누를때 input의 값을 초기화 
  const newTodoObj = {
    text: newToDo,
    id: Date.now(), //리스트를 작성한 시간을 id로 반영 
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
 }
 
 toDoForm.addEventListener("submit",handleToDoSubmit);

function paintToDo(newToDo){
const li = document.createElement("li"); // li 태그 생성 
li.id = newToDo.id; 
const span1 = document.createElement("span");// span 태그 생성 
span1.innerText = newToDo.text;
const span2 = document.createElement("span")
span2.className = "material-symbols-outlined";
span2.innerText = "delete"
span2.addEventListener("click",deletToDo);
li.appendChild(span1); // span이 li의 자식으로 들어가진다  
li.appendChild(span2);

toDoList.appendChild(li); 
// span -> li -> #todo-list 의 순서로 appendChild를 사용해야 역순으로 태그가 생성된다.  
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
    // JSON.stringify는 string으로 바꾸는 역할을 한다. 
    // Local Storage에는 오직 텍스트만 저장가능해서 배열 -> 텍스트 변환이 필요하다 
    // Local Storage에 저장될때 string data type 으로 저장
}

function deletToDo(event){
    const li = (event.target.parentElement); // target은 클릭된 HTML의 element, parentElement는 클릭된 element의 부모 
    console.log(event.target.parentElement)
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id)); //todo는 todos 각각의 object를 부르게 될 때 필요한 저장공간  
    saveToDos();
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) { //저장된 데이터가 있을경우에 실행 
  const parsedToDos = JSON.parse(savedToDos); 
  //JSON.parse는 object로 바꾸는 역할을 한다 
  //Local Storage에 저장된 string data type을 object 바꾸기 위해 사용 
  /* 즉 index를 통해 value를 access할 수 있다 
    예: "[a,b,c,d]" (string) => [a, b, c, d] (array);
    array[0] = a; array[1] = b; array[2] = c; array[3] = */
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); 
  // 각각의 item에 대해서 paintToDo를 실행시킨다 
  // parsedToDos가 4개의 인덱스를 가지고 있는 배열이라면 console.log를 각각의 인덱스에 대해서 총 4번실행하게 된다. 
}
