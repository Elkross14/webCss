let miCanvas=document.getElementById("temperature").getContext("2d");
        var chat = new Chart(miCanvas,{
            type:"bar",
            data:{
                labels:["8:00",
                       "8:00",
                       "8:00",
                       "8:00",
                       "8:00",
                       "8:00",
                       "8:00",
                       "8:00",
                       "8:00",
                       "8:00",
                       "8:00",
                       "8:00"],
                datasets:[
                    {
                        label:"temperatura",
                        backgroundColor: "rgba(255,150,51,0.5)",
                        borderColor: "rgba(255,150,51,1)",
                        borderWidth: 2,
                        data:[22, 15, 20, 17, 16, 14, 12, 15, 19, 20, 21, 19]
                    }]
            },
            options:{
                legend: {
                    display: false
                },
                 tooltips: {
                     callbacks: {
                          label: (tooltipItems, data) => {
                              return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + 'ºC';
                          }
                     },
                 },
                scales:{
                    yAxes:[{
                        ticks:{
                            min: 10,
                            max: 22
                        }
                    }]
                }
            }
        });