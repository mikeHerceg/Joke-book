import React from "react";
import styles from "./joke-card.module.scss";
import {motion} from 'framer-motion';
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
    const jokeVariants = {
        initial:{
            y:20,
            opacity:0,
        },
        animate:{
            y:0,
            opacity:1,
        }
    }
    return (
        <motion.div
            variants={jokeVariants}
        >
            <Card style={{height:'100%'}}>
                <div
                    {...props}
                    data-testid="joke-card"
                    className={styles["joke-card"]}
                >
                    <JokeContent jokeData={jokeData} />
                </div>
            </Card>
        </motion.div>
    );
}
