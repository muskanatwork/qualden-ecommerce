import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, IconButton } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
function Nav() {
    return (
        <div className='nav-bar'>
            <AppBar position="static">
                <Toolbar>
                    <Button color='inherit'>
                        logo
                    </Button>

                    <IconButton>
                    </IconButton>
                    <Typography variant="h6" component='Div'
                        sx={{
                            flexGrow: 1,
                        }} >
                    </Typography>
                    <Box>
                        <Button color='inherit' >
                            Home
                        </Button>

                        <Button color='inherit'>About us</Button>
                        <Button color='inherit'>products</Button>
                        <Button color='inherit'>Contact us</Button>

                    </Box>
                </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default Nav;
