function sentenceCapitalize(sentence) {
  let capitalizedWords = [];
  for (word of sentence.split(' ')) {
    capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
  }

  return capitalizedWords.join(' ');
}

module.exports = sentenceCapitalize;
