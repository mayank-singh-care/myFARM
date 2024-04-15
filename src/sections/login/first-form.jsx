import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function FirstForm({ formData, handleChange, handleNextStep }) {
  return (
    <Box component="form" style={{ overflow: 'scroll' }} noValidate sx={{ mt: 1 }}>
      <h2>Personal Details</h2>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        autoComplete="name"
        autoFocus
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="phone"
        label="Phone Number"
        name="phone"
        autoComplete="phone"
        autoFocus
        value={formData.phone}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="address"
        label="Address"
        name="address"
        autoComplete="address"
        autoFocus
        value={formData.address}
        onChange={handleChange}
      />
      <Button onClick={handleNextStep} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Next
      </Button>
    </Box>
  );
}
