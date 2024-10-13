import React, { PureComponent } from "react";
import { Form } from "react-bootstrap";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    date: "2022-01-01",
    balance: 4000,
  },
  {
    date: "2022-01-02",
    balance: 3000,
  },
  {
    date: "2022-01-03",
    balance: 2000,
  },
  {
    date: "2022-01-04",
    balance: 2780,
  },
  {
    date: "2022-01-05",
    balance: 1890,
  },
  {
    date: "2022-01-06",
    balance: 2390,
  },
  {
    date: "2022-01-07",
    balance: 3490,
  },
];

export default class BalanceAreaChart extends PureComponent {
  render() {
    return (
      <>
        <div className="p-3 col-3 ms-auto" style={{minWidth: 60 + 'px'}}>
          <Form.Select
            size="sm"
            className="fw-medium rounded-4"
            aria-label="Period"
          >
            <option value="30">30 дней</option>
            <option value="90">90 дней</option>
            <option value="180">180 дней</option>
          </Form.Select>
        </div>
        <div style={{ width: "100%", height: "400px" }}>
          <ResponsiveContainer>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis dataKey="balance" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="balance"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </>
    );
  }
}
