export enum Tags {
 h1='h1',
 h2 = 'h2',
 h3 = 'h3',
 h4 = 'h4',
 p = 'p',
 strong = 'strong',
 b ='b',
 span = 'span',
}

export enum JokeType {
    TwoPart = "twopart",
    Single = "single",
}

export type Category = 'programming' |
'misc' |
'dark' |
'pun' |
'spooky' |
'christmas';

export type JokeParams = {
    amount?:number,
    categories?:Category[] | Category,
    safeMode?: boolean,
    search?:string,
};

export type JokeModel = {
    type: JokeType;
    joke: string;
    setup: string;
    delivery: string;
}
