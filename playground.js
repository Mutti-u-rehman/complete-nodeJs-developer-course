console.time('testing');

const afterAllOperations = [];
    let largestNum = -1;
    
    for (let i=0; i<1000000; i++) afterAllOperations.push(0);
    
    // for(let i=0; i<queries.length; i++)
    // {
    //     for(let j= queries[i][0]-1; j<= queries[i][1]-1; j++) 
    //     {
    //         afterAllOperations[j] += queries[i][2];
            
    //         // if (largestNum < afterAllOperations[j]) {
    //         //     largestNum = afterAllOperations[j];
    //         // }
    //     }
    // }
    
    // console.log( afterAllOperations.sort((a,b) => a -b).pop());
    console.timeEnd('testing');

