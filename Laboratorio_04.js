// let y const

//let TotalProductos = Productos.length;
const NombreTienda = "Fybeca";

// Variables

//tipos simples 

// Entero
let cantidadProductos = 20; 

// Float
let porcentajeDescuento = 40.5; 

// String
let mensajeBienvenida = "¡Aprovecha estas Ofertas Imperdibles!"; 

// Char
let primeraLetra = 'F'; 

// Boolean
let usuarioConectado = false; 

// Undefined
let perfilUsuario = undefined; 

//variables compuestas
let  = ['Formula infantil Blemil Plus Arroz Hidrolizado ',23.31,false] //este arreglo tiene algunas caracteristicas de un producto

let  Formula_Infantil = {                    //objetos

    name: "Formula infantil Blemil Plus Arroz Hidrolizado", 
    precio:  23.31,
    descripcion:"Blemil Plus 2 Arroz Hidrolizado es una fórmula de continuación a base de proteínas de arroz hidrolizadas que proporciona un óptimo aporte de nutrientes a la alimentación de los lactantes a partir de los 6 meses de edad, para ayudar a cubrir sus requerimientos nutricionales y conseguir una alimentación equilibrada.",
    Descuento: false,
    reseña: undefined
} 

console.log(Formula_Infantil);


//strings - cadena de caracteres 
let Mensaje = "   Ofertas   "


console.log(Mensaje.length);

console.log(Mensaje.trim()); 

console.log(Mensaje.includes('5'));

console.log(Mensaje.toUpperCase());

console.log(Mensaje.toLocaleLowerCase());

console.log(`El mensaje  es; ${Mensaje}`);

let Precio_producto1= 33.16
let Precio_producto2= 42.77
let NombreProducto= "Gel Limpiador Effaclar Purificante 400 Ml Unidad"

console.log("El nombre del producto y el precio es:"+NombreProducto+Precio_producto1);


let Precio_Serum = 42.77

let Descuento = 0.5

let Precio_Final = Precio_Serum <= Descuento? " Comprar " : "No comprar"

console.log(Precio_Final);

let email = "fracisguaman50@gmail.com"
!email ? console.log("Ingrese un correo valido") : console.log("Registrarse");


let DescuentoCodigo = "EFT3I6" 
DescuentoCodigo === "EFT3I6" ? console.log("Descuento valido") : console.log("Codigo de descuento erroneo");


const ProductosVariados = ['Formula infantil','Gel limpiador','Serum effaclar', "Crema facial"]
ProductosVariados.forEach((ProductosVariados)=>{console.log(ProductosVariados)})

const newProductosVariados = ProductosVariados.map((ProductosVariados)=>ProductosVariados.toUpperCase())

console.log(ProductosVariados);
console.log(newProductosVariados);


//FUNCION DECLARADA 
function MostrarCodigoDescuento() {
    console.log('FYBECA2024');
    
    
}

MostrarCodigoDescuento()

//FUNCION EXPRESADA 
const MostrarCodigo= function(){
    console.log("FYBECA2024");
    
}

MostrarCodigo()



//ARGUMENTOS

const validarCodigoDescuento = function (emailID, Codigo1) {

    console.log(`El codigo es $(Codigo1) y su email es $(emailID)`);
    
    
}

validarCodigoDescuento('juan@gmail.com','FYBECA2024')

//ARGUMENTOS OPCIONALES

const validarCodigoDescuentoo = function (mail, codigoo= 225) {

    console.log(`El token es $(codigoo) y su email es $(mail)`);
    
    
}

validarCodigoDescuentoo('juan@gmail.com')

//RETORNO

function TiposRetorno() {
    
    return {
        
        name:"Lampara de 3 intensidades",price: 5.00
    }
}

TiposRetorno()


//ARROW FUNCTION

const InicioSesion=()=>{
    console.log("Inicio exitoso");
    
}
InicioSesion()



//FUNCION FLECHA es lo mismo que una funcion expresada pero de una manera mas rapida

const registroUsuario = (email) => {
    console.log("REgistro exitoso"+email);


}

registroUsuario("francisguaman@gmail.com")

const productoFybeca = {
    id: 1234,
    nombre: "Jabon Infantil Abcderm",
    categoria: "Cuidado facial",
    precio: 26.15,
    disponible: true,
    descripcion: "Formulado específicamente para limpiar suavemente la piel y el cuero cabelludo delicado de bebés y niños"
    
};


console.log(productoFybeca.nombre )
console.log(productoFybeca.categoria )



//propiedades

productoFybeca.color = 'negro'
console.log(productoFybeca);
delete productoFybeca.id

Object.values(productoFybeca).includes("") ? console.log("Error") : console.log("OK");


const producto = {
    nombre: "Altrom Sublingual",
    precio: 19.00,
    categoria: "Analgesia",
    disponible: true
};

const caracteristicas = {
    envase: "Frasco",
    material: "Plastico"
};

const productoSolicitado = { ...producto, ...caracteristicas };
console.log(productoSolicitado);




const namenitribio = "Nitribio Inmuno";
const pricenitribio = 36.00;

const nitribio = {
    namenitribio,
    pricenitribio
};

console.log(nitribio);


//foreach

const producto2 = [
    {
    nombre: "Materna DHA",
    precio: 21.00,
    categoria: "Suplemento",
}
];

producto2.forEach((p,i)=>console.log(`${i+1} ${p.nombre} ${p.precio}`));


const LABMAC = [ 
    {
        name2: "Citrato de magnesio",
        mount2 : 18.15,
        imagen2 : "/.photo/citrato.png",
        details : "Suplemento alimenticio en polvo"
    },
    {
        name3 : "Deblax vitamina D3",
        mount3 :  18.18,
        imagen3 : "/.photo/Deblax.png",
        details3 : "vitaminas ricas en D3"


    }

]

const newproducto = LABMAC.map(s=>{

    return{
    name : s.name2,
    imagen : s.imagen2
}
})
console.log(newproducto);


const newproductoo = LABMAC.map((s)=> (
    {
    name : s.name2,
    imagen : s.imagen2
}
))

console.log(newproductoo);

//desestructuracion

const tratamientos =["Piascledine", "Idena Comp","Condrosil trio Sobres" ]

const [tratamientos1,tratamientos2,tratamientos3]= tratamientos

const [...tratamientos4]= tratamientos

console.log(tratamientos2);
console.log(tratamientos4);

const categorias = ["Calcio","Analgesia","Colageno","Suplementos","Tratamientos"]
categorias.length >=4? console.log("Registrar categoria"):console.log("No se puede registrar");

categorias.unshift("Ver todo ")
categorias.pop()
categorias.shift()

console.log(categorias);

let resultcategorias = categorias.find((c)=>(c==="Calcio"))
console.log(resultcategorias);

resultcategorias ? console.log("Mostrar categoria"): console.log("No existe esa categoria");

let resultcategoriasfilter = categorias.filter((c)=>(c.startsWith('B')))
console.log(resultcategoriasfilter);
























