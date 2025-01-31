import React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { ColorlibConnector, ColorlibStepIconRoot } from './stepperDesign';
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { MdAssignmentAdd } from "react-icons/md";
import { BsFillExplicitFill } from "react-icons/bs";
import { RiUserSettingsFill } from "react-icons/ri";
import { MdNoteAlt } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
// import { useStepper } from './useStepper';


function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <MdOutlineDriveFileRenameOutline />,
        2: <BsFillExplicitFill />,
        3: <FaGraduationCap />,
        4: <RiUserSettingsFill />,
        5: <MdNoteAlt />,
        6: <MdAssignmentAdd />,
        7: <FaHandshake />
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    completed: PropTypes.bool,
    icon: PropTypes.node,
};

const steps = ['Header', 'Experience', 'Education', 'Skill', 'Summary', 'Additional Details', 'Finalize'];

export const MuiStepper = ({ activeStep, handleNext, handleBack }) => {
    // const { activeStep ,handleBack,handleNext} = useStepper();

    return (
        <Stack sx={{ width: '100%' , display: { xs: 'none', sm: 'none', md: 'block' },}} spacing={4} mt="3rem" >
            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                {steps.map((label, index) => (
                    <Step key={label} completed={index < activeStep}>
                        <StepLabel StepIconComponent={ColorlibStepIcon} sx={{
                            '& .MuiStepLabel-label': {
                                fontFamily: 'Times New Roman, serif',
                            },
                        }}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Stack>
    );
};
