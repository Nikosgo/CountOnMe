import React from 'react';
import { MdOutlineLocalCafe } from 'react-icons/md';
import { FaShoppingBag } from 'react-icons/fa';
import { IoFastFood, IoGameController, IoTrain } from 'react-icons/io5';
import { FaHouse } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

import '../../../Common/Common.css';


type Props = {
  category: string;
};

const ExpenseCategoryIcon: React.FC<Props> = ({ category }) => {
  let IconComponent;
  let label = '';

  switch (category.toLowerCase()) {
    case 'food':
        IconComponent = IoFastFood;
        break;
    case 'drinks':
        IconComponent = MdOutlineLocalCafe;
        break;
    case 'shopping':
        IconComponent = FaShoppingBag;
        break;
    case 'transport':
        IconComponent = IoTrain;
        break;
    case 'play':
        IconComponent = IoGameController;
        break;
    case 'life':
        IconComponent = FaHouse;
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

export default ExpenseCategoryIcon;