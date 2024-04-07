import { useState } from 'react';
import './App.css';

function SuperJackpot() {
  const [lottoNumbers, setLottoNumbers] = useState([]);
  const [totalCombinations, setTotalCombinations] = useState(48870360); // Nombre total de combinaisons possibles

  const generateLottoNumbers = () => {
    const n = 45; // Nombre total d'éléments
    const k = 6; // Nombre d'éléments à choisir
    let numbers = [];

    // Création d'un tableau de nombres de 1 à n
    let allNumbers = Array.from({ length: n }, (_, index) => index + 1);

    // Sélection des six premiers nombres de manière aléatoire
    for (let i = 0; i < k; i++) {
      const selectedNumber = selectNumber(allNumbers);
      numbers.push(selectedNumber);

      // Suppression du numéro sélectionné du tableau de tous les nombres
      allNumbers = allNumbers.filter(num => num !== selectedNumber);
    }

    setLottoNumbers(numbers.sort((a, b) => a - b));
  };

  const selectNumber = (numbers) => {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers.splice(randomIndex, 1)[0];
  };

  const handleGenerateNumbersClick = () => {
    generateLottoNumbers();
  };

  return (
    <div>
      <h1>Super Jackpot Magic</h1>
      <p>Félicitations, Giovanni Masala! vous avez gagné 1.000.000.000 CDF avec ces numéros gagnants.</p>
      <button onClick={handleGenerateNumbersClick}>Générer les numéros gagnants:</button>
      <h2>Numéros gagnants:</h2>
      <p>{lottoNumbers.join(' - ')}</p>
      <p>Nombre total de combinaisons possibles: {totalCombinations}</p>
    </div>
  );
}

export default SuperJackpot;
