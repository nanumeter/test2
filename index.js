var layout = {
    margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0
    }
};
var config = {
    displayModeBar: false,
    responsive: false
};



function getData() {
    let arrayX = [];
    let arrayY = [];
    let arrayZ = [];
    let interceptX;
    let interceptY;
    let interceptZ;
    //(interceptY * x) + (interceptX * y) = interceptX * interceptY
    //y = (interceptX * interceptY - (interceptY * x)) / interceptX

    if (Math.random() >= 0.66) {
        interceptX = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        interceptY = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
        interceptZ = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    } else if (Math.random() >= 0.33) {
        interceptX = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
        interceptY = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        interceptZ = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    } else {
        interceptX = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
        interceptY = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
        interceptZ = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    }

    let arrayX1 = [];
    let arrayY1 = [];
    let arrayZ1 = [];

    let arrayX2 = [];
    let arrayY2 = [];
    let arrayZ2 = [];



    for (let xi = 0; xi <= interceptX; xi += 1) {
        let x = xi.toFixed(1);
        let y = ((interceptX * interceptY - (interceptY * xi)) / interceptX).toFixed(1);
        let z = 0;

        arrayX.push(x);
        arrayY.push(y);
        arrayZ.push(z);

        arrayY1.push(y);
    }

    for (let yi = 0; yi <= interceptY; yi += 1) {
        let x = 0;
        let y = yi.toFixed(1);
        let z = ((interceptY * interceptZ - (interceptZ * yi)) / interceptY).toFixed(1);

        arrayX.push(x);
        arrayY.push(y);
        arrayZ.push(z);

        //arrayZ1.push(z);
    }


    for (let zi = 0; zi <= interceptZ; zi += 1) {
        let x = ((interceptZ * interceptX - (interceptX * zi)) / interceptZ).toFixed(1);
        let y = 0;
        let z = zi.toFixed(1);

        arrayX.push(x);
        arrayY.push(y);
        arrayZ.push(z);

        //arrayX1.push(x);
    }



    //
    //for (let x = 0; x <= interceptX; x += 1) {
    //    let x1 = x.toFixed(1);
    //    let y1 = ((interceptX * interceptY - (interceptY * x)) / interceptX).toFixed(1)
    //    let z1 = 0
    //
    //    for (let z = 0; z <= 100; z += 1) {
    //        let x2 = (((x1 - z) / z)).toFixed(1);
    //        let y2 = (((y1 - z) / z)).toFixed(1);
    //        let z2 = ((((z - interceptZ) / interceptZ)) * interceptZ).toFixed(1);
    //        arrayX1.push(x2);
    //        arrayY1.push(y2);
    //        arrayZ1.push(z2);
    //
    //    }
    //}
    //for (let x = 0; x <= interceptX; x += 1) {
    //    arrayX.push(x.toFixed(1));
    //    arrayY.push(((interceptX * interceptY - (interceptY * x)) / interceptX).toFixed(1));
    //    arrayZ.push(0);
    //}
    //for (let t = 0, idx = 0; idx < 100; t += 0.1, idx += 1) {
    //    let x1 = Number(arrayX1[idx]);
    //    let y1 = Number(arrayY1[idx]);
    //    let z1 = Number(arrayZ1[idx]);
    //    let x2 = Number(arrayX2[idx]);
    //    let y2 = Number(arrayY2[idx]);
    //    let z2 = Number(arrayZ2[idx]);
    //    let x = (x1 + (x2 - x1) * t).toFixed(1);
    //    let y = (y1 + (y2 - y1) * t).toFixed(1);
    //    let z = (z1 + (z2 - z1) * t).toFixed(1);
    //    arrayX.push(x);
    //    arrayY.push(y);
    //    arrayZ.push(z);
    //    console.log(x, y, z);
    //}

    let trace1 = {
        x: arrayX,
        y: arrayY,
        z: arrayZ,
        mode: 'markers',
        marker: {
            color: '#1f77b4',
            size: 1,
            symbol: 'circle',
            line: {
                color: 'rgb(0,0,0)',
                width: 0
            }
        },
        line: {
            color: '#1f77b4',
            width: 5
        },
        type: 'scatter3d'
    };

    let trace2 = {
        x: arrayX1,
        y: arrayY1,
        z: arrayZ1,
        mode: 'markers',
        marker: {
            color: '#8f77b4',
            size: 1,
            symbol: 'circle',
            line: {
                color: 'rgb(0,0,0)',
                width: 0
            }
        },
        line: {
            color: '#1f77b4',
            width: 5
        },
        type: 'scatter3d'
    };

    let data = [trace1, trace2];
    return data;
}

const plotly = Plotly.newPlot('myDiv', getData(), layout, config);