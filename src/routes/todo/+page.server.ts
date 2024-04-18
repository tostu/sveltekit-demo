import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {

	const todos = await (await fetch('https://jsonplaceholder.typicode.com/todos')).json();

	return {
		todos
	};
};


import type { Actions } from './$types';

export const actions = {
	default: async ({ request}) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		console.log(email);
		console.log(password)
	},
} satisfies Actions;
