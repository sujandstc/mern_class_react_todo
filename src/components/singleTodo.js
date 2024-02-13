import { useState } from "react";
import { FaRegHandPointRight } from "react-icons/fa";

const SingleTodo = ({ datas }) => {
  const [isDone, setIsDone] = useState(false);

  const markAsDone = () => {
    setIsDone(true);
  };

  return (
    <>
      <div className="singleItem">
        <FaRegHandPointRight
          style={{
            marginRight: "100px",
          }}
        />
        {datas}

        {isDone ? (
          <> Done</>
        ) : (
          <>
            <button onClick={markAsDone}>Mark as done</button>
          </>
        )}
      </div>
    </>
  );
};

export default SingleTodo;
