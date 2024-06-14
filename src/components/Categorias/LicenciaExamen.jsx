import React, { useState } from 'react';
import SelectorFecha from '../datePickers/DatePicker';
import { useSelector } from 'react-redux';

const LicenciaExamen = () => {
    const { user } = useSelector((state) => state.auth);
    const [dia, setDia] = useState(1); // Default values to prevent NaN errors
    const [mes, setMes] = useState(1);
    const [anio, setAnio] = useState(1970);
    const [diaFin, setDiaFin] = useState(1);
    const [mesFin, setMesFin] = useState(1);
    const [anioFin, setAnioFin] = useState(1970);
    const [selectedFile,setSelectedFile] = useState();

    const handleFechaChange = (dia, mes, anio) => {
        setDia(dia);
        setMes(mes + 1);
        setAnio(anio);
    };

    const handleFechaChangeFin = (diaFin, mesFin, anioFin) => {
        setDiaFin(diaFin);
        setMesFin(mesFin + 1);
        setAnioFin(anioFin);
    };
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSolicitud = () => {
        const startDate = new Date(anio, mes - 1, dia);
        const endDate = new Date(anioFin, mesFin - 1, diaFin);

        if (isNaN(startDate) || isNaN(endDate)) {
            console.log('Las fechas no son válidas');
            return;
        }

        const diffTime = Math.abs(endDate - startDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays >= 7) {
            console.log('La diferencia entre las fechas no puede ser mayor a 7 días');
        } else {
            console.log('Ta perfecto pai');
        }

        console.log(user.nombre);
        console.log(user.apellido);
        console.log(user.dni);
        console.log(dia, mes, anio);
        console.log(diaFin, mesFin, anioFin);

        if (selectedFile) {
            console.log('Archivo subido:', selectedFile);
        } else {
            console.log('No se ha subido ningún archivo');
        }
    };

    return (
        <>
            <div className="flex justify-around items-center p-4">
                <SelectorFecha onFechaChange={handleFechaChange} />
                <h1 className="m-16">Hasta</h1>
                <SelectorFecha onFechaChange={handleFechaChangeFin} />
            </div>
            <input type="file" className='ml-8'onChange={handleFileChange}/>
            <button onClick={handleSolicitud} className='p-4'>
                Solicitar
            </button>
        </>
    );
};

export default LicenciaExamen;
