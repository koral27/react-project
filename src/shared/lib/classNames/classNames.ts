type Mods = Record<string, string | boolean>;

export const classNames = (mainCls: string, mods: Mods = {}, additional: string[] = []): string => {
	return [
		mainCls,
		...additional.filter(Boolean),
		...Object.entries(mods)
			.filter(([, value]) => Boolean(value))
			.map(([className]) => className),
	].join(' ');
};
