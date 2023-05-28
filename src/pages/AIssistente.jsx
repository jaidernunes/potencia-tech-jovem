import { useState } from 'react';

const App = () => {
  // State variables to store the question and answer
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  // Event handler for question input change
  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  // Function to fetch the answer from the API
  const buscarResposta = async () => {
    // Make a request to the API
    const response = await fetch("/sua-rota-api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        pergunta: question
      })
    });

    // Parse the response as JSON
    const data = await response.json();

    // Update the answer state with the response
    setAnswer(data.resposta);
  };

  return (
    <div>
      <h1>Pesquisa com ChatGPT</h1>

      {/* Input field for the question */}
      <input
        type="text"
        value={question}
        onChange={handleQuestionChange}
        placeholder="Faça uma pergunta"
      />

      {/* Button to trigger the API request */}
      <button onClick={buscarResposta}>Buscar</button>

      {/* Display the answer */}
      <div>{answer}</div>
    </div>
  );
};

export default App;