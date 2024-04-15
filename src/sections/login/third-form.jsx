import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function ThirdForm ({formData, handleChange, handleNextStep, handlePrevStep}) {
    return (
        <Box component="form" style={{overflow: "scroll"}} noValidate sx={{ mt: 1 }}>
            <h2>Crop Details</h2>
            <TextField
                margin="normal"
                required
                fullWidth
                id="cropType"
                label="Crop Type"
                name="cropType"
                autoComplete="cropType"
                autoFocus
                value={formData.cropType}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="variety"
                label="Variety"
                name="variety"
                autoComplete="variety"
                autoFocus
                value={formData.variety}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="plantingDate"
                label="Planting Date"
                name="plantingDate"
                autoComplete="plantingDate"
                autoFocus
                value={formData.plantingDate}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="harvestDate"
                label="Harvest Date"
                name="harvestDate"
                autoComplete="harvestDate"
                autoFocus
                value={formData.harvestDate}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="acreage"
                label="Acreage"
                name="acreage"
                autoComplete="acreage"
                autoFocus
                value={formData.acreage}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="yield"
                label="Yield"
                name="yield"
                autoComplete="yield"
                autoFocus
                value={formData.noOfHead}
                onChange={handleChange}
            />
            <Box style={{display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "2rem"}}>
                <Button variant="contained" onClick={handlePrevStep}>Back</Button>
                <Button variant="contained" onClick={handleNextStep}>Next</Button>
            </Box>
        </Box>
    );
};