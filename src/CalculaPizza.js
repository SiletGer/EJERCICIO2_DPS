import React, { useState } from 'react';
import './styles.css';


function CalculaPizza() {
  const [nombreCliente, setNombreCliente] = useState('');
  const [tipoPizza, setTipoPizza] = useState('Personal');
  const [ingredientesAdicionales, setIngredientesAdicionales] = useState(0);
  const [facturaVisible, setFacturaVisible] = useState(false);
  const [costoPizza, setCostoPizza] = useState(0);
  const [costoIngredientes, setCostoIngredientes] = useState(0);
  const [totalPagar, setTotalPagar] = useState(0);

  const calcularCostoPizza = () => {
    let costoBasePizza = 0;
    let costoIngredientesAdicionales = 0;
    let costoTotal = 0;

    switch (tipoPizza) {
      case 'Personal':
        costoBasePizza = 7;
        break;
      case 'Mediana':
        costoBasePizza = 10;
        break;
      case 'Grande':
        costoBasePizza = 12;
        break;
      default:
        break;
    }

    if (ingredientesAdicionales === 1) {
      costoIngredientesAdicionales = tipoPizza === 'Personal' ? 1 : tipoPizza === 'Mediana' ? 2 : 2.5;
    } else if (ingredientesAdicionales === 2) {
      costoIngredientesAdicionales = tipoPizza === 'Personal' ? 0.75 : tipoPizza === 'Mediana' ? 1 : 2;
    } else if (ingredientesAdicionales === 3) {
      costoIngredientesAdicionales = tipoPizza === 'Personal' ? 0.5 : tipoPizza === 'Mediana' ? 0.75 : 1;
    } else if (ingredientesAdicionales > 3) {
      costoIngredientesAdicionales = tipoPizza === 'Personal' ? 0.25 : tipoPizza === 'Mediana' ? 0.5 : 0.75;
    }

    costoTotal = costoBasePizza + costoIngredientesAdicionales * ingredientesAdicionales;

    setFacturaVisible(true);
    setCostoPizza(costoBasePizza);
    setCostoIngredientes(costoIngredientesAdicionales);
    setTotalPagar(costoTotal);
  };

  const resetearCalculadora = () => {
    setNombreCliente('');
    setTipoPizza('Personal');
    setIngredientesAdicionales(0);
    setFacturaVisible(false);
    setCostoPizza(0);
    setCostoIngredientes(0);
    setTotalPagar(0);
  };

  return (
    <div className="container">
      <img
        className="logo"
        src="	https://imgs.search.brave.com/joE1tCK_f-TBB0mE4Jw9DMl8UBK9HlZl61Ff9waODUo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTkvMDEvRG9taW5v/c19QaXp6YV9Mb2dv/LTcwMHg3MDAucG5n"
        alt="dominos logo" />
      <h2>Dominos pizza </h2>
      <div className="form">
      <label>Cliente:  </label>
      <input
        type="text"
        value={nombreCliente}
        onChange={(e) => setNombreCliente(e.target.value)}
      />
      </div>
      <br />
      <div className="form">
      <label>Tipo de Pizza:     </label>
      <select
        value={tipoPizza}
        onChange={(e) => setTipoPizza(e.target.value)}
      >
        <option value="Personal">Personal</option>
        <option value="Mediana">Mediana</option>
        <option value="Grande">Grande</option>
      </select>
      <br />
      </div>
      <div className="form">
      <label>Ingredientes Adicionales:     </label>
      <input
        type="number"
        value={ingredientesAdicionales}
        onChange={(e) => setIngredientesAdicionales(parseInt(e.target.value))}
      />
      <br />
      </div>
      <button onClick={calcularCostoPizza}>  Calcular  </button>
      {facturaVisible && (
        <div>
          <h2>Resumen:     </h2>
          <p>Nombre del Cliente: {nombreCliente}</p>
          <p>Tipo de Pizza: {tipoPizza}</p>
          <p>Total de Ingredientes Adicionales: {ingredientesAdicionales}</p>
          <p>Costo de la Pizza: ${costoPizza}</p>
          <p>Costo de Ingredientes Adicionales: ${costoIngredientes.toFixed(2)}</p>
          <p>Total a Pagar: ${totalPagar.toFixed(2)}</p>
          <button onClick={resetearCalculadora}>Reinicar orden brr</button>
        </div>
      )}
    </div>
  );
}

export default CalculaPizza;

