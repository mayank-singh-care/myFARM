import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function SecondForm ({formData, handleChange, handleNextStep, handlePrevStep}) {
    return (
        <Box component="form" style={{overflow: "scroll"}} noValidate sx={{ mt: 1 }}>
            <h2>Land Details</h2>
            <TextField
                margin="normal"
                required
                fullWidth
                id="landTitle"
                label="Land Title"
                name="landTitle"
                autoComplete="landTitle"
                autoFocus
                value={formData.landTitle}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="location"
                label="Location"
                name="location"
                autoComplete="location"
                autoFocus
                value={formData.location}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="area"
                label="Size/Area"
                name="area"
                autoComplete="area"
                autoFocus
                value={formData.area}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                autoComplete="description"
                autoFocus
                value={formData.description}
                onChange={handleChange}
            />
            <Box style={{display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "2rem"}}>
                <Button variant="contained" onClick={handlePrevStep}>Back</Button>
                <Button variant="contained" onClick={handleNextStep}>Next</Button>
            </Box>
        </Box>
    );
};
