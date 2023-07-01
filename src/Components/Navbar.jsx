import nimutech from '../Assets/nimutech100.jpg'
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css'

const Navbar = () => {
    return (<>

<AppBar position='static'>

<Toolbar className='bc'>
    <img className='imagen' src={nimutech} alt="" />
    <div className='buricho'>
        <Button className='botones'>PRODUCTOS</Button>
        <Button className='botones'> Q&A </Button>
        <Button className='botones'>LOGIN</Button>
        
    </div>

    <ShoppingCartIcon className='carrito' />
    <Typography className='carritoNumber'>
        12
    </Typography>

</Toolbar>
</AppBar>

    </>);
}

export default Navbar;