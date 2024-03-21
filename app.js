// app.js

// Grade values mapping
const gradeValues = { 'Foarte Bine': 4, 'Bine': 3, 'Suficient': 2, 'Insuficient': 1 };
let grades = [];

// Function to add grade
function addGrade(grade) {
  grades.push(gradeValues[grade]);
  updateGrades();
}

// Function to remove grade
function removeGrade(index) {
  grades.splice(index, 1);
  updateGrades();
}

// Function to reset grades
function resetGrades() {
  grades = [];
  updateGrades();
}

// Function to calculate mean grade
function calculateMean() {
  if (grades.length === 0) return null;
  return grades.reduce((a, b) => a + b, 0) / grades.length;
}

// Function to get grade from mean
function getGradeFromMean() {
  const mean = calculateMean();
  if (mean === null) return '-';
  if (mean >= 3.5) return 'Foarte Bine';
  if (mean >= 2.5) return 'Bine';
  if (mean >= 1.5) return 'Suficient';
  return 'Insuficient';
}

// Function to update grades display
function updateGrades() {
  const gradeList = document.getElementById('grade-list');
  const gradeMean = document.getElementById('grade-mean-number');
  const gradeCount = document.getElementById('grade-count');

  gradeList.innerHTML = '';
  grades.forEach((grade, index) => {
    const button = document.createElement('button');
    button.textContent = Object.keys(gradeValues).find(key => gradeValues[key] === grade) + ' ×';
    button.className = 'GradeButton';
    button.onclick = () => removeGrade(index);
    gradeList.appendChild(button);
  });

  gradeMean.textContent = getGradeFromMean();
  gradeCount.textContent = `${grades.length} calificativ(e)`;
}

// Initial update
updateGrades();
