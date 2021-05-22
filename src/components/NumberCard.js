import React from "react";
import {
    Box,
    Chip,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    selectedNumber: {
        color: '#fff',
        backgroundColor: 'red',
        width: 40,
        height: 40,
        margin: 8,
        fontSize: 14,
        fontWeight: 'bold',


    },
    nonSelectedNumber: {
        color: '#fff',
        backgroundColor: 'green',
        width: 40,
        height: 40,
        margin: 8,
        fontSize: 14,
        fontWeight: 'bold',

    },
    currentNumber: {
        color: '#fff',
        backgroundColor: 'blue',
        width: 40,
        height: 40,
        margin: 8,
        fontSize: 14,
        fontWeight: 'bold',        
    }
}));
const NumberCard = (props) => {
    const classes = useStyles();

    const {calledOutNumber, currentNumber} = props
    // const allNumbers = Array.from({length: 90}, (_, i) => i + 1);
    const allNumbers = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
        [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
        [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
        [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
        [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
        [81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
    ]

    return (
        <Box display="flex" flexWrap='wrap'>
        {allNumbers.map((numberRow, index) => (
            <Box>
                {numberRow.map((number, index) => (
                    <Box border="2px solid black">
                    <Chip
                    size={"large"}
                    label={number}
                    className={ calledOutNumber.includes(number) ? ( number === currentNumber ? classes.currentNumber : classes.selectedNumber) : classes.nonSelectedNumber}/>
                    </Box>
                ))}
            </Box>
        ))}
        </Box>
    );
};

export default NumberCard;
