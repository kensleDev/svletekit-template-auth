import { defineConfig, presetIcons, presetTypography, presetUno, presetWebFonts } from 'unocss';

const safelist = ['prose', 'prose-sm', 'm-auto', 'text-left'];

export default defineConfig({
	shortcuts: [
		[
			'btn',
			'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'
		],
		[
			'icon-btn',
			'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'
		],
		['flex-center', 'flex justify-center'],
		['flex-center-all', 'flex items-center justify-center']
	],
	presets: [
		presetUno(),
		// presetAttributify(),
		presetIcons({
			scale: 1.2,
			warn: true
		}),
		presetTypography(),
		presetWebFonts({
			fonts: {
				sans: 'DM Sans',
				serif: 'DM Serif Display',
				mono: 'DM Mono'
			}
		})
	],
	preflights: [
		{
			getCSS: ({ theme }) => `
                * {
                    box-sizing: border-box;
                    font-family: 'DM Sans'
                }

                h1, h2, h3, h4, h5, h6 {
                    font-family: 'DM Sans'
                }
            `
		}
		// {
		// 	getCSS: ({ theme }) => `
		//         * {
		//             color: ${theme.colors.gray?.[700] ?? '#333'};
		//             padding: 0;
		//             margin: 0;
		//         }
		//     `
		// }
	],
	// transformers: [transformerDirectives(), transformerVariantGroup()],
	safelist
});
