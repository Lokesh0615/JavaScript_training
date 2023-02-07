let xArray=[50,60,70,80,90,85,95,100,120,125,130,140];
console.log(xArray.length);
let yArray=[7,8,9,9,9,10,10.5,11,12,12,13,14];
console.log(yArray.length);

var data=[{
    x:xArray,
    y:yArray,
    // mode:"lines",
    type:"curve"
}];

var layout={
    xaxis:{range:[40,160], title:"sq m"},
    yaxis:{range:[5,16], title:"price in rupees"},
    title: "house price vs size"
};
//show is getelementbyid
Plotly.newPlot("show",data,layout);