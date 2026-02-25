import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import type React from 'react';
import { useMemo } from 'react';
import { __t, useI18n, type LangCode } from 'react-auto-i18n';

export default function App(): React.ReactElement
{
	const i18n = useI18n();
	const text = useMemo(() => {
		return __t("main_message", "Hello there! this is a test message for the 'react-auto-i18n' program.")
	}, [i18n])

	return (
		<Box>
			<Typography>
				{`Selected Locale: ${i18n.locale}`}
			</Typography>
			<Typography>
				{text}
			</Typography>
			<Box>
				{Object.keys(i18n.database).map(l => (
					<Button
						onClick={() => i18n.setLocale(l as LangCode)}
					>
						{l}
					</Button>
				))}
			</Box>
		</Box>
	)
}