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

for (var i = 0; i < productos.length ; i++){
    var article = document.createElement('article')
    article.className = 'producto'
    productosDiv.appendChild(article)

    var divIzq = document.createElement('div')
    divIzq.className = 'izq'
    article.appendChild(divIzq)

    var img = document.createElement('img')
    divIzq.appendChild(img)
    img.src = productos[i].imagen
    img.alt = productos[i].titulo

    var divDer = document.createElement('div')
    article.appendChild(divDer)
    divDer.className = 'der'

    var titulo = document.createElement('h2')
    divDer.appendChild(titulo)
    titulo.className = 'titulo'
    titulo.innerHTML = productos[i].titulo

    if (productos[i].empresa){
        var empresa = document.createElement('p')
        divDer.appendChild(empresa)
        empresa.className = 'empresa'
        empresa.innerHTML = `Vendido por ${productos[i].empresa}`
    }

    if(productos[i].precioAnterior){
        var precioAnterior = document.createElement('p')
        divDer.appendChild(precioAnterior)
        precioAnterior.className = 'precio-anterior'
        precioAnterior.innerHTML = `$ ${productos[i].precioAnterior}`
    }
    
    if(productos[i].precio){
        var precio = document.createElement('p')
        divDer.appendChild(precio)
        precio.className = 'precio'
        precio.innerHTML = `$ ${productos[i].precio}`
    }

    if(productos[i].descuento){
        var descuento = document.createElement('p')
        divDer.appendChild(descuento)
        descuento.className = 'descuento'
        descuento.innerHTML = `${productos[i].descuento}% OFF`
    }

    if(productos[i].cuotas){
        var cuotas = document.createElement('p')
        divDer.appendChild(cuotas)
        cuotas.className = 'cuotas'
        cuotas.innerHTML = `Hasta ${productos[i].cuotas} cuotas sin interes`
    }

    if(productos[i].envioGratis){
        var envioGratis = document.createElement('p')
        divDer.appendChild(envioGratis)
        envioGratis.className = 'envio'
        envioGratis.innerHTML = 'Envio Gratis'
    }
}

/*
    Nombre de clases a aplicar:
    'producto'
    'izq'
    'der'
    'titulo'
    'empresa'
    'precio-anterior'
    'precio'
    'descuento'
    'cuotas'
    'envio'

    ¿Como aplicar una clase? Una vez que obtienen un nodo usar la propiedad className, ejemplo:

    var productosDiv = document.getElementById('productos');
    productosDiv.className = 'productos';

    La estructura base de un producto es:

    <article class="producto">
        <div class="izq">
            IMAGEN
        </div>
        <div class="der">
            TITULO
            EMPRESA
            PRECIO ANTERIOR
            PRECIO
            DESCUENTO
            CUOTAS
            ENVIO GRATIS
        </div>
    </article>
*/