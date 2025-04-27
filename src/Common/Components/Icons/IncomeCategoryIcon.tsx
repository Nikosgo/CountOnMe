import React from 'react';
import { TbPigMoney } from "react-icons/tb";
import { RiStockFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";

import '../../../Common/Common.css';


type Props = {
  category: string;
};

const IncomeCategoryIcon: React.FC<Props> = ({ category }) => {
  let IconComponent;
  let label = '';

  switch (category.toLowerCase()) {
    case 'salary':
      IconComponent = FaMoneyBillWave;
      break;
    case 'savings':
      IconComponent = TbPigMoney;
      break;
    case 'investment':
      IconComponent = RiStockFill;
      break;
    default:
      IconComponent = FaStar; // Fallback icon
      break;
  }

  return (
    <span>
        <IconComponent size="1.8em" title={label} className="popupModal-icon-style"/>
        <span className="popupModal-icon-label-style">{category.toUpperCase()}</span>
    </span>
  );
};

export default IncomeCategoryIcon;