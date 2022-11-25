import { describe, it, expect } from 'vitest';

import { isTweetFr } from './utils';

describe('isTweetFr', () => {
	it('renvoie true pour un tweet français', () => {
		const res = isTweetFr({ lang: 'fr' });

		expect(res).toBe(true);
	});
});
