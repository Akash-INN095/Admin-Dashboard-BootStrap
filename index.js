document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [{
                label: 'Sales per Week',
                data: [16000, 22000, 18000, 24000, 23000, 24000, 12000],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: '#0d6efd', // Changed color here
                borderWidth: 2,
                pointBackgroundColor: '#0d6efd', // Changed color here
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 5,
                tension: 0.4, // Added tension to make the line curved
                fill: true // Fill the area under the line
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Days of the Week'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Value'
                    }
                }
            }
        }
    });
});
