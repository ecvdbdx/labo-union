import { describe, it, expect } from 'vitest';

import { isTweetFr } from './utils';

describe('isTweetFr', () => {
	it('It should return true if the tweet is in french', () => {
		const res = isTweetFr({ lang: 'fr' });

		expect(res).toBe(true);
	});

	it('It should return true if the tweet is in french-canadian', () => {
		const res = isTweetFr({ lang: 'fr-ca' });

		expect(res).toBe(true);
	});

	it('It should return false if the tweet is not in french', () => {
		const res = isTweetFr({ lang: 'de' });

		expect(res).toBe(false);
	});

	it('It should return false if the tweet has no lang', () => {
		const res = isTweetFr({ lang: '' });

		expect(res).toBe(false);
	});

	it('It should throw exception if the tweet is undefined', () => {
		// @ts-expect-error Need to test if functions throws exception on undefined
		expect(() => isTweetFr(undefined)).toThrow(Error);
	});
});
