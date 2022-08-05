const students = [
    { firstName: 'Kai', lastName: 'Lyons' },
    { firstName: 'Belle', lastName: 'Norton' },
    { firstName: 'Finnley', lastName: 'Rennie' },
    { firstName: 'Tatiana', lastName: 'Dickerson' },
    { firstName: 'Peyton', lastName: 'Gardner' },
  ];
  
const groups = 3;

function result(items, group){
    items.sort((a, b) => {
        const nameA = a.firstName.toUpperCase(); 
        const nameB = b.firstName.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        return 0;
     });

    while (items.length > 0) {

    const chunk = items.splice(0, group - 1)
      
    console.log(chunk)
    
    }
}

result(students, groups)

