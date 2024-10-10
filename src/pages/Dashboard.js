import Balance from "../components/Balance";
import Profit from "../components/Profit";
import Expenses from "../components/Expenses";
import PieExpenses from "../components/PieExpenses";

export default function Dashboard() {
  return (
    <>
      <div className="d-flex gap-3 mt-5">
        <div className="d-flex flex-column col-3 gap-3">
          <Balance balance={120500} />
          <div className="border border-secondary-subtle rounded-4 shadow-sm">
            <Profit />
            <span className="d-flex justify-content-center">
              <hr className="col-10" />
            </span>
            <Expenses />
          </div>
        </div>
        <div className="col-9 border border-secondary-subtle rounded-4 shadow-sm">
          <div className="col">
            <PieExpenses />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}
