import './App.css'

import React from 'react'

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

class Imc extends React.Component {

  constructor(props) {
    super(props);
    this.setPeso = this.setPeso.bind(this);
    this.setAltura = this.setAltura.bind(this);
    this.resultado = this.resultado.bind(this);
    this.state = {
      peso: null,
      altura: null
    };
  }

  setPeso(event) {
    this.setState({ peso: event.target.value });
  }

  setAltura(event) {
    this.setState({ altura: event.target.value });
  }

  calcular() {
    let peso = this.state.peso;
    let altura = this.state.altura;
    if (peso && altura) {
      return peso / Math.pow(altura, 2);
    }
  }

  resultado() {
    let resultado = new String();
    let imc = this.calcular();
    if (imc) {
      resultado += imc.toFixed(2) + " - ";
      if (imc < 18.5) {
        resultado += "Abaixo do peso";
      } else if (imc < 24.9) {
        resultado += "Peso normal";
      } else if (imc < 29.9) {
        resultado += "Acima do peso (sobrepeso)";
      } else if (imc < 34.9) {
        resultado += "Obesidade I";
      } else if (imc < 39.9) {
        resultado += "Obesidade II";
      } else {
        resultado += "Obesidade III";
      }
    }
    return resultado;
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Calculadora de IMC
            </Typography>
            <TextField
              onChange={this.setPeso}
              margin="normal"
              required
              fullWidth
              id="peso"
              label="Peso"
              name="peso"
              type="number"
              InputProps={{
                startAdornment:
                  <InputAdornment position="start">kg</InputAdornment>,
              }}
            />
            <TextField
              onChange={this.setAltura}
              margin="normal"
              required
              fullWidth
              id="altura"
              label="Altura"
              name="altura"
              type="number"
              InputProps={{
                startAdornment:
                  <InputAdornment position="start">m</InputAdornment>,
              }}
            />
            <Typography component="h1" variant="h6">
              {this.resultado()}
            </Typography>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
}

export default function App() {
  return (
    <Imc />
  );
}
