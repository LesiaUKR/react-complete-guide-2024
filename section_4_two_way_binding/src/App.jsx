import React from 'react';
import Review from './Review';

// don't change the Component name "App"
function App() {

const [feedback, setFeedback] = React.useState('');
const [studentName, setStudentName] = React.useState('');

function handleFeedbackChange(event) {
  console.log(event);
  setFeedback(event.target.value);
}

function handleStudentNameChange(event) {
  console.log(event);
  setStudentName(event.target.value);

}
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea onChange={handleFeedbackChange}/>
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" onChange={handleStudentNameChange} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={feedback} student={studentName}/>

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;