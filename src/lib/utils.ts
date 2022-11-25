export interface Tweet {
	lang: string;
}

export function isTweetFr(tweet: Tweet): boolean {
	if (!tweet) {
		throw new Error('tweet is undefined');
	}

	return !!tweet.lang.startsWith('fr');
}
