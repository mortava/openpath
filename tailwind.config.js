/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        pipeline: {
          lead: '#8b5cf6',
          application: '#3b82f6',
          processing: '#f59e0b',
          underwriting: '#f97316',
          ctc: '#10b981',
          closing: '#06b6d4',
          funded: '#22c55e',
          postclose: '#6b7280',
        },
        success: '#30d158',
        warning: '#ff9f0a',
        error: '#ff453a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.06)',
        'elevated': '0 1px 3px rgba(0,0,0,0.04), 0 6px 16px rgba(0,0,0,0.06)',
      },
      backdropBlur: {
        glass: '20px',
      },
    },
  },
  plugins: [],
}
