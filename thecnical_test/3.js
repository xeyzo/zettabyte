const data = { i: 6, j: null, k: 3, l: 12 };


const sortable = Object.entries(data)
    .sort(([,a],[,b]) => a-(b))
    .reduce((r, [k, v]) => ({ ...r, [k]: v * 3 }), {});

console.log(sortable)