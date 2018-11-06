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

    for (let x = 1; x < interceptX; x += 1) {
        for (let y = 1; y < interceptY; y += 1) {
            for (let z = 1; z < interceptZ; z += 1) {
                let xP = (1 - (y / interceptY) - (z / interceptZ)) * interceptX;
                let yP = (1 - (x / interceptX) - (z / interceptZ)) * interceptY;
                let zP = (1 - (y / interceptY) - (x / interceptX)) * interceptZ;

                if (xP > 0 && yP > 0 && zP > 0) {
                    arrayX.push(xP.toFixed(1));
                    arrayY.push(yP.toFixed(1));
                    arrayZ.push(zP.toFixed(1));
                    break;
                }

            }
        }
    }



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

    let data = [trace1];
    return data;
}

const plotly = Plotly.newPlot('myDiv', getData(), layout, config);