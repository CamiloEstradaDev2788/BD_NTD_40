let graficoCircular = document.getElementById('graficoCircular').getContext('2d');
let grraficoBarras = document.getElementById('graficoBarras').getContext('2d');

// Datos para el gráfico circular
const datosTituloCircular = RevistasCantidadArticulos.map(item => item.revista);
const datosCircular = RevistasCantidadArticulos.map(item => item.articulos);

// Datos para el gráfico de barras
const datosTituloBarras = Array.from(new Set(RevistasDocumentosPorAnios.map(item => item.revista)));
const datosAnioBarras = Array.from(new Set(RevistasDocumentosPorAnios.map(item => item.anio))).sort();
const datosDocumentosBarras = RevistasDocumentosPorAnios.map(item => item.documentos);

const datasetsPorAnio = datosTituloBarras.map(revista => {
return {
    label: revista,
    data: datosAnioBarras.map(anio => {
    const registro = RevistasDocumentosPorAnios.find(d => d.revista === revista && d.anio === anio);
    return registro ? registro.documentos : 0;
    }),
    borderWidth: 2,
    borderColor: getRandomColor(), // función para darle color distinto a cada revista
    backgroundColor: getRandomColor(0.5), // semitransparente si es barra
};
});

// Crear el gráfico circular
let chart = new Chart(graficoCircular, {
type: 'doughnut',
data: {
    labels: datosTituloCircular,
    datasets: [{
    label: 'Cantiddad de artículos',
    data: datosCircular,
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

// Crear el gráfico de barras
let chartBarras = new Chart(grraficoBarras, {
type: 'line',
data: {
    labels: datosAnioBarras,
    datasets: datasetsPorAnio
},
options: {
    responsive: true,
    plugins: {
    title: {
        display: true,
        text: "Documentos por revista y año"
    }
    }
}
});

function getRandomColor(alpha = 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r},${g},${b},${alpha})`;
}
