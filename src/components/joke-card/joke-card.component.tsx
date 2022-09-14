import React from "react";
import styles from "./joke-card.module.scss";
import { Card } from "../atoms";

enum JokeType {
    TwoPart = "twopart",
    Single = "single",
}

interface JokeCardProps {
    jokeData: {
        type: JokeType;
        joke: string;
        setup: string;
        delivery: string;
    };
}

export function JokeCard({ jokeData, ...props }: JokeCardProps) {
    const { type, joke, setup, delivery } = jokeData;
    return (
        <Card>
            <div
                {...props}
                data-testid="joke-card"
                className={styles["joke-card"]}
            >
                {type === JokeType.Single ? (
                    <p>{joke}</p>
                ) : (
                    <p>
                        {setup}
                        <br />
                        {delivery}
                    </p>
                )}
            </div>
        </Card>
    );
}
