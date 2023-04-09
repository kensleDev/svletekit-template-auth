import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals: { getSession } }) => {
	console.log(await getSession());
	return {
		session: await getSession()
	};
};
