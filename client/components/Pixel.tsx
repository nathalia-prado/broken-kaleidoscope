import { useState } from 'react'

function Pixel() {
    const [color, setColor] = useState('cornflowerblue')
    return (
        <div style={{
            fontFamily: 'Times New Roman',
            height: '50px',
            width: '50px',
            backgroundColor: color, 
        }} ></div>
    )
}

export default Pixel