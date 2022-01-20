import { useState } from "react";

function Convert () {
    const [form, setForm] = useState ({hexcolor: '#34495e'});
    const [rgbColor, setRGB] = useState('rgb(153, 33, 255)');

    const hex2rgb = (data) => {
        const bigint = parseInt(data.split('#')[1], 16);
        if (isNaN(bigint)) {
            setRGB(() => ('ошибка'));
        } else {
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;
            setRGB(() => (`rgb(${r}, ${g}, ${b})`));
        }
    
    }

    const changeColor = evt => {
        setForm(prevForm => ({...prevForm, hexcolor: evt.target.value}));        
        if (evt.target.value.length < 7) {
            return;
        } else {
            hex2rgb(evt.target.value);
        }
    }

    const nothing = evt => {
        evt.preventDefault();
    }

    return (
        <div className="box"  style={{backgroundColor: rgbColor}}>
            <div className="container">
                <form onSubmit={nothing}>
                    <input className="inputHex" id="hex" name="hexcolor" onChange={changeColor}
                    value={form.hexcolor}/>
                </form>
                <div className="rgb">{rgbColor}</div>
            </div>
        </div>
    )
}

export default Convert;