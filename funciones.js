let graficoCircular = document.getElementById('graficoCircular').getContext('2d');
let datos =[
    {bd: "SPRINGER NATURE Link", articulos: 1500},
]

let chart = new Chart(graficoCircular, {
type: 'doughnut',
data: {
    labels: [
    'Organizaciones que utilizan servicios en la nube',
    'Organizaciones que no utilizan servicios en la nube'
    ],
    datasets: [{
    label: 'Artículos sobre ciberseguridad en la nube',
    data: [93, 7],
    backgroundColor: [
        '#1e90ff', // azul
        '#ff6384'  // rojo
    ]
    }]
},
options: {
    responsive: true,
    plugins: {
    legend: {
        position: 'bottom'
    },
    }
}
});
