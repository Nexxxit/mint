import TransactionsList from "../components/TransactionsList";
import TransactionsFilter from "../components/TransactionsFilter";
import { Button } from "react-bootstrap";
import plusIcon from "../plusIcon.svg";
import { useState } from "react";

export default function Transactions() {
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit((prevEdit) => !prevEdit);
  };

  return (
    <>
      <div className="mt-5 border border-secondary-subtle rounded-4 shadow-sm">
        <div className="p-3 d-flex align-items-center gap-5">
          <div className="d-flex flex-fill">
            <Button
              variant="light"
              title="Добавить транзакцию"
              size="sm"
              className="rounded-pill d-flex text-center align-items-center px-4 py-2 border"
            >
              <img src={plusIcon} alt="plusIcon" />
            </Button>
            <Button variant={edit ? "primary" : "outline-secondary"} className="ms-4" onClick={toggleEdit}>
              <i className="bi bi-pencil fs-5"></i>
            </Button>
          </div>
          <div className="flex-fill">
            <TransactionsFilter />
          </div>
        </div>
        <TransactionsList edit={edit} />
      </div>
    </>
  );
}
