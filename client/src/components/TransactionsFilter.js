import { Form } from "react-bootstrap";

export default function TransactionsFilter() {
  return (
    <>
      <div className="d-flex gap-3 justify-content-between">
        <Form.Group className="text-center">
          <Form.Label>Категория</Form.Label>
          <Form.Select>
            <option>Выберите категорию</option>
            <option value={1}>Транспорт</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="text-center">
          <Form.Label>Тип транзакции</Form.Label>
          <Form.Select>
            <option>Выберите тип транзакции</option>
            <option value="profit">Доход</option>
            <option value="expense">Расход</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="text-center">
          <Form.Label>Дата</Form.Label>
          <Form.Control placeholder="Выберите дату" type="date"></Form.Control>
        </Form.Group>

        <Form.Group className="text-center">
          <Form.Label>Сумма транзакции</Form.Label>
          <div className="d-flex align-items-center gap-3">
            <Form.Control
              placeholder="0 рублей"
              style={{ minWidth: 10 + "vw" }}
            ></Form.Control>
            {" - "}
            <Form.Control
              placeholder="100 000 рублей"
              style={{ minWidth: 10 + "vw" }}
            ></Form.Control>
          </div>
        </Form.Group>
      </div>
    </>
  );
}
