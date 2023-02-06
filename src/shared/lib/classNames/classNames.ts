type Mods = Record<string, string | boolean>;

export const classNames = (mainClass: string, mods: Mods = {}, additional: string[] = []): string => {
    return [
        mainClass,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ')
}