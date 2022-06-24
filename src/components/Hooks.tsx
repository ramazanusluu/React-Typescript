import React, { useState, useRef } from "react";
// import React, {FC, FunctionComponent} from "react";
//FC veya FunctionComponent ifadesini burda import ettiğimizde React.FunctionComponent şeklinde yazamamıza gerek kalmaz

interface IProps {
  name: string;
  label?: string;
  description?: string;
  onSmthHappen: (name: string) => void;
}

interface IndexNode {
  age: number | string | null;
}

//React.FunctionComponent yerine FC'de kullanılabilir
const Hooks: React.FunctionComponent<IProps> = ({
  name,
  description = "Desc",
}) => {
  //?useState
  //Typescript - Type Inference kullanır.
  //1. yol
  const [count, setCount] = useState<number | string | null | undefined>(500);
  //2.yol
  const [index, setIndex] = useState<IndexNode>({ age: 43 });
  //3. yol
  const [key, setKey] = useState<{ age: number | string }>({ age: 50 });

  //?useRef
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const ButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <h1>
        React Typscript Component - {name} - {description}
        <input type="text" ref={inputRef} />
      </h1>
    </>
  );
};

export default Hooks;
