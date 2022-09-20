import { JokeModel, JokeParams } from "../../generic.types";
import { getJokes } from "../../services/getJokes";
import { useEffect, useState } from "react";

export  function useHome() {
    const initialSettings = {
        safeMode:true
    }
    const [jokeList, setJokes] = useState<JokeModel[]>([]);

    const [settings, setSettings] = useState(initialSettings);

    const [error, setError] = useState<string | null>();

    const [loading, setLoading] = useState<boolean>(false);


    const handleJokes = async (jokeParams?: JokeParams) => {
        setLoading(true)
        const {jokes, error} = await getJokes(jokeParams)
        if (error){
            setError(`sorry we couldn't retrieve more jokes :(`)
            setLoading(false);
            return
        }
        if (jokes){
            setError(null)
            setJokes(jokes)
            setLoading(false)
        }
    };

    useEffect(() => {
        handleJokes(settings);
    }, []);

    useEffect(() => {

    }, [settings]);

    return ({
        jokeList,
        error,
        loading,
        settings,
        setSettings,
        handleJokes,
    })
}
