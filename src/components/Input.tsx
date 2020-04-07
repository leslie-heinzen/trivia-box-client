import React from "react";
import { InputProps } from "../types/props";

export const Input: React.FC<InputProps> = ({ className, id, value, labelText, onChange }) => {
  return <>
    <div className={className}>
      <label htmlFor={id}>{labelText}</label>
      <input id={id} value={value} onChange={onChange}></input>
    </div>
  </>
};
