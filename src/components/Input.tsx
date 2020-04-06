import React from "react";

interface Props {
  className?: string,
  id: string,
  value: string,
  labelText: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<Props> = ({ className, id, value, labelText, onChange }) => {
  return <>
    <div className={className}>
      <label htmlFor={id}>{labelText}</label>
      <input id={id} value={value} onChange={onChange}></input>
    </div>
  </>
};
