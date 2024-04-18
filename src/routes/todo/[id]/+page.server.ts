import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const todo = await (await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)).json();
	return {
		todo
	};
};
