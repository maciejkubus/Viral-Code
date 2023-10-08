
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const theme: CustomThemeConfig = {
    name: 'theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `'Inter', sans-serif`,
		"--theme-font-family-heading": `'Gabarito', cursive`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "8px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #f55768 
		"--color-primary-50": "254 230 232", // #fee6e8
		"--color-primary-100": "253 221 225", // #fddde1
		"--color-primary-200": "253 213 217", // #fdd5d9
		"--color-primary-300": "251 188 195", // #fbbcc3
		"--color-primary-400": "248 137 149", // #f88995
		"--color-primary-500": "245 87 104", // #f55768
		"--color-primary-600": "221 78 94", // #dd4e5e
		"--color-primary-700": "184 65 78", // #b8414e
		"--color-primary-800": "147 52 62", // #93343e
		"--color-primary-900": "120 43 51", // #782b33
		// secondary | #6255BF 
		"--color-secondary-50": "231 230 245", // #e7e6f5
		"--color-secondary-100": "224 221 242", // #e0ddf2
		"--color-secondary-200": "216 213 239", // #d8d5ef
		"--color-secondary-300": "192 187 229", // #c0bbe5
		"--color-secondary-400": "145 136 210", // #9188d2
		"--color-secondary-500": "98 85 191", // #6255BF
		"--color-secondary-600": "88 77 172", // #584dac
		"--color-secondary-700": "74 64 143", // #4a408f
		"--color-secondary-800": "59 51 115", // #3b3373
		"--color-secondary-900": "48 42 94", // #302a5e
		// tertiary | #F5C67D 
		"--color-tertiary-50": "254 246 236", // #fef6ec
		"--color-tertiary-100": "253 244 229", // #fdf4e5
		"--color-tertiary-200": "253 241 223", // #fdf1df
		"--color-tertiary-300": "251 232 203", // #fbe8cb
		"--color-tertiary-400": "248 215 164", // #f8d7a4
		"--color-tertiary-500": "245 198 125", // #F5C67D
		"--color-tertiary-600": "221 178 113", // #ddb271
		"--color-tertiary-700": "184 149 94", // #b8955e
		"--color-tertiary-800": "147 119 75", // #93774b
		"--color-tertiary-900": "120 97 61", // #78613d
		// success | #6ADACA 
		"--color-success-50": "233 249 247", // #e9f9f7
		"--color-success-100": "225 248 244", // #e1f8f4
		"--color-success-200": "218 246 242", // #daf6f2
		"--color-success-300": "195 240 234", // #c3f0ea
		"--color-success-400": "151 229 218", // #97e5da
		"--color-success-500": "106 218 202", // #6ADACA
		"--color-success-600": "95 196 182", // #5fc4b6
		"--color-success-700": "80 164 152", // #50a498
		"--color-success-800": "64 131 121", // #408379
		"--color-success-900": "52 107 99", // #346b63
		// warning | #F5C67D 
		"--color-warning-50": "254 246 236", // #fef6ec
		"--color-warning-100": "253 244 229", // #fdf4e5
		"--color-warning-200": "253 241 223", // #fdf1df
		"--color-warning-300": "251 232 203", // #fbe8cb
		"--color-warning-400": "248 215 164", // #f8d7a4
		"--color-warning-500": "245 198 125", // #F5C67D
		"--color-warning-600": "221 178 113", // #ddb271
		"--color-warning-700": "184 149 94", // #b8955e
		"--color-warning-800": "147 119 75", // #93774b
		"--color-warning-900": "120 97 61", // #78613d
		// error | #f55768 
		"--color-error-50": "254 230 232", // #fee6e8
		"--color-error-100": "253 221 225", // #fddde1
		"--color-error-200": "253 213 217", // #fdd5d9
		"--color-error-300": "251 188 195", // #fbbcc3
		"--color-error-400": "248 137 149", // #f88995
		"--color-error-500": "245 87 104", // #f55768
		"--color-error-600": "221 78 94", // #dd4e5e
		"--color-error-700": "184 65 78", // #b8414e
		"--color-error-800": "147 52 62", // #93343e
		"--color-error-900": "120 43 51", // #782b33
		// surface | #201E1F 
		"--color-surface-50": "222 221 221", // #dedddd
		"--color-surface-100": "210 210 210", // #d2d2d2
		"--color-surface-200": "199 199 199", // #c7c7c7
		"--color-surface-300": "166 165 165", // #a6a5a5
		"--color-surface-400": "99 98 98", // #636262
		"--color-surface-500": "32 30 31", // #201E1F
		"--color-surface-600": "29 27 28", // #1d1b1c
		"--color-surface-700": "24 23 23", // #181717
		"--color-surface-800": "19 18 19", // #131213
		"--color-surface-900": "16 15 15", // #100f0f
		
	}
}