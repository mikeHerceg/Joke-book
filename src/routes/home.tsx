import { useEffect, useState } from "react";
import { JokeCard } from "../components/joke-card";
import { Button } from "../components/buttons/button";
import { ToggleButton } from "../components/buttons/toggle-button";
import { JokeParams } from "../generic.types";
import { getJokes } from "../services/getJokes";
import { Page } from "../components/page";
import { Grid } from "../components/grid";

export function Home({ ...props }) {
    const initialSettings = {
        safeMode:true
    }
    const [jokes, setJokes] = useState([]);

    const [settings, setSettings] = useState(initialSettings);

    const [error, setError] = useState<string | null>();

    const [loading, setLoading] = useState<boolean>(false);


    const handleJokes = async (jokeParams?: JokeParams) => {
        setLoading(true)
        const {jokes, error} = await getJokes(jokeParams)
       console.log({jokes, error})
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

    return (
        <Page title="Jokes">
            <>
                <ToggleButton onClick={()=>{setSettings({...settings,safeMode:!settings.safeMode})}} text={`SafeMode ${settings.safeMode ? 'on' : 'off'}`} defaultValue={settings.safeMode} />
                <Button onClick={() => handleJokes(settings)} text="Get New Jokes" />
                {loading ? 'loading...' :
                    <>
                        {error && error}

                        {jokes.length > 0 && (
                            <Grid>
                                {jokes.map((jokeObj, index) => (
                                    <JokeCard jokeData={jokeObj} key={index} />
                                ))}
                            </Grid>
                        )}
                    </>
                }
            </>
        </Page>
    );
}
