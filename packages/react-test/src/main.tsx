import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { I18nBinder, I18nProvider } from "react-auto-i18n";

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<I18nProvider 
			default_lang="eng_Latn" 
			default_database={{}}
		>
			<I18nBinder />
			<App />
		</I18nProvider>
	</StrictMode>,
)
