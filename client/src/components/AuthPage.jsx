import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link,useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import {Container} from "react-bootstrap"
import { useState } from 'react';

export default function AuthPage() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  let navigate = useNavigate();
  const loginHandle = () => {
    if(usernameInput === "Sinyoy" && passwordInput === "Li"){
      navigate('/file')
    }
  }
  return (
      <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: "#003049"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{textDecoration: "none", color: "white"}}>
            Social Network
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <Container fluid style={{height: "80vh", backgroundImage: "url('https://i.pinimg.com/originals/ef/7f/b1/ef7fb1b37078b6a2aef8e40710446bfa.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat"}} className='justify-content-center text-center align-items-center'>
    <div className="text-center justify-content-center d-flex flex-column pt-5" style={{width: "100%"}}>
    Register on our site!
    <TextField id="outlined-basic" label="Username" variant="outlined" className="mt-3" value={usernameInput} onChange={(e) => setUsernameInput(e.target.value)}/>
    <TextField id="outlined-basic" label="Password" variant="outlined" className="my-3" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)}/>
    {/* <Link to="/file"> */}
    <Button variant="contained" onClick={loginHandle}>Login</Button>
    {/* </Link> */}
    <h6 className='pt-4'>
    *Username: Sinyoy
    </h6>
    <h6>
    *Password: Li

    </h6>

    </div>
    </Container>
    <Container fluid style={{backgroundColor: "#003049", height: "15vh"}}>

    </Container>
    </>
  );
}
