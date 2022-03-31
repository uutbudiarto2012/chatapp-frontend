import {
  Visibility,
  VisibilityOff
} from '@mui/icons-material';
import { FormControl, Grid, Link, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Button, Stack } from '@mui/material';
import React, { useState } from 'react';

const Auth = () => {

  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container justifyContent="center" alignItems="center" minHeight="100vh">
      <Grid item md={4} px={2}>
        <form action="">
          <TextField
            size='small'
            fullWidth
            required
            label="Email or Username"
          />
          <FormControl size='small' sx={{ my: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button variant="contained" color='primary' fullWidth size="large">
            LOGIN
          </Button>
        </form>
        <Stack mt={1}>
        <Button>Don't have an account?</Button>
        </Stack>
        <Stack mt={4}>
          <Button variant="contained" color='error' fullWidth size="large">
            Google
          </Button>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Auth