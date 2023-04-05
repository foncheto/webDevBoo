function capitalize(input) {
    let letter = input[0]
    letter.toUpperCase()
    input.splice(0,1)
    input = letter + input
    return input;
}