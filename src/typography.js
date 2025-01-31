import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    // fontFamily: '"Times New Roman", Times, serif', 
    fontFamily: 'Inter ,sans-serif' ,
    button: {
      fontWeight: "bold",
      textTransform: "none",
    },

  },
 
});

export default theme;



// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   typography: {
//     fontFamily: "Inter, sans-serif",
//     h1: {
//       fontWeight: 700,
//       fontSize: "2.5rem",
      
//     },
//     h2: {
//       fontWeight: 600,
//       fontSize: "2rem",
//       fontFamily:"Work Sans"
//     },
//     h3: {
//       fontWeight: 500,
//       fontSize: "1.75rem",
//     },
//     h4: {
//       fontWeight: 500,
//       fontSize: "1.5rem",
//       lineHeight: 1.4,
//     },
//     h5: {
//       fontWeight: 400,
//       fontSize: "1.25rem",
//       lineHeight: 1.4,
//     },
//     h6: {
//       fontWeight: 400,
//       fontSize: "1rem",
//       lineHeight: 1.4,
//     },
//     body1: {
//       fontSize: "1rem",
//       lineHeight: 1.5,
//     },
//     body2: {
//       fontSize: "0.875rem",
//       lineHeight: 1.4,
//     },
//     button: {
//       fontWeight: "bold",
//       textTransform: "none",
//     },
//   },
//   palette: {
//     primary: {
//       main: "#1976d2", // Blue
//       light: "#63a4ff",
//       dark: "#004ba0",
//     },
//     secondary: {
//       main: "#dc004e", // Pink
//       light: "#ff5c8d",
//       dark: "#9a0036",
//     },
//     error: {
//       main: "#f44336",
//     },
//     warning: {
//       main: "#ffa726",
//     },
//     info: {
//       main: "#29b6f6",
//     },
//     success: {
//       main: "#66bb6a",
//     },
//     background: {
//       default: "#f5f5f5", // Light gray
//       paper: "#ffffff", // White background for cards and modals
//     },
//     text: {
//       primary: "#000000",
//       secondary: "#5f6368",
//     },
//   },
//   spacing: 8, // Default spacing unit (1 unit = 8px)
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: "8px", // Rounded corners
//           textTransform: "none", // Disable all-caps
//           fontWeight: "bold",
//           padding: "10px 20px",
//         },
//         containedPrimary: {
//           color: "#fff", // White text for primary buttons
//         },
//         outlinedPrimary: {
//           borderColor: "#1976d2",
//           color: "#1976d2",
//           "&:hover": {
//             borderColor: "#004ba0",
//             backgroundColor: "#f3f9ff",
//           },
//         },
//       },
//     },
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           marginBottom: "16px",
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           borderRadius: "16px",
//           boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//         },
//       },
//     },
//     MuiAppBar: {
//       styleOverrides: {
//         root: {
//           backgroundColor: "#1976d2",
//           boxShadow: "none",
//         },
//       },
//     },
//     MuiInputLabel: {
//       styleOverrides: {
//         root: {
//           fontSize: "1rem",
//           color: "#5f6368",
//         },
//       },
//     },
//     MuiPaper: {
//       styleOverrides: {
//         root: {
//           padding: "16px",
//           borderRadius: "12px",
//         },
//       },
//     },
//     MuiTooltip: {
//       styleOverrides: {
//         tooltip: {
//           fontSize: "0.875rem",
//           backgroundColor: "#000",
//           color: "#fff",
//         },
//       },
//     },
//   },
// });

// export default theme;
