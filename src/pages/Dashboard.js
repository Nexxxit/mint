import Balance from "../components/Balance";
import Profit from "../components/Profit";
import Expenses from "../components/Expenses";

export default function Dashboard() {
  return (
    <>
      <div className="d-flex flex-column gap-3">
        <Balance balance={120500} />
        <div className="col-3 border border-secondary-subtle rounded-4 shadow-sm">
          <Profit />
          <span className="d-flex justify-content-center">
          <hr className="col-10"/>
          </span>
          <Expenses/>
        </div>
      </div>
    </>
  );
}
