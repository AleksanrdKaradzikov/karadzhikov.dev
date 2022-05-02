export const toPascalCase = (string: string) => {
    return string.replace(/\w+/g, function (word) {
        return word[0].toUpperCase() + word.slice(1).toLocaleLowerCase();
    })
}