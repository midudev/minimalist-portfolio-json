import Pencil from "@/icons/Pencil";
import { useState, type InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  readOnly?: boolean;
}

const TextField = ({ children, readOnly, ...props }: TextFieldProps) => {
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      {isClicked ? (
        <div onClick={() => !readOnly && handleClick()}>
          {children}
          {!readOnly && <Pencil />}
        </div>
      ) : (
        <input
          {...props}
          onFocus={(event) => {
            (event.target as HTMLInputElement).style.borderColor = "black";
          }}
          value={props.value}
          onBlur={handleClick}
        />
      )}

      <style>
        {`
          h1 {
            font-size: 2rem;
          }

          input {
            border: 1px solid transparent;
            padding: 10px;
          }

          div {
            display: flex;
          }
        `}
      </style>
    </>
  );
};

export default TextField;
