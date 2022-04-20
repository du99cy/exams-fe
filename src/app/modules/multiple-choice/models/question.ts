export const question = [
  {
    questionText:
      'Which of the following does TypeScript use to specify types?',
    questionType:'radio',
    options: [
      {
        text: ':',
        correct: true,
        checked:false
      },
      {
        text: ';',
        checked:false
      },
      {
        text: '!',
        checked:false
      },
      {
        text: '&',
        checked:false
      },
    ],
    explanation:
      'TS uses a colon (:) to separate the property name from the property type',
  },
  {
    questionText: 'Which of the following is NOT a type used in TypeScript?',
    questionType:'radio',
    options: [
      {
        text: 'number',
        checked:false
      },
      {
        text: 'string',
        checked:false
      },
      {
        text: 'boolean',
        checked:false
      },
      {
        text: 'enum',
        correct: true,
        checked:false
      },
    ],
    explanation: 'enum is not used as a type in TypeScript',
  },
  {
    questionText:
      'How can we specify properties and methods for an object in TypeScript?',
      questionType:'radio',
    options: [
      {
        text: 'Use classes.',
        checked:false
      },
      {
        text: 'Use interfaces.',
        correct: true,
        checked:false
      },
      {
        text: 'Use enums.',
        checked:false
      },
      {
        text: 'Use async/await.',
        checked:false
      },
    ],
    explanation:
      'interfaces are typically used to list the properties and methods for an object',
  },
  {
    questionText: 'How else can Array<number> be written in TypeScript?',
    questionType:'radio',
    options: [
      {
        text: '@number',
        checked:false
      },
      {
        text: 'number[]',
        correct: true,
        checked:false
      },
      {
        text: 'number!',
        checked:false
      },
      {
        text: 'number?',
        checked:false
      },
    ],
    explanation:
      'number[] is another way of writing Array<number> in TypeScript',
  },
  {
    questionText: 'In which of these does a class take parameters?',
    questionType:'radio',
    options: [
      {
        text: 'constructor',
        correct: true,
        checked:false
      },
      {
        text: 'destructor',
        checked:false
      },
      {
        text: 'import',
        checked:false
      },
      {
        text: 'subscribe',
        checked:false
      },
    ],
    explanation: 'a constructor is used by a class to take in parameters',
  },
  {
    questionText: 'Which is NOT an access modifier?',
    questionType:'radio',
    options: [
      {
        text: 'private',
        checked:false
      },
      {
        text: 'protected',
        checked:false
      },
      {
        text: 'public',
        checked:false
      },
      {
        text: 'async',
        correct: true,
        checked:false
      },
    ],
    explanation: 'async is not used as an access modifier type in TypeScript',
  },
  {
    questionText:
      'Which keyword allows us to share information between files in TypeScript?',
      questionType:'radio',
    options: [
      {
        text: 'import',
        checked:false
      },
      {
        text: 'export',
        correct: true,
        checked:false
      },
      {
        text: 'async',
        checked:false
      },
      {
        text: 'constructor',
        checked:false
      },
    ],
    explanation:
      'the export keyword allows for the information to be transmitted between files',
  },
  {
    questionText:
      'Which is an array method to generate a new array based on a condition?',
      questionType:'checkbox',
    options: [
      {
        text: 'filter',
        
        correct: true,
        checked:false
      },
      {
        text: 'map',
        checked:false
      },
      {
        text: 'async',
        checked:false
      },
      {
        text: 'enum',
        checked:false
      },
    ],
    explanation: 'filter is a method used to conditionally create a new array',
  },
  {
    questionText: 'How is a property accessible within a class?',
    questionType:'checkbox',
    options: [
      {
        text: 'Using this.propertyName',
        correct: true,
        checked:false
      },
      {
        text: 'Accessors',
        checked:false
      },
      {
        text: 'Destructuring',
        checked:false
      },
      {
        text: 'Arrow function',
        checked:false
      },
    ],
    explanation:
      'this.propertyName is the way to access a specific property within a class',
  },
];
