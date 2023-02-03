const ctx = document.getElementById('linechart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janvier', 'Fivrier', 'Mars', 'Avril', 'Mai', 'Jui', 'Juillet', 'Aout', 'Septembre', 'Octobre','Novembre','Decembre'],
        datasets: [{
            label: 'Nombre de fichiers',
            data: [4, 15, 3, 10, 7, 3,13,10,18,14,6,8],
            backgroundColor: [
                'rgba(81, 81, 219, 1)',
            ],
            borderColor: [
                'rgba(101, 101, 223)',
            ],
            borderWidth: 2
        }]
    },
    options: {
       responsive:true
    }
});