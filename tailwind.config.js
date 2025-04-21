/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#6b46c1',
              '&:hover': {
                color: '#553c9a',
              },
            },
            h2: {
              color: '#1a202c',
              fontWeight: '700',
            },
            h3: {
              color: '#1a202c',
              fontWeight: '600',
            },
            blockquote: {
              borderLeftColor: '#6b46c1',
              color: '#4a5568',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}; 