import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function FifthForm ({formData, handleChange, handleSubmit, handlePrevStep}) {
    return (
        <Box component="form" style={{overflow: "scroll"}} noValidate sx={{ mt: 1 }}>
            <h2>Machinery Details</h2>
            <TextField
                margin="normal"
                required
                fullWidth
                id="equipmentType"
                label="Equipment Type"
                name="equipmentType"
                autoComplete="equipmentType"
                autoFocus
                value={formData.equipmentType}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="modal"
                label="Make & Modal"
                name="modal"
                autoComplete="modal"
                autoFocus
                value={formData.modal}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="snNumber"
                label="Serial Number"
                name="snNumber"
                autoComplete="snNumber"
                autoFocus
                value={formData.snNumber}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="year"
                label="Year Of Manufacture"
                name="year"
                autoComplete="year"
                autoFocus
                value={formData.year}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="condition"
                label="condition"
                name="condition"
                autoComplete="condition"
                autoFocus
                value={formData.condition}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="usageHistory"
                label="Usage History"
                name="usageHistory"
                autoComplete="usageHistory"
                autoFocus
                value={formData.usageHistory}
                onChange={handleChange}
            />
            <Box style={{display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "2rem"}}>
                <Button variant="contained" onClick={handlePrevStep}>Back</Button>
                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            </Box>            
        </Box>
    );
};