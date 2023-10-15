import { createContext } from "react";

const ErrorContext = createContext({
  isValidAllInputs: false,
});

export default ErrorContext;
