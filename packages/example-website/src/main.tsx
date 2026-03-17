import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { I18nMultiFileProvider } from "react-auto-i18n";

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<I18nMultiFileProvider 
			defaultLang="eng_Latn" 
			path="./translations"
		>
			<App />
		</I18nMultiFileProvider>
	</StrictMode>,
)
