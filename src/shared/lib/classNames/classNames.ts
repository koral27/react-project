type Mods = Record<string, string | boolean>;

export const classNames = (mainClass: string, mods: Mods, additional: string[]): string => {
    return [
        mainClass,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className)
    ].join(' ')
}