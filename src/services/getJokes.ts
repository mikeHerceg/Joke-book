import { JokeParams } from "../generic.types";

export const getJokes = async (jokeParams?: JokeParams) => {
    let url = `https://v2.jokeapi.dev/joke/Any?amount=10`;
    if (jokeParams) {
        const { amount, categories, safeMode, search } = jokeParams;
        //Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?safe-mode&amount=10
        if (safeMode){
            url = url+`&safe-mode`
        }
    }
    const res  = await fetch(url);
    const data = await res.json();
    return data
};
