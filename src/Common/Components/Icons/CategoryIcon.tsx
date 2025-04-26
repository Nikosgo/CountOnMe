import React from 'react';
import { MdOutlineLocalCafe } from 'react-icons/md';
import { FaShoppingBag } from 'react-icons/fa';
import { IoFastFoodOutline, IoGameControllerOutline, IoTrainOutline } from 'react-icons/io5';
import { FaHouse } from "react-icons/fa6";
import '../../../Common/Common.css';


type Props = {
  category: string;
};

const CategoryIcon: React.FC<Props> = ({ category }) => {
  let IconComponent;
  let label = '';

  switch (category.toLowerCase()) {
    case 'food':
      IconComponent = IoFastFoodOutline;
      label = 'Food';
      break;
    case 'cafe':
      IconComponent = MdOutlineLocalCafe;
      label = 'Cafe';
      break;
    case 'shopping':
      IconComponent = FaShoppingBag;
      label = 'Shopping';
      break;
    case 'transport':
        IconComponent = IoTrainOutline;
        label = 'Transport';
        break;
    case 'play':
        IconComponent = IoGameControllerOutline;
        label = 'Play';
        break;
    case 'life':
        IconComponent = FaHouse;
        label = 'Play';
        break;
    default:
      IconComponent = FaShoppingBag; // Fallback icon
      label = category;
  }

  return (
    <span>
        <IconComponent size="2em" title={label} className="popupModal-icon-style"/>
        <span className="popupModal-icon-label-style">{label}</span>
    </span>
  );
};

export default CategoryIcon;