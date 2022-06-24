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
const Props: React.FunctionComponent<IProps> = ({
  name,
  label,
  description = "Desc",
  onSmthHappen,
}) => {
  return (
    <>
      <h1>
        React Typscript Component - {name} - {description}
      </h1>
      {onSmthHappen(name)}
    </>
  );
};

export default Props;
