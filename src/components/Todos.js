import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todos(props) {
  const [modalisOpen, setModalisOpen] = useState(false);

  const deleteHandler = () => {
    setModalisOpen(true);
  };

  function closeModalHandler() {
    setModalisOpen(false);
  }

  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>

      {modalisOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalisOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todos;
