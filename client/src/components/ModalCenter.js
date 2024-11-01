import { Modal, Button } from "react-bootstrap";

export default function ModalCenter(props) {
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="modal-delete-transaction"
        centered
      >
        <Modal.Header>
          <Modal.Title id="modal-delete-transaction">
            Удаление транзакции
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Вы уверены, что хотите удалить транзакцию?
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="secondary" onClick={props.onHide}>Отменить</Button>
          <Button variant="danger" onClick={props.onHide}>Удалить</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
