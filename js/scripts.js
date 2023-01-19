// Utility Logic

function isEmpty() {
  for (let i=0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
    return true;
    }
  }
  return false;
}

// Business Logic

function wordCounter(text) {
  if (isEmpty(text)) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (isEmpty(text)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}


// offensive words WIP:
// function offensiveWords(text) {
//   const textArray = text.split(" ");
//   textArray.forEach(function(element) {
//     const wordsToExclude = new Set(['zoinks', 'muppeteer', 'biffaroni', 'loopdaloop']);
//     const words = textArray.filter(word => !wordsToExclude.has(word));
//     console.log(words);
//     });
//   }
// 

// Offensive word works but bug...WIP: commas in join array present
function omitOffence(word, text) {
  const textArray = text.split(" ");
  const displayArray = [];

  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(!("zoinks").toLowerCase() || !("muppeteer").toLowerCase() || !("biffaroni").toLowerCase() || !("loopdaloop").toLowerCase()) )
    { 
      displayArray.push(element);
    } else { console.log("No bad words"); }

    console.log("Display arr: ", displayArray);
    return displayArray.join();// commas 
  });
}
// UI Logic

// if (isEmpty(word, text)) {
//   return null;

  // <--this above is the updated javascript from page 39 from updating isEmpty into boldPassage-->

function boldPassage(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;

  let boldedPassage = boldPassage(word, passage);
    if (boldedPassage) {
      document.querySelector("div#bolded-passage").append(boldedPassage);
    } else {
      document.querySelector("div#bolded-passage").innerText = null;
    }
}
window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});