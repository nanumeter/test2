var data = [{
    x: [1, 2, 3, 4, 5, 100],
    y: [1, 2, 3, 4, 5, 100],
    z: [1, 2, 3, 4, 5, 100],
    mode: 'markers',
    marker: {
        color: '#1f77b4',
        size: 3,
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
}];
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

Plotly.newPlot('myDiv', data, layout, config);