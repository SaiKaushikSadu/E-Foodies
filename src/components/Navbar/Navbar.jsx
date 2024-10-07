import { AppBar, Badge, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const navigate = useNavigate();

    const cartItems = useSelector((state) => state.cart.items);
    // console.log(cartItems)

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <>

            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            E-Foodies
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
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
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {/* {pages.map((page) => ( */}
                                    <MenuItem onClick={()=>navigate("/")}>
                                        <Typography sx={{ textAlign: 'center' }}>Home</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={()=>navigate("/products")}>
                                        <Typography sx={{ textAlign: 'center' }}>Products</Typography>
                                    </MenuItem>
                                {/* ))} */}
                            </Menu>
                        </Box>
                        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                            onClick={() => navigate("/")}
                        >
                            E-Foodies
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {/* {pages.map((page) => ( */}
                            <Button
                                onClick={() => navigate("/")}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Home
                            </Button>
                            <Button
                                onClick={() => navigate("/products")}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Products
                            </Button>
                            {/* ))} */}
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open cart">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Badge badgeContent={cartItems.length}
                                        sx={{
                                            '& .MuiBadge-badge': {
                                                backgroundColor: 'red', // Set badge color to red
                                                color: 'white', // Set text color inside the badge
                                            },
                                        }}
                                    > {/* Replace 4 with the static number of items */}
                                        <ShoppingCartIcon style={{color:'black'}} />
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {cartItems.length > 0 ?
                                    (
                                        <>
                                            {cartItems.map((item, index) => (
                                                <MenuItem key={index} onClick={handleCloseUserMenu}>
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'space-between',
                                                            width: '100%',
                                                        }}
                                                        onClick={() => navigate(`/product/${item.id}`, { state: { product: item } })}
                                                    >
                                                        {/* Product Image */}
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            style={{ width: '50px', height: '50px', marginRight: '10px' }}
                                                        />
                                                        {/* Product Name */}
                                                        <Typography sx={{ flexGrow: 1, textAlign: 'left', marginRight: '10px' }}>
                                                            {item.name}
                                                        </Typography>
                                                        {/* Product Quantity */}
                                                        <Typography sx={{ textAlign: 'right', marginRight: '10px' }}>
                                                            Qty: {item.quantity}
                                                        </Typography>
                                                    </Box>
                                                </MenuItem>
                                            ))}
                                            <MenuItem onClick={() => navigate('/checkout')}>
                                                <Box sx={{ textAlign: 'center', width: '100%' }}>
                                                    <Button variant="contained" color="primary" fullWidth>
                                                        View Cart
                                                    </Button>
                                                </Box>
                                            </MenuItem>
                                        </>
                                    )
                                    :
                                    (
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <Box sx={{ textAlign: 'center', width: '100%' }}>
                                                <img
                                                    src="/assets/emptyCart.png"
                                                    alt="Empty Cart"
                                                    style={{ width: '100px', height: '100px' }}
                                                />
                                            </Box>
                                        </MenuItem>
                                    )}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

        </>
    )
}

export default Navbar