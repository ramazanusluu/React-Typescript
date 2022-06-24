import React from "react";
// import React, {FC, FunctionComponent} from "react";
//FC veya FunctionComponent ifadesini burda import ettiğimizde React.FunctionComponent şeklinde yazamamıza gerek kalmaz

interface IProps {
  name: string;
  label?: string;
  description?: string;
  onSmthHappen: (name: string) => void;
}
//React.FunctionComponent yerine FC'de kullanılabilir
const Events: React.FunctionComponent<IProps> = ({
  name,
  description = "Desc",
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        // event.target.value
    }
  return (
    <>
      <h1>
        React Typscript Component - {name} - {description}
      </h1>
      <input type="text" onChange={handleChange} />
    </>
  );
};

export default Events;
