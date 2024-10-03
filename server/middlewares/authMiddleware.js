const inappropriateWords = ['word1', 'word2', 'word3', 'word4', 'word5', 'word6', 'word7', 'word8', 'word9', 'word10'];

const filterUsername = (req, res, next) => {
  const { username } = req.body; // Assuming the username is sent in the request body
  
  // Check if the username contains any inappropriate words
  const containsInappropriateWord = inappropriateWords.some(word => username.toLowerCase().includes(word.toLowerCase()));
  
  if (containsInappropriateWord) {
    return res.status(400).json({ message: 'Username contains inappropriate words' });
  }
  
  // If username is clean, proceed to next middleware
  next();
};

export { filterUsername };
