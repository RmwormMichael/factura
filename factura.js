document.getElementById('agregar').addEventListener('click', () => {
  const tabla = document.getElementById('tabla-body');
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td contenteditable></td>
    <td contenteditable></td>
    <td contenteditable></td>
    <td contenteditable></td>
  `;
  tabla.appendChild(fila);
});

document.getElementById('descargar').addEventListener('click', () => {
  const factura = document.querySelector('.factura');
  const opt = {
    margin: 0.3,
    filename: 'Factura_GloboArte.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(factura).save();
});

