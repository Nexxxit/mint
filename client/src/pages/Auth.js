import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import logo from "../logo.svg";
import { useState } from "react";
import Login from "../components/Login";
import Registration from "../components/Registration";

export default function Auth() {
  const [regForm, setRegForm] = useState(false);
  const [value, setValue] = useState(1);

  const handleChangeRadio = (val) => {
    setValue(val);
    setRegForm(val === 2);
  };

  return (
    <>
      <div className="d-flex mt-5">
        <div className="col-6 p-3 pt-0">
          <ToggleButtonGroup
            className="d-flex"
            type="radio"
            name="auth"
            value={value}
            onChange={handleChangeRadio}
          >
            <ToggleButton
              className="col-6 rounded-start-4"
              id="loginRadio"
              type="radio"
              variant="primary"
              name="radioLog"
              value={1}
            >
              Вход
            </ToggleButton>
            <ToggleButton
              className="col-6 rounded-end-4"
              id="registerRadio"
              type="radio"
              variant="primary"
              name="radioReg"
              value={2}
            >
              Регистрация
            </ToggleButton>
          </ToggleButtonGroup>
          <div className="p-3">
            <div className="d-flex justify-content-center align-items-center">
              <p className="fs-1 position-relative">
                Mint
                <img
                  alt="Logo"
                  src={logo}
                  width={30}
                  height={30}
                  className="position-absolute top-0 end-1 translate-middle-x"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 p-3 border border-black rounded-4">
          {regForm ? <Registration /> : <Login />}
        </div>
      </div>
    </>
  );
}
