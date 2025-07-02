console.log("--- Key-Value Swap (Object.entries() + map()) ---");

const roles = {
    admin: "Alice",
    editor: "Bob",
    viewer: "Charlie"
};

const swappedEntries = Object.entries(roles).map(([key, value]) => {
    return [value, key];
});

const swappedRoles = Object.fromEntries(swappedEntries);

console.log("Original Roles:", roles);
console.log("Swapped Roles:", swappedRoles);