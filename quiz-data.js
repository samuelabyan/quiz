const quizData = {
  "quiz_name": "Traffic Rules Knowledge Quiz",
  "quiz_description": "Assess your knowledge of traffic rules.",
  "settings": {
    "randomize_questions": true,
    "randomize_options": true,
    "time_limit": 500,
    "questions-count": 4,
    "passing_score": 3,
    "all-correct-result": "You got every question right! Your strong knowledge of traffic laws shows that you’re well-prepared to stay safe on the road. Keep following the rules and setting a great example for others. Drive, ride, and walk responsibly!",
    "passed-result": "You passed the test! You have a good understanding of traffic laws, but there’s always room to improve. Review any mistakes you made to strengthen your knowledge and ensure safer decisions on the road. Keep learning and stay safe!"
  },
  "questions": [
    {
      "id": 1,
      "question": "Why is it important for children to buckle up in the back row of a car?",
      "options": [
        {"id": 1, "answer": "Because it is more comfortable"},
        {"id": 2, "answer": "To prevent them from distracting the driver"},
        {"id": 3, "answer": "It reduces the risk of serious injury in an accident"},
        {"id": 4, "answer": "So they can take a nap safely"}
      ],
      "correct_answer": [3],
      "explanation": "Traffic laws in most countries require all passengers, including children, to wear seatbelts. For younger children, an appropriate child safety seat must be used according to their age, height, and weight. Seatbelts significantly reduce the risk of injury or death in case of a collision. Holding a child in your arms is not safe, as the force of impact can cause serious harm.",
      "points": 1,
      "img_question": "none",
      "img_explanation": "resources/buckle-up-children.png"
    },
	{
      "id": 2,
      "question": "When riding a bicycle on a public road with motor vehicles, what is the legal requirement for cyclists?",
      "options": [
        {"id": 1, "answer": "Cyclists must ride in the same direction as traffic and use bike lanes where available"},
        {"id": 2, "answer": "Cyclists should ride against traffic to see oncoming vehicles for safety"},
        {"id": 3, "answer": "It is legally permitted for cyclists to ride on any part of the road"},
        {"id": 4, "answer": "Cyclists must always yield to motor vehicles, even at intersections"}
      ],
      "correct_answer": [1],
      "explanation": "Traffic laws require cyclists to follow the same direction as vehicular traffic and to use designated bike lanes when available.",
      "points": 1,
      "img_question": "resources/bike-traffic.png",
      "img_explanation": "resources/bike-traffic.png"
    },
	{
      "id": 3,
      "question": "What is the legal obligation of pedestrians when crossing at a marked zebra crossing?",
      "options": [
        {"id": 1, "answer": "Pedestrians must ensure approaching vehicles have stopped before crossing"},
        {"id": 2, "answer": "Pedestrians have absolute right of way and may cross without checking traffic"},
        {"id": 3, "answer": "Pedestrians are only allowed to cross if a traffic signal is present"},
        {"id": 4, "answer": "Pedestrians must wave at drivers to indicate their intent to cross"}
      ],
      "correct_answer": [1],
      "explanation": "While pedestrians generally have the right of way at marked crossings, traffic laws require them to check for oncoming traffic and ensure vehicles have stopped before stepping onto the road. Drivers are legally required to yield, but pedestrians must also exercise caution to prevent accidents. Ignoring this rule could result in both safety risks and legal liability in certain situations.",
      "points": 1,
      "img_question": "resources/zebra.png",
      "img_explanation": "none"
    },
    {
      "id": 4,
      "question": "What does a red traffic light mean?",
      "options": [
        {"id": 1, "answer": "Stop immediately"},
        {"id": 2, "answer": "Proceed with caution"},
        {"id": 3, "answer": "Speed up to pass"},
        {"id": 4, "answer": "Ignore the light"}
      ],
      "correct_answer": [1],
      "explanation": "A red light means stop.",
      "points": 1,
      "img_question": "resources/red-light.png",
      "img_explanation": "none"
    }
  ]
};