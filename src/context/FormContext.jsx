import { createContext } from "react";

const FormContext = createContext({
    username: '',
    email: '',
    phone: '',
    password: '',
    isValid: false
})

export default FormContext;