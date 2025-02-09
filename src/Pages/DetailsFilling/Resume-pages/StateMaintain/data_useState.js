import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {

    const [header, setHeader] = useState({
        firstname: "",
        lastname: "",
        city: "",
        country: "",
        pincode: "",
        email: "",
        experience: "",
    });


    return (
        <FormContext.Provider value={{ header, setHeader }}>
            {children}
        </FormContext.Provider>
    );
};


export const useFormContext = () => useContext(FormContext);
