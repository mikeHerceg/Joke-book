import { JokeCard } from "../../components/joke-card";
import { Button } from "../../components/buttons/button";
import { ToggleButton } from "../../components/buttons/toggle-button";
import { Page } from "../../components/page";
import { Grid } from "../../components/grid";
import { useHome } from "./home.hooks";

export function Home({ ...props }) {
    const { loading, error, jokeList, settings, setSettings, handleJokes } =
        useHome();

    return (
        <Page title="Jokes">
            <>
                <ToggleButton
                    onClick={() => {
                        setSettings({
                            ...settings,
                            safeMode: !settings.safeMode,
                        });
                    }}
                    text={`SafeMode ${settings.safeMode ? "on" : "off"}`}
                    defaultValue={settings.safeMode}
                />
                <Button
                    onClick={() => handleJokes(settings)}
                    text="Get New Jokes"
                />
                {loading ? (
                    "loading..."
                ) : (
                    <>
                        {error && error}

                        {jokeList.length > 0 && (
                            <Grid>
                                {jokeList.map((jokeObj, index) => (
                                    <JokeCard jokeData={jokeObj} key={index} />
                                ))}
                            </Grid>
                        )}
                    </>
                )}
            </>
        </Page>
    );
}
