import { useContext, useEffect, useState } from "react"
import "./Loading.css"
import { MainContext } from "../../Context/Main/MainContext"
import { useLocation } from "react-router-dom"

export const Loading= ()=>{

    const {load} = useContext(MainContext)
    const {setLoad} = useContext(MainContext)
    const [classLoad, setClassLoad] = useState('loadingPage')
    const location = useLocation()

    useEffect(()=>{
        console.log("chamou")
        if(load){
            setTimeout(()=>{
                setClassLoad('displayNone')
            },500)
        }
        else{
            setClassLoad('loadingPage')
        }
    },[load])

    useEffect(()=>{
        setLoad(false)
    },[location.pathname])

    return(
        
        !load &&
        (
            <section 
            className={`loadingPage`}>
                <div className="loading">
                    <span style={{"--i":1}}></span>
                    <span style={{"--i":2}}></span>
                    <span style={{"--i":3}}></span>
                    <span style={{"--i":4}}></span>
                    <span style={{"--i":5}}></span>
                    <span style={{"--i":6}}></span>
                    <span style={{"--i":7}}></span>
                    <span style={{"--i":8}}></span>
                    <span style={{"--i":9}}></span>
                    <span style={{"--i":10}}></span>
                    <span style={{"--i":11}}></span>
                    <span style={{"--i":12}}></span>
                    <span style={{"--i":13}}></span>
                    <span style={{"--i":14}}></span>
                    <span style={{"--i":15}}></span>
                    <span style={{"--i":16}}></span>
                    <span style={{"--i":17}}></span>
                    <span style={{"--i":18}}></span>
                    <span style={{"--i":19}}></span>
                    <span style={{"--i":20}}></span>
                </div>
            </section>
        )
        
    )
}