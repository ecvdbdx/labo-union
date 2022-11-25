interface Tweet {
	lang: string;
}

export function isTweetFr(tweet: Tweet) {
	return tweet.lang === 'fr';
}
