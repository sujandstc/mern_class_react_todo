import { useEffect, useRef, useState } from "react";
import { FaRegHandPointRight } from "react-icons/fa";
// clear data
// form and prevent default

// form
// localstorage
// useEffect
// props passing..

const TodoSection = () => {
  const [todos, setTodos] = useState([]);
  const todoText = useRef();

  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  const addData = (e) => {
    e.preventDefault();
    // console.log(todoText.current.value);
    const newValue = todoText.current.value;

    if (newValue == "") {
      //early return...
      return;
    }

    const newArray = [newValue, ...todos];
    localStorage.setItem("todos", JSON.stringify(newArray));
    setTodos(newArray);
    todoText.current.value = "";
  };

  const getDataFromLocalStorage = () => {
    const getData = localStorage.getItem("todos");

    if (getData && getData.length > 0) {
      setTodos(JSON.parse(getData));
    }
  };

  return (
    <>
      <form onSubmit={addData}>
        <div className="adder">
          <input type="text" ref={todoText} />
          <button type="submit">+ Add Todo</button>
        </div>
      </form>

      <div className="todo">Todos</div>

      {todos.length < 1 && <>No data</>}

      {/* {todos.length > 4 && (
        <>
          <div
            style={{ background: "red", color: "white", textAlign: "center" }}
          >
            Too many data
          </div>
        </>
      )} */}

      {todos.map((el) => {
        return (
          <>
            <div className="singleItem">
              <FaRegHandPointRight
                style={{
                  marginRight: "100px",
                }}
              />

              {el}
            </div>
          </>
        );
      })}
    </>
  );
};

export default TodoSection;
