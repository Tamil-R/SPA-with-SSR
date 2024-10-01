export function load() {
	console.log('SERVER: loading ssr ....');
	// Place where we can load the data for page from DB
	return {
		title: 'From SSR'
	};
}
