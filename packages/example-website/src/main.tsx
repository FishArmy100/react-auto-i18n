import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { I18nProvider } from "react-auto-i18n";
import db from "./assets/translations.json";

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<I18nProvider 
			defaultLang="eng_Latn" 
			defaultDatabase={db}
		>
			<App />
		</I18nProvider>
	</StrictMode>,
)
