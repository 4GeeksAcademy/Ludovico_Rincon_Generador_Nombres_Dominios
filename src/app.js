/* eslint-disable */
// Domain Name Generator

// General Variable Definitions:
let pronoun = ["the", "our", "your", "her", "his", "my"];
let adj = ["great", "big", "little", "powerful", "lucky", "majestic"];
let noun = ["jogger", "racoon", "athlete", "walker", "fighter", "wolf"];
let ext = [".com", ".net", ".us", ".io", ".ve", ".es"];
let numDomain = 0;
let domainList = "";

// Starting loop lvl 1:
pronoun.forEach((elmPronoun) => {
  // Starting loop lvl 2:
  adj.forEach((elmAdj) => {
    // Starting loop lvl 3:
    noun.forEach((elmNoun) => {
      // Starting loop lvl 4:
      ext.forEach((elmExt) => {
        // Domain Counter
        numDomain += 1;
        // Domain List
        domainList = numDomain + " " + elmPronoun + elmAdj + elmNoun + elmExt;
        console.log(domainList);
      });
    });
  });
});
