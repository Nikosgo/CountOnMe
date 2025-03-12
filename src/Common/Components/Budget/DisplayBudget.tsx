import React from "react";
import { Button } from "antd";
import { IoGameControllerOutline, IoFastFoodOutline } from "react-icons/io5";
import "./budgetStyle.css";

/* Hardcoded for now to replace with dynamic data */
const budgetData = [
  {
    category: "Games",
    amount: 73.5,
    icon: <IoGameControllerOutline />,
    warning: true,
  },
  {
    category: "Games",
    amount: 73.5,
    icon: <IoGameControllerOutline />,
    warning: true,
  },
  {
    category: "Food",
    amount: 193.53,
    icon: <IoFastFoodOutline />,
    warning: false,
  },
  {
    category: "Food",
    amount: 193.53,
    icon: <IoFastFoodOutline />,
    warning: false,
  },
];

const DisplayBudget: React.FC = () => {
  return (
    <div className="budget-card">
      <h2 className="budget-title">Budget</h2>

      {budgetData.map((item, index) => (
        <div key={index} className="budget-item">
        
          {/* First row: Icon, category, amount on the same line */}
          <div className="budget-item-row">
            <span className="budget-icon">{item.icon}</span>
            <span
              className={`budget-category ${
                item.warning ? "warning" : "safe"
              }`}
            >
              {item.category}
            </span>
            <span
              className={`budget-amount ${
                item.warning ? "warning-amount" : "safe-amount"
              }`}
            >
              {item.amount.toFixed(2)}
            </span>
          </div>

          {/* Second row: Warning message (only if warning is true) */}
          {item.warning && (
            <div className="budget-warning">
              ❗ You will <strong>exceed</strong> your budget if you continue to
              spend $12.45 a day!
            </div>
          )}
        </div>
      ))}

      <Button type="primary" className="add-budget-btn">
        + Add budget
      </Button>
    </div>
  );
};

export default DisplayBudget;
