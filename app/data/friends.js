const dogList = [
  {
    name: "Bear",
    photo: "images/bear.png",
    scores: [4, 4, 4, 5, 5, 1, 2, 5, 5]
  },
  {
    name: "Donny",
    photo: "images/donny.png",
    scores: [3, 2, 4, 3, 4, 1, 4, 3, 5]
  },
  {
    name: "Francis",
    photo: "images/francis.png",
    scores: [1, 3, 2, 1, 3, 4, 2, 2, 5]
  },
  {
    name: "Klaus",
    photo: "images/klaus.png",
    scores: [3, 2, 4, 5, 3, 1, 1, 4, 5]
  },
  {
    name: "Liza",
    photo: "images/liza.png",
    scores: [2, 4, 3, 3, 5, 1, 5, 2, 5]
  },
  {
    name: "Lucy",
    photo: "images/lucy.png",
    scores: [1, 1, 5, 4, 4, 1, 1, 5, 5]
  },
  {
    name: "Max",
    photo: "images/max.png",
    scores: [1, 1, 5, 5, 5, 1, 1, 5, 5]
  },
  {
    name: "Puddin'",
    photo: "images/pudding.png",
    scores: [5, 4, 2, 4, 4, 1, 1, 2, 5]
  },
  {
    name: "Ruby",
    photo: "images/ruby.png",
    scores: [2, 3, 5, 3, 5, 2, 2, 4, 5]
  },
  {
    name: "Stella",
    photo: "images/stella.png",
    scores: [4, 4, 3, 2, 4, 4, 3, 4, 5]
  }
];

const questions = [
  {
    question: "How large is your dog?",
    answers: [
      "1 (0-19 lbs)",
      "2 (20-39 lbs)",
      "3 (40-59 lbs)",
      "4 (60-79 lbs)",
      "5 (80+ lbs)"
    ]
  },
  {
    question: "How old is your dog?",
    answers: [
      "1 (0-1 year)",
      "2 (2-3 years)",
      "3 (4-5 years)",
      "4 (6-7 years)",
      "5 (8+ years)"
    ]
  },
  {
    question: "How active is your dog?",
    answers: [
      "1 (not at all)",
      "2 (a little)",
      "3 (average)",
      "4 (a lot)",
      "5 (very much)"
    ]
  },
  {
    question: "Does your dog do well with other dogs?",
    answers: [
      "1 (not at all)",
      "2 (a little)",
      "3 (average)",
      "4 (a lot)",
      "5 (very much)"
    ]
  },
  {
    question: "Does your dog do well with other people?",
    answers: [
      "1 (not at all)",
      "2 (a little)",
      "3 (average)",
      "4 (a lot)",
      "5 (very much)"
    ]
  },
  {
    question: "Is your dog aggressive?",
    answers: [
      "1 (not at all)",
      "2 (a little)",
      "3 (average)",
      "4 (a lot)",
      "5 (very much)"
    ]
  },
  {
    question: "Is your dog shy?",
    answers: [
      "1 (not at all)",
      "2 (a little)",
      "3 (average)",
      "4 (a lot)",
      "5 (very much)"
    ]
  },
  {
    question: "Does your dog like to play?",
    answers: [
      "1 (not at all)",
      "2 (a little)",
      "3 (average)",
      "4 (a lot)",
      "5 (very much)"
    ]
  },
  {
    question: "Is your dog a good boy/girl?",
    answers: [
      "1 (not at all)",
      "2 (a little)",
      "3 (average)",
      "4 (a lot)",
      "5 (very much)"
    ]
  }
];
let userDog = [];

dogCompare = () => {
  //   let userDog = [];
  for (i = 1; i < 10; i++) {
    let questionValue = $(`#question-${i}`).val();
    userDog.push(questionValue);
  }
};





$(document).on("click", "#dog-submit", function() {
  for (i = 1; i < 10; i++) {
    if (!$("#dog-name").val()) {
      alert("no dog name!");
      return false;
    }
    let questionValue = $(`#question-${i}`).val();
    if (!questionValue) {
      alert("NOT A NUMBER");
      return false;
    }
  }
  alert("OK");
  dogCompare();
  return false;
});
