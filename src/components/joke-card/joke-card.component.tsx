import React from "react";
import styles from "./joke-card.module.scss";
import { Card } from "../atoms";
import { JokeModel, JokeType } from "../../generic.types";

interface JokeCardProps {
    jokeData: JokeModel;
}

function JokeContent({ jokeData }: JokeCardProps) {
    const { type, joke, setup, delivery } = jokeData;
    if (type === JokeType.Single) {
        return (
            <>
                <h3>One Liner Joke</h3>
                <p>{joke}</p>
            </>
        );
    }
    return (
        <>
            <h3>Two Part Joke</h3>
            <p>
                <b>Setup</b>: {setup}
            </p>
            <p>
                <b>Punchline</b>: {delivery}
            </p>
        </>
    );
}

export function JokeCard({ jokeData, ...props }: JokeCardProps) {
    return (
        <Card>
            <div
                {...props}
                data-testid="joke-card"
                className={styles["joke-card"]}
            >
                <JokeContent jokeData={jokeData} />
            </div>
        </Card>
    );
}
