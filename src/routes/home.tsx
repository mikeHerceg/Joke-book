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

    const [error, setError] = useState<string>();

    const handleJokes = (jokeParams?: JokeParams) => {
        getJokes(jokeParams).then((data) => {
            if (!data.error) {
                return setJokes(data.jokes);
            }
            return setError("could not retrieve jokes");
        });
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
                {error && error}

                {jokes.length > 0 && (
                    <Grid>
                        {jokes.map((jokeObj, index) => (
                            <JokeCard jokeData={jokeObj} key={index} />
                        ))}
                    </Grid>
                )}
            </>
        </Page>
    );
}
