import { Box, makeStyles } from '@material-ui/core';
import React from 'react'
const useStyles = makeStyles((theme) => ({
    heading:{
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 10,
        position: 'relative',
        color: '#fff',
        height: 100,
        backgroundColor: '#0080ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));
const Heading  = (props) =>{
    const classes = useStyles();

    return (
        <Box className={classes.heading}>
            Tambola
        </Box>
    )
}
export default Heading;