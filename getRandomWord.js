import fetch from "node-fetch";

async function getRandomWord() {
  try {
    const res = await fetch(
      "https://palabras-aleatorias-public-api.herokuapp.com/random-by-type?types=adjetivo"
    ).then((response) => response.json());

    return res.body.Word;
  } catch (error) {
    console.error(error);
  }
}

export default getRandomWord;
