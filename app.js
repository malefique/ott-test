let n = 3;

let size = 2*n - 1;

let matrix = [];

for(let i = 0; i < size; i++){
    for(let j = 0; j < size; j++){

        if(!matrix[i])
            matrix[i] = [];

        matrix[i].push(Math.floor((Math.random() * 100) + 1));
    }
}

function spiral(matrix, size){

    let output = [],
        i = 0,
        k = 0,
        l = 0,
        sizeX = size,
        sizeY = size;

    while (k < sizeY && l < sizeX)
    {
        for (i = l; i < sizeX; ++i)
            output.push(matrix[k][i]);
        k++;

        for (i = k; i < sizeY; ++i)
            output.push(matrix[i][sizeX-1]);
        sizeX--;

        if ( k < sizeY)
        {
            for (i = sizeX-1; i >= l; --i)
                output.push(matrix[sizeY-1][i]);

            sizeY--;
        }

        if (l < sizeX)
        {
            for (i = sizeY-1; i >= k; --i)
                output.push(matrix[i][l]);
            l++;
        }
    }

    return output.reverse();
}

for(let line of matrix)
    console.log(line);

console.log(spiral(matrix,size).join(' '));
