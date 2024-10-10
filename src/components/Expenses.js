import { Form } from "react-bootstrap";

export default function Expenses() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center gap-2 p-3">
        <span className="text-nowrap fs-4 text-center fw-light">Расходы за</span>
        <span className="col-4">
          <Form.Select
            size="sm"
            className="rounded-4 fw-medium"
            aria-label="Profit select"
          >
            <option value="30 days">30 дней</option>
            <option value="60 days">60 дней</option>
            <option value="90 days">90 дней</option>
          </Form.Select>
        </span>
      </div>
      <div className="fs-4 text-center text-danger">
        <p className="m-0 p-3 pt-0">- 10 000 руб. (-9%)</p>
      </div>
    </>
  );
}
