import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { I18nProvider } from "react-auto-i18n";

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<I18nProvider 
			defaultLang="eng_Latn" 
			dbSource={{ mode: "multi-file", path: "./translations" }}
		>
			<App />
		</I18nProvider>
	</StrictMode>,
)
