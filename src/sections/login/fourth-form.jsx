import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function FourthForm ({formData, handleChange, handleNextStep, handlePrevStep}) {
    return (
        <Box component="form" style={{overflow: "scroll"}} noValidate sx={{ mt: 1 }}>
            <h2>Livestock Details</h2>
            <TextField
                margin="normal"
                required
                fullWidth
                id="cattleType"
                label="Cattle Type"
                name="cattleType"
                autoComplete="cattleType"
                autoFocus
                value={formData.cattleType}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="noOfHead"
                label="No. Of Head"
                name="noOfHead"
                autoComplete="noOfHead"
                autoFocus
                value={formData.noOfHead}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                autoComplete="age"
                autoFocus
                value={formData.age}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="productionMetrics"
                label="Production Metrics"
                name="productionMetrics"
                autoComplete="productionMetrics"
                autoFocus
                value={formData.productionMetrics}
                onChange={handleChange}
            />
            <Box style={{display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "2rem"}}>
                <Button variant="contained" onClick={handlePrevStep}>Back</Button>
                <Button variant="contained" onClick={handleNextStep}>Next</Button>
            </Box>
        </Box>
    );
};
