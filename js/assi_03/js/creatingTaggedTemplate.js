// --- creatingTaggedTemplate.js ---

console.log("--- Creating a Tagged Template ---");

function logTag(strings, ...values) {
    console.log("Strings array:", strings);
    console.log("Values array:", values);

    let result = "";
    strings.forEach((s, i) => {
        result += s;
        if (i < values.length) {
            result += `[${values[i]}]`;
        }
    });
    return `--- Tagged Output ---\n${result}`;
}

const user = "John Doe";
const role = "Developer";
const message = logTag`User: ${user}, Role: ${role}. Welcome!`;

console.log(message);