import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const OnClickEnter = () => setMessage('안녕하세요!');
    const OnClickLeave = () => setMessage('안녕히가세요!');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={OnClickEnter}>입장</button>
            <button onClick={OnClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color: 'red'}} onClick={()=> setColor('red')}>빨간색</button>
            <button style={{color: 'green'}} onClick={()=> setColor('green')}>초록색</button>
            <button style={{color: 'blue'}} onClick={()=> setColor('blue')}>파란색</button>
        </div>
    );
};

export default Say;