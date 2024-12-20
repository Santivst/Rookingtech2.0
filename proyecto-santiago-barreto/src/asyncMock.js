
const products = [
    // Categoría: Smartphones
    {
        id: 1,
        name: "Smartphone Galaxy S10",
        price: 1000,
        description: "Smartphone con pantalla AMOLED de 6.5 pulgadas y cámara de 108 MP.",
        image: "/img/producto-id1.jpg",
        category: "Smartphones",
        stock: 20
    },
    {
        id: 2,
        name: "Smartphone Nubia Neo 5G",
        price: 850,
        description: "Teléfono 5G con procesador de última generación y batería de larga duración.",
        image: "/img/producto-id2.jpg",
        category: "Smartphones",
        stock: 15
    },
    {
        id: 3,
        name: "Smartphone Xiaomi 11 Lite",
        price: 500,
        description: "Dispositivo compacto con cámara dual y excelente rendimiento.",
        image: "/img/producto-id3.jpg",
        category: "Smartphones",
        stock: 30
    },
    {
        id: 4,
        name: "Smartphone Hyundai Ultra Vision",
        price: 1200,
        description: "Pantalla de 120Hz y grabación de video en 8K.",
        image: "/img/producto-id4.jfif",
        category: "Smartphones",
        stock: 10
    },

    // Categoría: Computadoras
    {
        id: 5,
        name: "Notebook Asus Tuf Gaming",
        price: 1500,
        description: "Portátil con GPU RTX 4060 y procesador AMD Ryzen 7.",
        image: "/img/producto-id5.png",
        category: "Computadoras",
        stock: 8
    },
    {
        id: 6,
        name: "PC de Escritorio MSI Creator P100X 12VTE-1216ES",
        price: 2000,
        description: "Computadora de alto rendimiento para diseño y edición de video.",
        image: "/img/producto-id6.jfif",
        category: "Computadoras",
        stock: 5
    },
    {
        id: 7,
        name: "New MacBook Air M2",
        price: 1400,
        description: "Laptop ultradelgada con chip M2 y batería de larga duración.",
        image: "/img/producto-id7.jfif",
        category: "Computadoras",
        stock: 12
    },
    {
        id: 8,
        name: "Monitor LG UltraWide",
        price: 600,
        description: "Monitor curvo de 34 pulgadas con resolución 4K y HDR.",
        image: "/img/producto-id8.jfif",
        category: "Computadoras",
        stock: 10
    },

    // Categoría: Audio
    {
        id: 9,
        name: "Auriculares Senzer Sg500 Surround Sound Pro",
        price: 300,
        description: "Auriculares con cancelación de ruido y sonido envolvente.",
        image: "/img/producto-id9.jfif",
        category: "Audio",
        stock: 25
    },
    {
        id: 10,
        name: "Parlante Bluetooth Portátil Maxbass Power Speaker",
        price: 120,
        description: "Altavoz portátil con bajos potentes y resistencia al agua.",
        image: "/img/producto-id10.jpg",
        category: "Audio",
        stock: 18
    },
    {
        id: 11,
        name: "Parlante Home Theater XION XI-HT480",
        price: 800,
        description: "Sistema 5.1 con subwoofer y conectividad inalámbrica.",
        image: "/img/producto-id11.jpg",
        category: "Audio",
        stock: 6
    },
    {
        id: 12,
        name: "Microfono Blue Yeticaster",
        price: 150,
        description: "Micrófono con calidad de estudio y cancelación de ruido.",
        image: "/img/producto-id12.jfif",
        category: "Audio",
        stock: 20
    },
];




export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.category.toLowerCase() === categoria.toLowerCase()))
        }, 1000);
    });
};


export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find((product) => product.id === productId))
        }, 1000);
    })
}


export default products;