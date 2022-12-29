import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import NinaNitzscheIcon from '../../ninanitzschephotography/public/NinaNitzscheIcon.png'
import {Grid} from "@mui/material";
import {Link} from "react-scroll";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const pages = ['AboutMe', 'Kontakt', 'Portfolio'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" className={styles.appbar} id="header">
            <Container className={styles.appbar} maxWidth="xl" >
                <Toolbar disableGutters>
                    <Link
                        activeClass="active"
                        to={"header"}
                        spy={true}
                        smooth={true}
                        duration={1200}
                    >
                    </Link>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Link
                                activeClass="active"
                                to={"header"}
                                spy={true}
                                smooth={true}
                                duration={1200}
                            >
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'Snell Roundhand',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    textAlign: 'left'
                                }}
                            >
                                Nina Nitzsche Photography
                            </Typography>
                            </Link>
                        </Grid>


                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <Grid item xs={2}  display="flex" alignItems="center" marginTop="auto" marginBottom="auto" paddingLeft="1vh">
                            <Image
                                src={NinaNitzscheIcon}
                                alt="Nina Nitzsche Photography"
                                height="50"
                                objectPosition="center"
                            />
                        </Grid>
                            <Grid item xs={8} display={"grid"}   alignItems="center" marginTop="auto" marginBottom="auto">

                            <Link
                                activeClass="active"
                                to={"header"}
                                spy={true}
                                smooth={true}
                                duration={1200}
                            >
                                <Typography
                                    variant="h5"
                                    component="a"
                                    href=""
                                    sx={{
                                        display: { xs: 'flex', md: 'none' },
                                        flexGrow: 1,
                                        color: 'black',
                                        textDecoration: 'none',
                                        fontFamily:'SnellRoundhand',
                                        justifyContent:'center',
                                        textAlign: 'center'
                                    }}
                                >
                                    Nina Nitzsche Photography
                                </Typography>
                            </Link>
                            </Grid>
                            <Grid item xs={2}  display="flex" justifyContent="end" marginTop="auto" marginBottom="auto" paddingRight="1vh">
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                                onClick={handleOpenNavMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            </Grid>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Link
                                            activeClass="active"
                                            to={page}
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                        >
                                            <Typography textAlign="center">{page}</Typography>
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Grid item xs={12} md={6} key={page} paddingTop="16px">
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'black', display: 'block' }}
                                    >
                                        <Link
                                            activeClass="active"
                                            to={page}
                                            spy={true}
                                            smooth={true}
                                            duration={1200}
                                        >
                                            <Typography textAlign="center">{page}</Typography>
                                        </Link>
                                    </Button>
                                </Grid>

                            ))}
                        </Box>
                    </Grid>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;