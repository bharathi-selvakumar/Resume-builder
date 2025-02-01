import React, { useState } from "react";
// import axios from 'axios';
// import { motion } from 'framer-motion';
import {
    Container,
    Box,
    Typography,
    TextField,
    Paper,
} from '@mui/material';

export const Summary = () => {

    const [summary, setSummary] = useState("");
    return (
        <>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Box
                    component={Paper}
                    elevation={3}
                    sx={{ p: 4, maxWidth: 600, mx: "auto", mt: 5 }}
                >
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        Write Your Summary
                    </Typography>

                    {/* Summary Input Field */}
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        placeholder="Write a brief summary about yourself..."
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        inputProps={{ maxLength: 300 }}
                    />

                    {/* Character Count */}
                    <Typography variant="body2" color="gray" mt={1}>
                        {summary.length} / 300 characters
                    </Typography>
                </Box>
            </Container>
        </>
    )
}