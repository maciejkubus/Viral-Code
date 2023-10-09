import posts from '$lib/data/posts';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {

  const post = posts.find(post => post.slug == params.slug);

	if (post) {
		return {
			post
		};
	}

	throw error(404, 'Not found');
};