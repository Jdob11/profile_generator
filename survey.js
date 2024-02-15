const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//create object to contain answers
const answers = {};
//ask a list of questions
rl.question('What\'s your name? Nicknames are also acceptable :)', (name) => {
  answers.name = name;

  rl.question('What\'s an activity you like doing? ', (activity) => {
    answers.activity = activity;

    rl.question('What do you listen to while doing that? ', (music) => {
      answers.music = music;

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (meal) => {
        answers.meal = meal;

        rl.question('What\'s your favourite thing to eat for that meal? ', (favoriteFood) => {
          answers.favoriteFood = favoriteFood;

          rl.question('Which sport is your absolute favourite? ', (sport) => {
            answers.sport = sport;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              answers.superpower = superpower;

              //call the answers to those questions from the answers object, to make a profile statement
              const paragraph = `${answers.name} is a person! He or she or they do ${answers.activity},
              which is a thing that people do, so stop judging. They listen to ${answers.music}, and
              probably have since before it or they was or were cool... They are often found having ${answers.meal}
              at the normal time, usually eating ${answers.favoriteFood}, or something else! They are also known
              to enjoy ${answers.sport}, which may be a sport, or something else, and maybe they
              participate, or maybe they just watch! If they were a superhero, their power would probably
              ${answers.superpower}, but they can't think of a cool superhero name, so for now, they're
              just ${answers.name}`;

              console.log(paragraph);



              rl.close();
            });
          });
        });
      });
    });
  });
});