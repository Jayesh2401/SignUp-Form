import validator from 'validator';
import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import validations from './validations';
import './App.css';

const theme = createTheme();

function App() {

  const [usernamevalid, setUsernamevalid] = useState(true)
  const [usernames, setUsername] = useState("")
  const [emailvalid, setemailvalid] = useState(true)
  const [emailid, setEmailid] = useState("")
  const [numvalid, setnumvalid] = useState(true)
  const [strongpass, setstrongpass] = useState(true)
  const [confirpass, setconfirmpass] = useState(true)
  const [showPassword, setShowPassword] = useState(false);
  const [showconfPassword, setShowconfPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowconfPassword = () => setShowconfPassword(!showconfPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const [formErrors, setFormErrors] = useState({});

  const [user, setUser] = useState({
    username: "",
    Email: "",
    number: "",
    password: "",
    confir_pass: ""
  })

  const { username, email, number, password, confir_pass } = user;

  


  // const username1 = (e) => {
  //   let text = e.target.value;
  //   let uname = (text.charAt(0).toUpperCase() + text.slice(1).toLowerCase())
  //   // setUsername(uname);
  //   // setUser({"username" : uname})
  //   console.log(uname);
  // }


  // const emails = (e) => {

  //   let email = e.target.value;
  //   setEmailid(email);
  //   if (email.length != 0) {
  //     setemailvalid(validator.isEmail(email));
  //   } else {
  //     setemailvalid(true)
  //   }
  // }

  // const number = (e) => {
  //   let num = e.target.value;
  //   setMobile(num)

  //   if (num.length != 0) {
  //     setnumvalid(num.length == 10);
  //   }
  //   else {
  //     setnumvalid(true)
  //   }
  // }

  // const password = (e) => {

  //   let password = e.target.value;
  //   setpass(password);

  //   if (password.length != 0) {
  //     setstrongpass(validator.isStrongPassword(password));
  //   }
  //   else {
  //     setstrongpass(true)
  //   }

  // }

  // const confirmpass = (e) => {
  //   let conpass = e.target.value;
  //   if (conpass.length != 0) {
  //     setconfirmpass(conpass === pass)
  //   }
  //   else {
  //     setconfirmpass(true)
  //   }
  // }

  // function notshowpass() {
  //   document.getElementById('pass').type = "password"
  //   document.getElementById('pass2').type = "password"
  //   Setshowpass(false)
  // }

  // function showsass() {
  //   Setshowpass(true)
  //   document.getElementById('pass').type = "text"
  //   document.getElementById('pass2').type = "text"

  // }

  function handlesubmit(e) {
    e.preventDefault();
    const { errors, isValid } = validations(user);
    if (isValid) {
      console.log("true");
      console.log(user)
    } else {
      setFormErrors(errors);
    }
    if (
      user.username === "" ||
      user.mobile === "" ||
      user.password === "" ||
      user.Email === ""
    ) {
      return;
    }
    // console.log("user :>> ", user);
    setUser({
      ...user,
      
    });
  }

  const inputchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });

    if (e.target.name == "username") {
      let text = e.target.value;
      let uname = (text.charAt(0).toUpperCase() + text.slice(1).toLowerCase())
      // console.log(uname, "text");
      setUsername(uname)
      // setUser({[e.target.name] : uname})
    }

    

    setFormErrors({
      ...formErrors,
      [e.target.name]: "",
    });
  }

  // function details() {
  //   if (usernames.trim() === "" || pass.trim() === "" || mobile.trim() === "" || emailid.trim() === "") {
  //     alert("all field but be filled")
  //   }
  //   else if ((!emailvalid || !numvalid || !strongpass || !confirpass)) {
  //     alert("please enter valid data")
  //   }
  //   else {
  //     let obj = {
  //       usernames,
  //       emailid,
  //       mobile
  //     }
  //     console.log(obj);
  //   }
  // }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <form component="form" onSubmit={handlesubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>

              <Grid item xs={12} >

                <TextField
                  autoComplete="given-name"
                  required
                  fullWidth
                  value={usernames}
                  // value={user.username.charAt(0).toUpperCase() + user.username.slice(1).toLowerCase()}
                  onChange={(e => inputchange(e))}
                  id="firstName"
                  label="Username"
                  name="username"
                  autoFocus
                />

                {formErrors?.username && <span><span className="error-text">{(formErrors?.username)}</span></span>}
              </Grid>

              <Grid item xs={12} >
                <TextField
                  type='number'
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  required
                  fullWidth
                  id="number"
                  onChange={e => inputchange(e)}
                  label="Phone number"
                  name="number"

                />

                {formErrors.number && <span><span className="error-text">{(formErrors?.number)}</span></span>}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  inputProps={{ inputMode: 'email' }}
                  required
                  fullWidth
                  id="email"
                  onChange={e => inputchange(e)}
                  label="Email"
                  name="Email"
                />


                {formErrors.Email && <span>   <span className="error-text">{formErrors?.Email}</span></span>}
              </Grid>

              <Grid item xs={12} >
                <TextField
                  inputProps={{ inputMode: 'password' }}
                  // variant="outlined"
                  fullWidth
                  required
                  name='password'
                  label='Password'
                  onChange={e => inputchange(e)}
                  type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                  // onChange={someChangeHandler}
                  InputProps={{ // <-- This is where the toggle button is added.
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />


                {formErrors.password && <span>   <span className="error-text">{formErrors?.password}</span></span>}


              </Grid>

              <br />

              <Grid item xs={12}>
                <TextField
                  inputProps={{ inputMode: 'password' }}
                  required
                  fullWidth


                  id="pass2"
                  onChange={e => inputchange(e)}
                  label="Confirm password"
                  name="confir_pass"

                  type={showconfPassword ? "text" : "password"} // <-- This is where the magic happens

                  InputProps={{ // <-- This is where the toggle button is added.
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowconfPassword}
                        >
                          {showconfPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                {formErrors.confir_pass && <span>   <span className="error-text">{formErrors?.confir_pass}</span></span>}

              </Grid>

              <Button
                type="submit"
                fullWidth
                // onClick={details}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>

            </Grid>

          </form>




        </Box>
      </Container>

    </ThemeProvider>
  );
}

export default App;
