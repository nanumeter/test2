var layout = {
    height: "600px",
    dragmode: false,
    hovermode: 'closest',
    clickmode: "event+select",
    margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0
    },
    scene: {
        camera: {
            eye: {
                x: 1,
                y: 1.5,
                z: 0.5
            }
        }
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

    for (let x = 0; x < interceptX; x += 1) {
        for (let y = 0; y < interceptY; y += 1) {
            for (let z = 0; z < interceptZ; z += 1) {
                let result = Number((x / interceptX).toFixed(2)) + Number((y / interceptY).toFixed(2)) + Number((z / interceptZ).toFixed(2));
                if (result > 0.98 && result < 1.02) {
                    arrayX.push(x);
                    arrayY.push(y);
                    arrayZ.push(z);
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

var myPlot = document.getElementById('myDiv')
myPlot.on('plotly_click', function (data) {
    var pts = '';
    for (var i = 0; i < data.points.length; i++) {
        pts = 'x = ' + data.points[i].x.toFixed(2) + '\ny = ' +
            data.points[i].y.toFixed(2) + '\nz= ' + data.points[i].z.toFixed(2) + '\n\n';
    }
    alert('Closest point clicked:\n\n' + pts);
});