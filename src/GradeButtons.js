import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const gradeValues = { 'Foarte Bine': 4, 'Bine': 3, 'Suficient': 2, 'Insuficient': 1 };

function GradeButtons({ addGrade, resetGrades }) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button className="ResetButton" variant="contained" color="warning" onClick={resetGrades}>
            Reset
          </Button>
        </Grid>
        {Object.keys(gradeValues).map((grade) => (
          <Grid item xs={6} key={grade}>
            <Button className="GridButton" variant="contained" onClick={() => addGrade(grade)} style={{ width: '100%' }}>
              {grade}
            </Button>
          </Grid>
        ))}
      </Grid>
    );
}

export default GradeButtons;
