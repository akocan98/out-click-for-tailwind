const plugin = require('tailwindcss/plugin');

const outClick = plugin(
		function ({ addUtilities, theme }) {
			const values = theme('outClick');

			const utilities = Object.entries(values).map((duration) => {
				const key = duration[0];
				const val = duration[1];

				const transitionsProperties = [
					`background ease ${val.background}`,
					`outline ease ${val.outline}`,
					`outline-offset ease ${val.outline}`,
				].join(', ');

				return {
					[`.out-click-${key}`]: {
						transition: transitionsProperties,
						'outline-color': 'transparent',
						'outline-width': '2px',
						'outline-style': 'solid',
						'outline-offset': '3px',
						'&:active': {
							background: 'rgba(0, 0, 0, 0.2)',
							'outline-color': 'rgba(0, 0, 0, 0.2)',
							transition: 'none',
							'outline-offset': '0px',
						},
					},
				};
			});
			addUtilities(utilities);
		},
		{
			theme: {
				outClick: {
					100: {
						background: '100ms',
						outline: '200ms',
					},
					150: {
						background: '150ms',
						outline: '300ms',
					},
					200: {
						background: '200ms',
						outline: '400ms',
					},
					300: {
						background: '300ms',
						outline: '600ms',
					},
					400: {
						background: '400ms',
						outline: '800ms',
					},
					500: {
						background: '500ms',
						outline: '1000ms',
					},
				},
			},
		},
);
module.exports = outClick;
