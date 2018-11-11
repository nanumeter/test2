var layout = {
    "width": 500,
    "height": 500,
    hovermode: 'closest',
    clickmode: "event+select",
    yaxis: {
        title: "X2",
        fixedrange: true,
        range: [0, 100]
    },
    xaxis: {
        title: "X1",
        fixedrange: true,
        range: [0, 100]
    }
};
var config = {
    displayModeBar: false,
    responsive: false
};



function getData() {
    let arrayX = [];
    let arrayY = [];
    let interceptX;
    let interceptY;
    //(interceptY * x) + (interceptX * y) = interceptX * interceptY
    //y = (interceptX * interceptY - (interceptY * x)) / interceptX

    if (Math.random() >= 0.5) {
        interceptX = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        interceptY = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    } else {
        interceptX = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
        interceptY = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    }
    for (let x = 0; x <= interceptX; x += 0.1) {
        arrayX.push(x.toFixed(1));
        arrayY.push(((interceptX * interceptY - (interceptY * x)) / interceptX).toFixed(1));
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