import React, { useState } from "react";
// import axios from 'axios';
// import { motion } from 'framer-motion';
import {
    Box,
    Typography,
    TextField,
} from '@mui/material';
import Data from "./Pdf_ResumeTemplet/Data";
import {useFormContext } from "./StateMaintain/data_useState"

export const Header = () => {
   
    // const [header, setHeader] = useState({
    //     firstname: "",
    //     lastname: "",
    //     city: "",
    //     country: "",
    //     pincode: "",
    //     email: "",
    //     experience: "",
    // });

const{header ,setHeader }=useFormContext();
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };
    const validatePinCode = (pinCode) => {
        const pinCodeRegex = /^[0-9]{6}$/;
        return pinCodeRegex.test(pinCode);
    };

    const [errors, setErrors] = useState({
        firstname: "",
        lastname: "",
        pincode: "",
        email: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setHeader((prev) => ({
            ...prev,
            [id]: value,
        }));

        if (id === "email") {
            const isValidEmail = validateEmail(value);
            setErrors((prev) => ({
                ...prev,
                email: isValidEmail ? "" : "Invalid email address",
            }));
        }

        if (id === "pincode") {
            const isValidPinCode = validatePinCode(value);
            setErrors((prev) => ({
                ...prev,
                pincode: isValidPinCode ? "" : "Pin Code must be exactly 6 digits",
            }));
        }
    };

    const textFieldConfigs = [
        {
            id: "firstname", label: "First Name", variant: "filled", placeholder: "(Eg:Jack)", sx: {
                m: 1, width: { lg: "22.5rem", md: "22.5rem", xs: "100%", sm: "100%" },
                height: "3.0rem",
                '& .MuiInputBase-root': {
                    height: "3.0rem",
                }
            },
        },
        {
            id: "lastname", label: "Last Name", variant: "filled", placeholder: "(Eg:Thompson)", sx: {
                m: 1, width: { lg: "20rem", md: "20rem", xs: "100%", sm: "100%" },
                height: "3.0rem",
                '& .MuiInputBase-root': {
                    height: "3.0rem",
                }
            },
        },
        {
            id: "city", label: "City", variant: "filled", sx: {
                m: 1, width: { lg: "14rem", md: "10rem", xs: "100%", sm: "100%" }, height: "3.0rem",
                '& .MuiInputBase-root': {
                    height: "3.0rem",
                }
            },
        },
        {
            id: "country", label: "Country", variant: "filled", sx: {
                m: 1, width: { lg: "13.5rem", md: "10rem", xs: "100%", sm: "100%" }, height: "3.0rem",
                '& .MuiInputBase-root': {
                    height: "3.0rem",
                }
            }
        },
        {
            id: "pincode", label: "Pin Code", variant: "filled", sx: {
                width: { lg: "14rem", md: "10rem", xs: "100%", sm: "100%" },
                m: 1, height: "3.0rem",
                '& .MuiInputBase-root': {
                    height: "3.0rem",
                }
            },

        },
        {
            id: "email", label: "Email ID ", variant: "filled", placeholder: "(Eg:JackThompson@gmail.com)", sx: {
                m: 1, width: "97%", height: "3.0rem",
                '& .MuiInputBase-root': {
                    height: "3.0rem",
                }
            }
        },

    ];


    const renderTextFields = () => {
        return textFieldConfigs.map((config) => (
            <TextField
                key={config.id}
                id={config.id}
                label={config.label}
                variant={config.variant}
                value={header[config.id]}
                onChange={handleChange}
                sx={{
                    ...config.sx, transition: "transform 0.3s ease-in-out",
                    '&:hover': {
                        transform: 'scale(1.05)',
                    }
                }}
                placeholder={config.placeholder}
                error={!!errors[config.id]}
                helperText={errors[config.id]}
            />
        ));
    };



    return (
        <>
            <Box>
                <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "10px", ml: "10px" }}>
                    Let’s start with your header</Typography>
                <Typography sx={{ fontWeight: "bold", marginBottom: "10px", ml: "10px" }}> Include your full name and at least one way for employers to reach you.</Typography>

                <Box component="form"
                    display="flex"
                    flexWrap="wrap"
                    maxWidth="716px"
                    noValidate
                    autoComplete="off"
                    justifyContent="center"
                >

                    {renderTextFields()}
                </Box>
            </Box>
        </>
    )
}

