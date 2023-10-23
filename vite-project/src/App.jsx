import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  useEffect(() => {
    if (altura && peso) {
      const alturaMetros = altura / 100;
      const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
      setImc(imcCalculado);

      if (imcCalculado < 18.5) {
        setClassificacao('Abaixo do Peso');
      } else if (imcCalculado < 24.9) {
        setClassificacao('Peso Normal');
      } else if (imcCalculado < 29.9) {
        setClassificacao('Sobrepeso');
      } else if (imcCalculado < 34.9) {
        setClassificacao('Obesidade Grau I');
      } else if (imcCalculado < 39.9) {
        setClassificacao('Obesidade Grau II');
      } else {
        setClassificacao('Obesidade Grau III');
      }
    } else {
      setImc(null);
      setClassificacao('');
    }
  }, [altura, peso]);

  const getCorPorIMC = (imc) => {
    if (imc < 18.5) {
      return 'blue';
    } else if (imc < 24.9) {
      return 'green';
    } else if (imc < 29.9) {
      return 'yellow';
    } else if (imc < 34.9) {
      return 'orange';
    } else if (imc < 39.9) {
      return 'red';
    } else {
      return 'purple';
    }
  };

  return (
    <div className="App" style={{ backgroundColor: getCorPorIMC(imc) }}>
      <h1>Calculadora de IMC</h1>
      <div>
        <label>
          Altura (cm):
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Peso (kg):
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </label>
      </div>
      {imc !== null && (
        <div>
          <h2>
            Seu IMC é{' '}
            <span style={{ fontWeight: 'bold' }}>{imc}</span>
          </h2>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;
