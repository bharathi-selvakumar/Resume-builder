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


    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');
    const [skillLevel, setSkillLevel] = useState('Intermediate');

    return (
        <FormContext.Provider value={{ header, setHeader ,skills,newSkill,skillLevel,setNewSkill,setSkills,setSkillLevel }}>
            {children}
        </FormContext.Provider>
    );
};


export const useFormContext = () => useContext(FormContext);
