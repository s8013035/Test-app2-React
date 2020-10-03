import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];

const COLOR = ['primary', 'blue', 'red', 'green'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor
}) => {
  // to check if a button on the pages has a buttonstyle. if so, buttonStyle, if not, btn--primary
  const checkButtonStyle = STYLES.includes(buttonStyle) ? 
  buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonStyle) ? 
  buttonSize : SIZES[0];

  const checkButtonColor = COLOR.includes(buttonStyle) ? 
  buttonColor : null;

  return (
  <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} 
  onClick={onClick} type={type}
  >{children}</button>
  )
}