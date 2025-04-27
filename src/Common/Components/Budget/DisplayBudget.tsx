import React, { useState } from "react";
import { Button, ConfigProvider } from "antd";
import { IoGameControllerOutline, IoFastFoodOutline } from "react-icons/io5";
import "./budgetStyle.css";
import PopUpModal from "../PopUpModal/PopUpModal.tsx";

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

// Extract the budgetTheme from PopUpModal
const budgetTheme = {
  token: {
    fontFamily: 'Arial',
    colorTextBase: '#3891a6',
  },
  components: {
    Modal: {
      titleColor: '#3891a6',
      titleFontSize: 30,
    },
    DatePicker: {
      activeBorderColor: 'rgb(56, 145, 166)',
      activeShadow: 'rgb(56, 145, 166)',
    },
    Select: {
      activeBorderColor: 'rgb(56, 145, 166)',
      optionFontSize: 15,
      optionSelectedFontWeight: 600,
      optionSelectedBg: 'rgb(56, 145, 166, 0.3)',
    },
    InputNumber: {
      handleFontSize: 10,
      inputFontSize: 18,
      paddingInline: 10,
    },
    Input: {
      activeShadow: 'rgb(56, 145, 166, 0)'
    },
    Button: {
      colorPrimary: '#3891a6',
      colorPrimaryHover: '#2d7a8c',
      colorPrimaryActive: '#1f6a7c',
    }
  }
};

const DisplayBudget: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="budget-card">
      <h2 className="budget-title">Budget</h2>

      {budgetData.map((item, index) => (
        <div key={index} className="budget-item">
          {/* First row: Icon, category, amount on the same line */}
          <div className="budget-item-row">
            <span className="budget-icon">{item.icon}</span>
            <span className={`budget-category ${item.warning ? "warning" : "safe"}`}>
              {item.category}
            </span>
            <span className={`budget-amount ${item.warning ? "warning-amount" : "safe-amount"}`}>
              {item.amount.toFixed(2)}
            </span>
          </div>

          {/* Second row: Warning message (only if warning is true) */}
          {item.warning && (
            <div className="budget-warning">
              ❗ You will <strong>exceed</strong> your budget if you continue to spend $12.45 a day!
            </div>
          )}
        </div>
      ))}

      <ConfigProvider theme={budgetTheme}>
        <Button 
          type="primary" 
          onClick={showModal}
          style={{
            letterSpacing: '3px',
            fontWeight: 'bold',
            fontSize: '20px',
            padding: '10px 20px',
            margin: '0 50px',
            backgroundColor: budgetTheme.token.colorTextBase,
            color: '#fff'
          }}
        >
          + Add budget
        </Button>
      </ConfigProvider>

      {/* You can also add the PopUpModal component here */}
      {isModalVisible && (
        <PopUpModal
          title="Budget"
          categories={[
            { value: 'games', label: 'Games' },
            { value: 'food', label: 'Food' },
            // Add other categories as needed
          ]}
          isModalOpen={isModalVisible}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default DisplayBudget;