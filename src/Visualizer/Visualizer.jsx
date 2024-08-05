import React, { useEffect, useState } from 'react'
import { getMergeSort } from '../SortingAlgorithms/mergeSortAlgo';
import "./Visualizer.css";
import { getBubbleSort } from '../SortingAlgorithms/bubbleSortAlgo';

const ANIMATION_SPEED = 0.5;
const NO_OF_BARS = 335;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';

const Visualizer = () => {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        resetArr();
    }, [])

    function randomVal(start, end) {
        return Math.floor(Math.random() * (end - start + 1) + start);
    }
    function resetArr() {
        const tempArr = [];
        for (let i = 0; i < NO_OF_BARS; i++) {
            tempArr.push(randomVal(5, 500));
        }
        setArr(tempArr);
    }

    const mergeSort = () => {
        const final = getMergeSort(arr);
        for (let i = 0; i < final.length; i++) {
            const bars = document.getElementsByClassName('bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = final[i];
                const barOneStyle = bars[barOneIdx].style;
                const barTwoStyle = bars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED);
            }
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = final[i];
                    const barOneStyle = bars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED);
            }
        }
    }

    const quickSort = () => {

    }

    const bubbleSort = () => {
        const final = getBubbleSort(arr);
        for (let i = 0; i < final.length; i++) {
            const bars = document.getElementsByClassName('bar');
            const isColorChange = i % 4 < 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = final[i];
                const barOneStyle = bars[barOneIdx].style;
                const barTwoStyle = bars[barTwoIdx].style;
                const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED);
            } else {
                setTimeout(() => {
                    const [barIdx, newHeight] = final[i];
                    const barStyle = bars[barIdx].style;
                    barStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED);
            }
        }
    }

    const heapSort = () => {

    }

    return (
        <div className='container'>
            {
                arr.map((val, id) => (
                    <div className='bar'
                        key={id}
                        style={{
                            backgroundColor: 'turquoise',
                            height: `${val}px`
                        }}
                    ></div>
                ))
            }
            <button onClick={resetArr}>Reset</button>
            <button onClick={mergeSort}>Merge Sort</button>
            <button onClick={quickSort}>Quick Sort</button>
            <button onClick={bubbleSort}>Bubble Sort</button>
            <button onClick={heapSort}>Heap Sort</button>
        </div>
    )
}


export default Visualizer
