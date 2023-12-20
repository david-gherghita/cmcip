import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GradeButtons from './GradeButtons';
import './App.css';

function App() {
  const [grades, setGrades] = useState([]);

  const gradeValues = { 'Foarte Bine': 4, 'Bine': 3, 'Suficient': 2, 'Insuficient': 1 };

  const addGrade = (grade) => {
    setGrades([...grades, gradeValues[grade]]);
  };

  const removeGrade = (index) => {
    setGrades(grades.filter((_, idx) => idx !== index));
  };

  const resetGrades = () => {
    setGrades([]);
  };

  const calculateMean = () => {
    if (grades.length === 0) return null;
    return grades.reduce((a, b) => a + b, 0) / grades.length;
  };

  const getGradeFromMean = () => {
    const mean = calculateMean();
    if (mean === null) return '-';
    if (mean >= 3.5) return 'Foarte Bine';
    if (mean >= 2.5) return 'Bine';
    if (mean >= 1.5) return 'Suficient';
    return 'Insuficient';
  };

  return (
    <Box className="App" display="flex" flexDirection="column" justifyContent="space-between" style={{ margin: '0 auto', maxWidth: '600px', height: 'calc(100vh - 80px)', paddingBottom: '20px' }}>
      <Box p={2}>
        <Typography variant="h4" style={{ marginBottom: '10px' }}>CMCIP</Typography>
        <hr style={{ width: '100%', margin: '0 auto 20px' }} />

        <Box bgcolor="lightblue" p={2} mb={2} borderRadius="borderRadius" boxShadow={1}
             style={{width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
          <Typography variant="h5" style={{ marginBottom: '5px' }}>{getGradeFromMean()}</Typography>
          <Typography variant="h7">Media</Typography>
        </Box>

        <Typography variant="h7" style={{ marginBottom: '10px' }}>{grades.length} calificativ(e)</Typography>

        <Box>
          {grades.map((grade, index) => (
            <Button
              key={index}
              className="GradeButton"
              variant="outlined"
              onClick={() => removeGrade(index)}
              style={{ margin: '10px', fontSize: '12px' }}
            >
              {Object.keys(gradeValues).find(key => gradeValues[key] === grade)}
              <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>×</span>
            </Button>
          ))}
        </Box>
      </Box>

      <Box p={2}>
        <GradeButtons addGrade={addGrade} resetGrades={resetGrades} />
      </Box>
    </Box>
  );
}


export default App;
