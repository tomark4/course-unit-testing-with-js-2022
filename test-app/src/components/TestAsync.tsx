import { useCallback, useEffect, useState } from "react";

const TestAsync = () => {
  const [total, setTotal] = useState(0);

  const sum = useCallback((a: number, b: number) => {
    setTotal(a+b)
  },[]) 

  useEffect(() => {
    sum(2,2)
  }, [sum]);

  return (
    <div>
      <h1>TestAsync</h1>
      <h1>{total}</h1>
    </div>
  );
};

export default TestAsync;
