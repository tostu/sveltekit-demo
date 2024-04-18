import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	const todos = await (await fetch('https://jsonplaceholder.typicode.com/todos')).json();
	return json(todos);
};
