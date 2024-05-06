
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useState } from 'react';

const newTheme = (theme) => createTheme({
    ...theme,
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            color:'#00000',
            borderRadius: '2px',
            borderWidth: '1px',
            backgroundColor: '#FFFFFF',
          }
        }
      }
    }
  })



const SelectorFecha =({ onFechaChange }) => {


  const handleDateChange = (e) => {
    const dia = e.$D;
    const mes = e.$M;
    const anio = e.$y;
    //  const date = e.$D.toString()+'/'+e.$M.toString()+'/'+ e.$y.toString()
    //  console.log(date)
     onFechaChange(dia, mes, anio)
    }

    return (
        <ThemeProvider theme={newTheme}>
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
        <DatePicker format="DD/MM/YYYY" onChange={e => handleDateChange(e)} label="Seleccione fecha" />
    </LocalizationProvider>
        </ThemeProvider>
  );
}

export default SelectorFecha;