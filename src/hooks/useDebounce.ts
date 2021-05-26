import { useEffect, useState } from "react";

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() =>{
      setDebounceValue(value);
    }, delay);

    return() => {
      clearInterval(handler);
    }   
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;