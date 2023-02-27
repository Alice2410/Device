import React, { useState, useCallback } from "react";

const useFormField = (initialValue: string = '') => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('target value:', e.target.value);
    
    setValue(e.target.value)}, []);

  return { value, onChange };
}

export default useFormField;