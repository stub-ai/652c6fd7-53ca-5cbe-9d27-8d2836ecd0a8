import React, { useState, ChangeEvent, FormEvent } from 'react';

type KnowledgeBase = {
  [key: string]: string;
};

const knowledgeBase: KnowledgeBase = {
  "principles": "Industrial balancing is a process by which the mass distribution of a rotor is checked and corrected to ensure smooth operation.",
  "techniques": "There are several techniques used in industrial balancing, including static balancing, dynamic balancing, and couple balancing.",
  "equipment": "Common equipment used in industrial balancing includes balancing machines, vibration analyzers, and correction tools.",
  "applications": "Industrial balancing is used in various industries such as automotive, aerospace, power generation, and manufacturing."
};

const Chatbot = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleQuerySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const answer = knowledgeBase[query.toLowerCase()];
    if (answer) {
      setResponse(answer);
    } else {
      setResponse("I'm sorry, I don't have information on that topic.");
    }
  };

  return (
    <div className="chatbot">
      <form onSubmit={handleQuerySubmit}>
        <input type="text" value={query} onChange={handleQueryChange} placeholder="Ask me something..." />
        <button type="submit">Submit</button>
      </form>
      <p>{response}</p>
    </div>
  );
};

export default Chatbot;