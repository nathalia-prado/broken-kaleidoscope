import { useState } from 'react'

function Pixel() {

    const getRandomColor = () =>
        `#${Math.floor(Math.random() * 0x1000000)
            .toString(16)
            .padStart(6, '0')}`

    const [color, setColor] = useState(getRandomColor)

    const handleClick = () => {
        setColor(getRandomColor);
    }

    const onMouseEnter = () => {
        setColor('green');
    }

    const onDoubleClick = () => {
        setColor('white')
    }

    const onDragEnter = () => {
        setColor('yellow')
    }

    const onKeyPressHandler = () => {
        console.log('Function created to prevent warning on non-interactive element')
    }


    return (
        <div style={{
            fontFamily: 'Times New Roman',
            height: '3px',
            width: '3px',
            backgroundColor: color, 
        }} 
            onClick={handleClick} 
            onMouseEnter={onMouseEnter} 
            onDoubleClick={onDoubleClick} 
            onDragEnter={onDragEnter}
            onKeyPress={onKeyPressHandler}
            role="button"
            tabIndex={0}
            >
        </div>
    )
}

export default Pixel