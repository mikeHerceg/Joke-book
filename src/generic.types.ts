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
