import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';


export const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 16,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(95deg, rgb(33, 242, 193) 0%, rgb(64, 118, 233) 50%, rgb(35, 76, 138) 100%)',
      transition: 'background-image 1s ease-in', // Smooth animation
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(95deg, rgb(33, 242, 127) 0%, rgb(64, 118, 233) 50%, rgb(21, 68, 138)  100%)',
      transition: 'background-image 1s ease-in', // Smooth animation
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
    transition: 'background-color 1s ease-in-out', // Animation for initial state
  },
}));

// Custom Step Icon
export const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 30,
  height: 30,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient(136deg,rgb(33, 169, 242) 0%, rgb(64, 118, 233) 50%, rgb(21, 68, 138) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    transition: 'background-image 1s ease-in-out',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient(136deg, rgb(63, 198, 142) 0%, rgb(26, 183, 223) 50%, rgb(62, 35, 138) 100%)',
    transition: 'background-image 1s ease-in-out',
  }),
}));