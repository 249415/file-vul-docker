import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import {Container} from "react-bootstrap"

export default function MainPage() {
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
          <Link to="/auth">
          <Button style={{textDecoration : "none", color: "white"}}>Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
    <Container className="text-center" fluid style={{height: "80vh", backgroundImage: "url('https://i.pinimg.com/originals/ef/7f/b1/ef7fb1b37078b6a2aef8e40710446bfa.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
    <h1 style={{paddingTop: "200px"}}>The safest social network the world has to offer!</h1>
    <img width="100" style={{paddingTop: "70px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="social network logo"></img>
    </Container>
    <Container fluid style={{backgroundColor: "#003049", height: "15vh"}}>

    </Container>
    </>
  );
}
