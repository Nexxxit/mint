import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function Balance({ balance }) {
  const [isVisible, setIsVisible] = useState(false);
  const [currency, setCurrency] = useState("ruble");
  const [balanceValue, setBalanceValue] = useState(balance);
  const [currencyRate, setCurrencyRate] = useState(100);

  const handleClickVisible = () => {
    setIsVisible(!isVisible);
  };

  const changeCurrency = () => {
    if (currency === "ruble") {
      setCurrency("dollar");
      setBalanceValue(balanceValue / currencyRate);
    } else {
      setCurrency("ruble");
      setBalanceValue(balanceValue * currencyRate);
    }
  };

  return (
    <>
      <div className="border border-secondary-subtle rounded-4 p-3 pt-1 pb-1 mt-5 col-3 shadow-sm">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-light-emphasis m-0">Текущий баланс:</p>
          <Button variant="link" onClick={handleClickVisible}>
            {isVisible ? (
              <i className="bi bi-eye-slash fs-4 text-light-emphasis"></i>
            ) : (
              <i className="bi bi-eye fs-4 text-light-emphasis"></i>
            )}
          </Button>
        </div>

        <span className="d-flex align-items-center justify-content-between">
          <p className="d-flex align-items-center fw-medium fs-3 mb-0 mt-1 font-monospace">
            {currency === "ruble" ? (
              <>
                {isVisible ? "******" : balanceValue.toLocaleString("ru-RU")}
                <CurrencyRubleIcon className="fs-4" />
              </>
            ) : (
              <>
                <AttachMoneyIcon className="fs-4" />
                {isVisible ? "******" : balanceValue.toLocaleString("en-US")}
              </>
            )}
          </p>
          <span className="col-2">
            <Form.Select
              size="sm"
              className="fw-medium rounded-4"
              onChange={changeCurrency}
              value={currency}
              aria-label="Currency balance"
            >
              <option value="ruble">&#8381;</option>
              <option value="dollar">&#36;</option>
            </Form.Select>
          </span>
        </span>
      </div>
    </>
  );
}
