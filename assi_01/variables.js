// Global scope var example (hoisting and redeclaration)
var a = "Muhammad";
var abc;
var a = "Faraz";
document.write("var a = \"Muhammad\";<br>");
document.write("var abc;<br>");
document.write("var a = \"Faraz\";<br>");
document.write("console.log(a); // Outputs: " + a + "<br>");

// Block scope let example
{
    let b = "BlockLet";
    document.write("let b = \"BlockLet\";<br>");
    b = "UpdatedLet";
    document.write("b = \"UpdatedLet\";<br>");
    document.write("console.log(b); // Outputs: " + b + "<br>");
}

// Block scope const example
{
    const c = "BlockConst";
    document.write("const c = \"BlockConst\";<br>");
    document.write("console.log(c); // Outputs: " + c + "<br>");
}

// Function scope var example
function abc() {
    var a = "Faraz";
    document.write("// function scope var keyword<br>");
    document.write("function abc() {<br>");
    document.write("    var a = \"Faraz\";<br>");
    document.write("    console.log(a);<br>");
    document.write("}<br>");
    document.write("abc(); // Outputs: " + a + "<br>");
}
abc();