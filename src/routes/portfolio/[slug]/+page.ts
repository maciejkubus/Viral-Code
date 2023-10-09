import portfolios from '$lib/data/portfolios';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {

  const portfolio = portfolios.find(portfolio => portfolio.slug == params.slug);

	if (portfolio) {
		return {
			portfolio
		};
	}

	throw error(404, 'Not found');
};