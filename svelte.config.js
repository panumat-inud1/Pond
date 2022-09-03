import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	preprocess: preprocess({
		postcss: true,
	}),
	kit: {
		adapter: adapter({
			fallback: 'index.html',
		  })
	}
};

export default config;
