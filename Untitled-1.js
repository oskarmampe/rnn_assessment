function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  console.log(getRandomInt(3));
  // expected output: 0, 1 or 2



responses = ["response 1", "response 2", "response 3"];

// Don't get a number greater than the number of responses in our array
// Given we have 3 responses responses.length will be 3
// Function above gives output of 0  1 or 2 randomly
// Therefore, there's a random chance of getting any 3 of the responses from the array
index = getRandomInt(responses.length); 


chatMessage = responses[index];
