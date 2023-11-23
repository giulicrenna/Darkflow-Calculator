function draw(expression) {
    try {
      const expr = math.compile(expression)

      const xValues = math.range(-1000, 1000, 0.01).toArray()
      const yValues = xValues.map(function (x) {
        return expr.evaluate({x: x})
      })

      // render the plot using plotly
      const trace1 = {
        x: xValues,
        y: yValues,
        mode: 'lines',
        type: 'scatter'
      }

      var layout = {
        hover: 'closest',
        height: 600,
        xaxis: {
          title: 'X',
          showgrid: true,
          zeroline: true,
          zerolinecolor: 'red',
          zerolinewidth: 2,
          range: [-10, 10]
        },
        yaxis: {
          title: 'Y',
          showline: true,
          zerolinecolor: 'red',
          zerolinewidth: 2,
          range: [-10, 10]
        },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)'
      };

      var config = {responsive: true}

      const data = [trace1]
      Plotly.newPlot('plot', data, layout, config);
    }
    catch (err) {
      console.error(err)
      alert(err)
    }
  }
