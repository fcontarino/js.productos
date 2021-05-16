var productos = [
    {
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_787957-MLA32582052561_102019-V.webp',
        titulo: 'Heladera Philco PHCT360 blanca con freezer 360L 220V',
        empresa: 'Mall 360',
        precioAnterior: '70.499',
        precio: '60.299',
        descuento: '14',
        cuotas: '18',
        envioGratis: true
    },
    {
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_965028-MLA32542008594_102019-V.webp',
        titulo: 'Heladera Patrick HPK135 blanca con freezer 264L 220V',
        precio: '38.700',
        envioGratis: false
    },
    {
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_602565-MLA32542008619_102019-V.webp',
        titulo: 'Heladera Patrick HPK151M11 black steel con freezer 388L 220V',
        empresa: 'Patrick',
        precioAnterior: '92.799',
        precio: '73.999',
        descuento: '20',
        cuotas: '18',
        envioGratis: false
    }
]

var productosDiv = document.getElementById('productos');

for (var i = 0; i < productos.length; i++) {
    var producto = productos[i];
    var article = document.createElement('article');
    article.className = 'producto';

    var izq = document.createElement('div');
    izq.className = 'izq';

    var img = document.createElement('img');
    img.src = producto.imagen;
    img.alt = producto.titulo

    izq.appendChild(img);

    var der = document.createElement('div');
    der.className = 'der';

    var h2 = document.createElement('h2');
    h2.textContent = producto.titulo;
    h2.className = 'titulo';
    der.appendChild(h2);

    if (producto.empresa) {
        var empresa = document.createElement('p');
        empresa.className = 'empresa';
        empresa.textContent = `Vendido por ${producto.empresa}`;
        der.appendChild(empresa);
    }

    if (producto.precioAnterior) {
        var precioAnterior = document.createElement('p');
        precioAnterior.className = 'precio-anterior';
        precioAnterior.textContent = `$ ${producto.precioAnterior}`;
        der.appendChild(precioAnterior);
    }

    var precio = document.createElement('p');
    precio.className = 'precio';
    precio.textContent = `$ ${producto.precio}`;
    der.appendChild(precio);

    if (producto.descuento) {
        var descuento = document.createElement('p');
        descuento.className = 'descuento';
        descuento.textContent = `${producto.descuento}% OFF`;
        der.appendChild(descuento);
    }

    if (producto.cuotas) {
        var cuotas = document.createElement('p');
        cuotas.className = 'cuotas';
        cuotas.textContent = `Hasta ${producto.cuotas} cuotas sin interés`;
        der.appendChild(cuotas);
    }

    if (producto.envioGratis) {
        var envio = document.createElement('p');
        envio.className = 'envio';
        envio.textContent = `Envío gratis`;
        der.appendChild(envio);
    }
    

    article.append(izq, der);
    productosDiv.appendChild(article);
}