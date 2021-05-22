import { Box, makeStyles } from '@material-ui/core';
import React from 'react'
const useStyles = makeStyles((theme) => ({
    Footer:{
        textAlign: 'center',
        fontSize: 12,
        color: '#fff',
        padding: 5,
        backgroundColor: '#0080ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        botton: 0,
        left: 0,
        width: '100%',
},
}));
const Footer  = (props) =>{
    const classes = useStyles();

    return (
        <Box className={classes.Footer}>
            © 2021, Jyoti Sharma
        </Box>
    )
}
export default Footer;