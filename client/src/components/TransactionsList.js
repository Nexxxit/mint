import { useState } from "react";
import TransactionsListItem from "./TransactionsListItem";
import ModalCenter from "./ModalCenter";

export default function TransactionsList({edit}) {
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  return (
    <>
      <div className="d-flex flex-column gap-2 p-3 pt-0">
        <TransactionsListItem
          onClickShow={handleShow}
          edit={edit}
         
        />
        <TransactionsListItem
          onClickShow={handleShow}
          edit={edit}
          
        />
      </div>
      <ModalCenter show={modalShow} onHide={handleClose} />
    </>
  );
}
