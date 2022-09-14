import { JokeParams } from "../generic.types";

export const getJokes = (jokeParams?: JokeParams) => {
    let url = `https://v2.jokeapi.dev/joke/Any?amount=10`;
    if (jokeParams) {
        const { amount, categories, safeMode, search } = jokeParams;
        //Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?safe-mode&amount=10
        if (safeMode){
            url = url+`&safe-mode`
        }
    }
    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err));
};
