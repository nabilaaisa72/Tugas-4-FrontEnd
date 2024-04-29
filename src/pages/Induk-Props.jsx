import Props from "../componen/Props";
import Button from "../componen/Button";
import Daftar from "../componen/Daftar";
import Navbar from "../componen/Navbar";
import Layout from "../componen/Layout";
import React from "react";
import { useNavigate } from "react-router-dom";

const IndukProps = () => {

    const kamar = 77;
    const hotel = "Aston"
    const hari = "sabtu"

    return ( 
        <>
            <Props 
                kamar={kamar}
                hotel={hotel}
                hari={hari}
                booking = {true}/>
            <hr />
            <Props 
                kamar="145"
                hotel="Dialog"
                hari="rabu"
                booking = {false}/>
            <hr />
            <Props 
                kamar="12"
                hotel="Illira"
                hari="jumat"
                booking = {true}/>
            <hr />
            <Props 
                kamar="31"
                hotel="Santika"
                hari="senin"
                booking = {false}/>
            <hr />
        </>
     );
}

const IndukPropsLayout = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    }
    return (
        <Layout>
            <Button text= "Home" onClick={handleClick} color="blue"/>
            <IndukProps />
        </Layout>
    );
}
 
export default IndukPropsLayout;