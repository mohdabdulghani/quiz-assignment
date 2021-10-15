const qBank = [
    {
      question:
        "what is algorithm",
      answers: ["algorithm", "ai", "algo", "ui"],
      correct: "algorithm",
      questionId: "099099"
    },
    {
      question:
        'what is ui?',
      answers: ["front end", "backend", "db", "ux"],
      correct: "frontend",
      questionId: "183452"
    },
    {
      question:
        'what is ui?',
      answers: ["front end", "backend", "db", "ux"],
      correct: "frontend",
      questionId: "183452"
    },
    {
      question:
        'what is ui?',
      answers: ["front end", "backend", "db", "ux"],
      correct: "frontend",
      questionId: "183452"
    },
    {
      question:
        'what is ui?',
      answers: ["front end", "backend", "db", "ux"],
      correct: "frontend",
      questionId: "183452"
    },
    {
      question:
        'what is ui?',
      answers: ["front end", "backend", "db", "ux"],
      correct: "frontend",
      questionId: "183452"
    },
    {
      question:
        'what is ui?',
      answers: ["front end", "backend", "db", "ux"],
      correct: "frontend",
      questionId: "183452"
    },
    {
      question:
        'what is ui?',
      answers: ["front end", "backend", "db", "ux"],
      correct: "frontend",
      questionId: "183452"
    },
    {
      question:
        'what is ui?',
      answers: ["front end", "backend", "db", "ux"],
      correct: "frontend",
      questionId: "183452"
    },
    {
      question:
        'what is ui?',
      answers: ["front end", "backend", "db", "ux"],
      correct: "frontend",
      questionId: "183452"
    },
    {
      question:
        'what is ui?',
      answers: ["front end", "backend", "db", "ux"],
      correct: "frontend",
      questionId: "183452"
    },
   
  ];

  const ques = (n = 5) =>
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
  
  export default ques;
  
