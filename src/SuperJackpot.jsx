import { useState } from 'react';
import './App.css';
import seedrandom from 'seedrandom';

function SuperJackpot() {
      const [lottoNumbers, setLottoNumbers] = useState([]);
    //   const [drawNumber, setDrawNumber] = useState(1);
      const [totalCombinations, setTotalCombinations] = useState(48870360); // Nombre total de combinaisons possibles
    
    //   const handleDrawNumberChange = (event) => {
    //     const value = parseInt(event.target.value);
    //     setDrawNumber(value);
    //   };
    
      const generateLottoNumbers = () => {
        const n = 45; // Nombre total d'éléments
        const k = 6; // Nombre d'éléments à choisir
        const rng = seedrandom(); // Utilisation d'un générateur de nombres aléatoires indépendant du numéro de tirage
        let numbers = [];
    
        // Création d'un tableau de nombres de 1 à n
        let allNumbers = Array.from({ length: n }, (_, index) => index + 1);
    
        // Sélection des six premiers nombres indépendamment du numéro de tirage
        for (let i = 0; i < k; i++) {
          const selectedNumber = selectNumber(allNumbers, rng());
          numbers.push(selectedNumber);
    
          // Suppression du numéro sélectionné du tableau de tous les nombres
          allNumbers = allNumbers.filter(num => num !== selectedNumber);
        }
    
        setLottoNumbers(numbers.sort((a, b) => a - b));
      };
    
      const selectNumber = (numbers, random) => {
        const currentIndex = Math.floor(random * numbers.length);
        return numbers[currentIndex];
      };
    
      const handleGenerateNumbersClick = () => {
        generateLottoNumbers();
      };
    
      return (
        <div>
          <h1>Super Jackpot Magic</h1>
          <p>Félicitations, Giovanni Masala! vous avez gagné 1.000.000.000 CDF avec ces numéros gagnants.</p>
          {/* <label>
            Numéro de tirage:
            <input type="number" value={drawNumber} onChange={handleDrawNumberChange} />
          </label> */}
          <button onClick={handleGenerateNumbersClick}>Générer les numéros gagnants:</button>
          <h2>Numéros gagnants:</h2>
          <p>{lottoNumbers.join(' - ')}</p>
          <p>Nombre total de combinaisons possibles: {totalCombinations}</p>
        </div>
      );
    }

export default SuperJackpot;

