let miCanvas2=document.getElementById("humidity").getContext("2d");
        var chat = new Chart(miCanvas2,{
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
                        label:"Humedad",
                        backgroundColor: "rgba(77,158,255,0.5)",
                        borderColor: "rgba(77,158,255,1)",
                        borderWidth: 2,
                        data:[44, 46, 50, 55, 57, 60, 61, 61, 59, 56, 52, 48]
                    }]
            },
            options:{
                legend: {
                    display: false
                },
                 tooltips: {
                     callbacks: {
                          label: (tooltipItems, data) => {
                              return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + '%';
                          }
                     },
                 },
                scales:{
                    yAxes:[{
                        ticks:{
                            min: 42,
                            max: 61
                        }
                    }]
                }
            }
        });