import { useState } from "react";


export const useStepper = ( ) => {
 
    const totalSteps=7;
    console.log(totalSteps)
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => {
      if (activeStep < totalSteps - 1) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    };  
  
    const handleBack = () => {
      if (activeStep > 0) {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      }
    };
    const NewActiveste =activeStep
    const isBackDisabled = activeStep === 0;
    const isNextDisabled = activeStep === totalSteps - 1;
  
    return { activeStep,handleNext, handleBack,isBackDisabled,isNextDisabled };
  };