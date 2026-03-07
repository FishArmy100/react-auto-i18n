import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import type React from 'react';
import { useMemo, useState } from 'react';
import { __t, __tv, useI18n, type LangScriptCode } from 'react-auto-i18n';

export default function App(): React.ReactElement
{
	const [appleCount, setAppleCount] = useState(0);

	const i18n = useI18n();
	const text = useMemo(() => {
		return __t("main_message", "Hello there! this is a test message for the {{'react-auto-i18n'}} program.")
	}, [i18n]);

	const apples = useMemo(() => {
		return __tv("test.message.v", [
			["You have one apple", ({count}) => count == 1],
			["You have {{$count}} apples", ({count}) => count > 1],
			"You have no apples"
		], { count: appleCount })
	}, [appleCount, i18n]);

	let lang = i18n.getLocaleObj();

	return (
		<Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
			<Typography>
				{`Selected Locale: ${lang.getLangCode()}`}
				&nbsp;
				{lang.getCountryFlag()}
			</Typography>
			<Typography>
				{text}
			</Typography>

			{/* Apple counter */}
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
				<Button variant="outlined" onClick={() => setAppleCount(c => Math.max(0, c - 1))}>−</Button>
				<Typography>{apples}</Typography>
				<Button variant="outlined" onClick={() => setAppleCount(c => c + 1)}>+</Button>
			</Box>

			{/* Language switcher */}
			<Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
				{Object.keys(i18n.database).map(l => (
					<Button
						key={l}
						variant={lang.getLangCode() === l ? 'contained' : 'outlined'}
						onClick={() => i18n.setLocale(l as LangScriptCode)}
					>
						{l}
					</Button>
				))}
			</Box>
		</Box>
	)
}