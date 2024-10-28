import TransactionsList from "../components/TransactionsList";
import TransactionsListItem from "../components/TransactionsListItem";
import TransactionsFilter from "../components/TransactionsFilter";
import { Button } from "react-bootstrap";
import plusIcon from "../plusIcon.svg";

export default function Transactions() {
  return (
    <>
      <div className="mt-5 border border-secondary-subtle rounded-4 shadow-sm">
        <div className="p-3 d-flex align-items-center gap-5">
          <div className="flex-fill">
          <Button
            variant="light"
            title="Добавить транзакцию"
            size="sm"
            className="rounded-pill d-flex text-center align-items-center px-4 py-2 border"
          >
            <img src={plusIcon} alt="plusIcon" />
          </Button>
          </div>
          <div className="flex-fill">
          <TransactionsFilter/>
          </div>
        </div>
      </div>
    </>
  );
}
