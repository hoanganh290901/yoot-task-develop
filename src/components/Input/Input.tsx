import { FC } from "react";
import "./Input.scss";

interface IInput {
  label?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  id?: string;
  name?: string;
  error?: string | boolean;
  type?: string;
  readonly?: boolean;
}
export const Input: FC<IInput> = ({
  label,
  placeholder,
  value,
  onChange,
  id,
  name,
  error,
  type,
  readonly
}) => {
  return (
    

    <>
      <label className="Label" htmlFor={id}>
        {label}
      </label>
      {/* <br></br> dong nay khong can thiet*/} 

      <input
        
        className="Input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        name={name}
        type={type}
        readOnly={readonly}
      />
      <div className="Err" style={{ opacity: error ? 1 : 0 }}>
        {error}
      </div>
    </>
  );
};
