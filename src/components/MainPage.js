import React, { useState, useRef, useEffect } from "react";
import {
    Box,
    Button,
    makeStyles,
    Typography,
} from "@material-ui/core";
import NumberCard from "./NumberCard";
import logo from '../images/number_ball.png';

const MAX = 90

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        height: '80%',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    spinBtn: {
        marginBottom: 20,
        background: '#34d9b2',
        backgroundImage: '-webkit-linear-gradient(top, #34d9b2, #2980b9)',
        backgroundImage: '-moz-linear-gradient(top, #34d9b2, #2980b9)',
        backgroundImage: '-ms-linear-gradient(top, #34d9b2, #2980b9)',
        backgroundImage: '-o-linear-gradient(top, #34d9b2, #2980b9)',
        backgroundImage: 'linear-gradient(to bottom, #34d9b2, #2980b9)',
        '-webkit-border-radius': 60,
        '-moz-border-radius': 60,
        borderRadius: '60px',
        fontFamily: 'Courier New',
        color: '#ffffff',
        fontSize: '20px',
        padding: '10px 20px 10px 20px',
        border: 'solid #fcfcfc 2px',
        '&:hover': {
            background: '#fc3c89',
            backgroundImage: '-webkit-linear-gradient(top, #fc3c89, #3498db)',
            backgroundImage: '-moz-linear-gradient(top, #fc3c89, #3498db)',
            backgroundImage: '-ms-linear-gradient(top, #fc3c89, #3498db)',
            backgroundImage: '-o-linear-gradient(top, #fc3c89, #3498db)',
            backgroundImage: 'linear-gradient(to bottom, #fc3c89, #3498db)',
            transform: 'scale(1)',
            boxShadow: '0 2px 2px #000, 0 8px 32px rgba(0, 0, 0, 0.5)',
        },
    },
    number: {
        marginBottom: 20,
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        background: 'aqua',
        border: '10px solid blue',
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lastNum: {
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
    },
    boardText: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
    },
}));
const MainPage = (props) => {
    const classes = useStyles();
    const [currentNumber, setCurrentNumber] = useState('')
    const [previousNumber, setPreviousNumber] = useState('')
    const [calledOutNumber, setCalledOutNumber] = useState([])

    const generateNumber = () => {
        let number =  Math.floor(Math.random() * MAX) + 1;
        return (calledOutNumber.includes(number)) ?
                        generateNumber() : number;
    }
    const handleClick = () => {
        let num = generateNumber()
        setPreviousNumber(currentNumber)
        setCurrentNumber(num);
        let selectedNumbers = [...calledOutNumber]
        selectedNumbers.push(num)
        setCalledOutNumber(selectedNumbers);
    }
    const handleResetClick = () => {
        setCurrentNumber('')
        setPreviousNumber('')
        setCalledOutNumber([])
    }

    return (
        <Box className={classes.container}>
            <Box className={classes.wrapper}>
                {calledOutNumber.length < 90 ?
                    <Box>
                        <Button className={classes.spinBtn} onClick={handleClick}>
                            {currentNumber ? 'Spin' : 'Start'}
                        </Button>
                    </Box>
                    :
                    'Game Over !'
                    }
                {currentNumber && 
                <Box>
                    <Box className={classes.number}>
                        {currentNumber}
                    </Box>
                </Box>}
                <Box>
                    {previousNumber &&
                        <Box className={classes.lastNum}> Last number: {previousNumber}
                    </Box>}
                </Box>
                <Box>
                    {calledOutNumber.length > 0 && <Button onClick={handleResetClick}>Reset</Button>}
                </Box>
                <Box position='fixed' bottom='0'>
                    <img alt="bingo" width='350' height='320' src={logo}/>
                </Box>

            </Box>
            <Box className={classes.wrapper}>
                <Typography className={classes.boardText}>Board</Typography>
                <NumberCard currentNumber={currentNumber} calledOutNumber={calledOutNumber}/>
            </Box>
        </Box>

    );
};

export default MainPage;
