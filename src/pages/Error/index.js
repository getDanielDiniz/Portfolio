import "./Error.css"
import React, { useState } from 'react';
import { useContext } from "react";
import { HuePicker } from 'react-color';
import { MainContext } from "../../Context/Main/MainContext";
import { GoArrowLeft } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";


export default function Error() {

    const {color} = useContext(MainContext)
    const {setColor} = useContext(MainContext)

    const handleChange = (selectedColor) => {
        setColor(selectedColor.hex);
      };

    return(
        <>
        <Link to="/">
        <GoArrowLeft style={{fill:(color)}} className="back-button"/>
        </Link>

        <main className="flex-centralize error-div">
                <span style={{color:(color)}} className="pixel-font">404</span>
                <span style={{color:(color)}} className="pixel-font">Page Not Found</span>
                <HuePicker color={color} onChange={handleChange}/>
                
        </main>
        </>
    )
}