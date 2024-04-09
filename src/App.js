import React, { useEffect } from 'react';
import './App.css';
import AppRoutes from './Routes';
import connectDB from './mongoDatabase'; // Importa a função de conexão

function App() {
  useEffect(() => {
    // Conectar ao MongoDB assim que o componente App for montado
    connectDB()
      .then(() => console.log('Conexão com o MongoDB estabelecida com sucesso'))
      .catch(err => console.error('Erro ao conectar ao MongoDB:', err));
  }, []);

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;

