import React from "react";
import 'components/DayListItem.scss'
import classNames from 'classnames';



export default function DayListItem(props) {

function formatSpots (spot) {
  if (spot === 0) {
    return "no spots";
  } else if (spot === 1) {
    return "1 spot remaining"
  }
   else {
    return `${spot} spots remaining`;
  }
}
  
let spotList = classNames("day-list__item", {
    'day-list__item--selected': props.selected,
    'day-list__item--full' :  props.spots===0
  });

  return (
    <li className={spotList} data-testid="day" onClick={() => props.setDay(props.name)} selected={props.selected}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );

}