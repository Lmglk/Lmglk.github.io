export function classList(classes: Object): string {
    return Object.entries(classes)
        .filter(([key, value]) => value)
        .map(([key]) => key)
        .join(' ');
}
