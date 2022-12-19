import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import logo from '../images/Home_Depot_Logo.png'
import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <AppBar position="sticky" sx={{ backgroundColor: "#EE7125", zIndex: "2", marginBottom: "32px" }}>
            <Container maxWidth={false}>
                <Link to='/'>
                    <img src={logo} width='100px' height='100px' />
                </Link>
            </Container>
        </AppBar>
    );
}
export default NavBar;