const inquirer = require('inquirer');

const profileDataArgs = process.argv.slice(2);

const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);

inquirer
  .prompt([
    {
      name: 'first_name',
      type: 'input',
      message: 'What is your first name?',
    },
    {
      name: 'last_name',
      type: 'input',
      message: 'What is your last name?',
    },
  ])
  .then((answers) => {
    console.log('Hello ' + answers.first_name, answers.last_name);
  });