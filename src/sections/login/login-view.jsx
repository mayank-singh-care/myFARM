import { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useRouter } from 'src/routes/hooks';

import { FirstForm } from 'src/sections/login';
import { SecondForm } from 'src/sections/login';
import { ThirdForm } from 'src/sections/login';
import { FourthForm } from 'src/sections/login';
import { FifthForm } from 'src/sections/login';

// ----------------------------------------------------------------------

export default function LoginView() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    landTitle: '',
    location: '',
    area: '',
    description: '',
    cropType: '',
    variety: '',
    plantingDate: '',
    harvestDate: '',
    acreage: '',
    yield: '',
    cattleType: '',
    noOfHead: '',
    age: '',
    productionMetrics: '',
    equipmentType: '',
    modal: '',
    snNumber: '',
    year: '',
    condition: '',
    usageHistory: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard');
  };

  return (
    <Grid container style={{ overflow: 'auto' }} component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        sx={{ height: 'auto' }}
        component={Paper}
        elevation={6}
        square
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <div>
            {step === 1 && (
              <FirstForm
                formData={formData}
                handleChange={handleChange}
                handleNextStep={handleNextStep}
              />
            )}
            {step === 2 && (
              <SecondForm
                formData={formData}
                handleChange={handleChange}
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
              />
            )}
            {step === 3 && (
              <ThirdForm
                formData={formData}
                handleChange={handleChange}
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
              />
            )}
            {step === 4 && (
              <FourthForm
                formData={formData}
                handleChange={handleChange}
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
              />
            )}
            {step === 5 && (
              <FifthForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handlePrevStep={handlePrevStep}
              />
            )}
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}
