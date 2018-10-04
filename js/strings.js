const capitalize = (word) =>  word.slice(0, 1).toUpperCase() + word.slice(1, w.length);

const kebabToHuman = (word) => word.split('-').map(w => capitalize(w)).join(" ");

const kebabify = (word) => word.split(' ').map(w => w.toLowerCase()).join("-");

const camelToKebab = (word) => word.split(/(?=[A-Z])/).map(word => word.toLowerCase()).join("-");

const camelify = (word) => word.split(' ').map((w, index) => index > 0 ? capitalize(w.toLowerCase()) : w.toLowerCase()).join('');