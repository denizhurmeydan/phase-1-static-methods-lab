class Formatter {
  //add static methods here
 
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^\w\s-']/g, '');
  }

  static titleize(str) {
    const lowercaseWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = str.split(' ');

    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !lowercaseWords.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });

    return titleizedWords.join(' ');
  }

}