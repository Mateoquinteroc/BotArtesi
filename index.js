import rwClient from "./twitterClient.js";
import getRandomWord from "./getRandomWord.js";

const ONE_HOUR = 1000 * 60 * 60;
const tweet = async () => {
  const randomWord = await getRandomWord();
  if (!randomWord) {
    return;
  }
  const tweet = `Si es ${randomWord} es arte`;
  console.log(`Tweeting: "${tweet}"`);
  try {
    await rwClient.v2.tweet(tweet);
  } catch (e) {
    console.error(e);
  }
};

setInterval(tweet, ONE_HOUR * 3);
