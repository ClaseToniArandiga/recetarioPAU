// Datos de las recetas
const recetas = [
    {
        titulo: "Paella de Mariscos Auténtica",
        imagen: "img/image.png",
        tiempo: "80 min",
        calorias: "450 kcal",
        rating: "4.8",
        personas: "4 personas",
        ingredientes: [
            "400g de arroz bomba",
            "300g de gambas",
            "300g de mejillones",
            "200g de calamares",
            "1 litro de caldo de pescado",
            "1 pimiento rojo",
            "1 tomate maduro",
            "4 dientes de ajo",
            "Azafrán",
            "Aceite de oliva",
            "Sal y pimienta",
            "2 limones"
        ],
        preparacion: [
            "Calienta el caldo de pescado y añade el azafrán. Mantén caliente.",
            "En la paellera, sofríe el ajo picado con aceite de oliva.",
            "Añade el pimiento y el tomate rallado. Cocina 5 minutos.",
            "Incorpora los calamares y sofríe 3-4 minutos.",
            "Agrega el arroz y mezcla bien durante 2 minutos.",
            "Vierte el caldo caliente (proporción 2:1 con el arroz).",
            "Distribuye las gambas y mejillones por encima.",
            "Cocina a fuego medio-alto 10 minutos, luego bajo 8-10 minutos más.",
            "Deja reposar 5 minutos tapada con un paño.",
            "Decora con limón y sirve caliente."
        ],
        consejos: [
            "No remuevas el arroz después de añadir el caldo",
            "El punto perfecto es con el arroz ligeramente tostado en el fondo (socarrat)",
            "Usa caldo casero para mejor sabor"
        ]
    },
    {
        titulo: "Tacos al Pastor Caseros",
        imagen: "img/tacos-al-pastor-foto-principal.webp",
        tiempo: "60 min",
        calorias: "320 kcal",
        rating: "4.9",
        personas: "6 personas",
        ingredientes: [
            "800g de carne de cerdo",
            "3 chiles guajillo",
            "2 chiles ancho",
            "1 cebolla",
            "4 dientes de ajo",
            "200g de piña",
            "Cilantro fresco",
            "Tortillas de maíz",
            "Limones",
            "Comino, orégano",
            "Vinagre blanco",
            "Sal y pimienta"
        ],
        preparacion: [
            "Hidrata los chiles en agua caliente durante 15 minutos.",
            "Licúa los chiles con ajo, vinagre, especias y un poco del agua de remojo.",
            "Corta la carne en tiras finas y marina con la salsa durante 2 horas mínimo.",
            "Calienta una sartén o plancha a fuego alto.",
            "Cocina la carne marinada hasta que esté dorada y caramelizada.",
            "Añade trozos de piña y cocina hasta dorar.",
            "Calienta las tortillas.",
            "Sirve la carne y piña en las tortillas.",
            "Decora con cilantro, cebolla picada y limón.",
            "Acompaña con salsa al gusto."
        ],
        consejos: [
            "Marina la carne al menos 2 horas, ideal toda la noche",
            "Usa piña natural, no enlatada",
            "El fuego debe estar muy alto para lograr el caramelizado"
        ]
    },
    {
        titulo: "Tiramisú Clásico Italiano",
        imagen: "img/tiramisu.webp",
        tiempo: "30 min",
        calorias: "380 kcal",
        rating: "5",
        personas: "8 personas",
        ingredientes: [
            "500g de mascarpone",
            "6 huevos",
            "150g de azúcar",
            "300ml de café espresso",
            "40ml de amaretto (opcional)",
            "300g de bizcochos de soletilla",
            "Cacao en polvo",
            "Una pizca de sal"
        ],
        preparacion: [
            "Separa las yemas de las claras de huevo.",
            "Bate las yemas con el azúcar hasta que estén cremosas y pálidas.",
            "Añade el mascarpone a las yemas y mezcla suavemente.",
            "Monta las claras a punto de nieve con una pizca de sal.",
            "Incorpora las claras al mascarpone con movimientos envolventes.",
            "Mezcla el café con el amaretto en un plato hondo.",
            "Moja rápidamente las soletillas en el café (no empapar).",
            "Coloca una capa de bizcochos en el fondo de la fuente.",
            "Cubre con una capa de crema de mascarpone.",
            "Repite las capas y refrigera mínimo 4 horas. Espolvorea cacao antes de servir."
        ],
        consejos: [
            "No empapes demasiado las soletillas o quedarán muy blandas",
            "Mejor si lo dejas reposar en la nevera toda la noche",
            "Usa café espresso fuerte y de buena calidad"
        ]
    },
    {
        titulo: "Gazpacho Andaluz Tradicional",
        imagen: "img/sopa-gazpacho.webp",
        tiempo: "15 min",
        calorias: "180 kcal",
        rating: "4.8",
        personas: "4 personas",
        ingredientes: [
            "1kg de tomates maduros",
            "1 pepino",
            "1 pimiento verde",
            "1 diente de ajo",
            "50ml de aceite de oliva virgen extra",
            "30ml de vinagre de jerez",
            "Pan duro (100g)",
            "Sal",
            "Agua fría"
        ],
        preparacion: [
            "Lava y trocea los tomates, pepino y pimiento.",
            "Pon el pan en remojo con un poco de agua.",
            "Añade todos los ingredientes a la batidora: tomate, pepino, pimiento, ajo, pan escurrido.",
            "Tritura hasta obtener una mezcla homogénea.",
            "Añade el aceite de oliva mientras bates.",
            "Incorpora el vinagre y sal al gusto.",
            "Si está muy espeso, añade agua fría hasta conseguir la textura deseada.",
            "Refrigera al menos 2 horas antes de servir.",
            "Sirve bien frío acompañado de picadillo de verduras.",
            "Decora con un chorrito de aceite de oliva."
        ],
        consejos: [
            "Los tomates deben estar muy maduros para más sabor",
            "Ajusta el vinagre y sal al final según tu gusto",
            "Mejor si reposa en nevera varias horas"
        ]
    },
    {
        titulo: "Salmón Grillado con Espárragos",
        imagen: "img/salmon-con-esparragos-verdes-en-airfryer-foto-principal.webp",
        tiempo: "25 min",
        calorias: "350 kcal",
        rating: "5",
        personas: "2 personas",
        ingredientes: [
            "2 filetes de salmón (200g cada uno)",
            "300g de espárragos verdes",
            "2 dientes de ajo",
            "Zumo de 1 limón",
            "Aceite de oliva",
            "Mantequilla",
            "Eneldo fresco",
            "Sal y pimienta negra",
            "Ralladura de limón"
        ],
        preparacion: [
            "Precalienta el horno a 200°C o la parrilla.",
            "Lava y corta los extremos duros de los espárragos.",
            "Coloca los espárragos en una bandeja, rocía con aceite, sal y pimienta.",
            "Sazona el salmón con sal, pimienta y ralladura de limón.",
            "En una sartén con aceite, dora el salmón por la piel 3-4 minutos.",
            "Dale la vuelta y cocina 2 minutos más.",
            "Mientras, asa los espárragos en el horno 10-12 minutos.",
            "Prepara una salsa con mantequilla derretida, ajo picado, zumo de limón y eneldo.",
            "Sirve el salmón sobre los espárragos.",
            "Baña con la salsa de limón y mantequilla."
        ],
        consejos: [
            "No cocines demasiado el salmón, debe quedar jugoso por dentro",
            "Los espárragos deben quedar al dente, crujientes",
            "Usa salmón fresco de buena calidad"
        ]
    },
    {
        titulo: "Tostada de Aguacate y Huevo Poché",
        imagen: "img/tostada de aguacate .webp",
        tiempo: "15 min",
        calorias: "310 kcal",
        rating: "4.9",
        personas: "2 personas",
        ingredientes: [
            "2 rebanadas de pan integral",
            "2 aguacates maduros",
            "2 huevos",
            "Zumo de 1/2 limón",
            "1 tomate cherry",
            "Aceite de oliva",
            "Semillas de sésamo",
            "Sal y pimienta",
            "Hojuelas de chile (opcional)",
            "Vinagre blanco"
        ],
        preparacion: [
            "Pon agua a hervir con un chorrito de vinagre para los huevos.",
            "Tuesta el pan hasta que esté dorado y crujiente.",
            "Aplasta el aguacate con un tenedor.",
            "Mezcla el aguacate con zumo de limón, sal y pimienta.",
            "Casca los huevos en tazas pequeñas.",
            "Crea un remolino en el agua hirviendo y desliza suavemente cada huevo.",
            "Cocina 3 minutos para huevo poché perfecto.",
            "Unta el aguacate sobre las tostadas.",
            "Coloca el huevo poché encima.",
            "Decora con tomate cherry, semillas de sésamo, aceite y hojuelas de chile."
        ],
        consejos: [
            "El aguacate debe estar en su punto justo de madurez",
            "El vinagre ayuda a que la clara del huevo se compacte",
            "Usa huevos frescos para mejor resultado del poché"
        ]
    }
];

// Modal para mostrar recetas
const modal = document.getElementById('recipeModal');
const closeBtn = document.querySelector('.close');
const buttons = document.querySelectorAll('.boton-centrado');

// Función para actualizar el contenido del modal
function mostrarReceta(index) {
    const receta = recetas[index];
    
    // Actualizar título e imagen
    document.getElementById('modal-title').textContent = receta.titulo;
    document.getElementById('modal-image').src = receta.imagen;
    document.getElementById('modal-image').alt = receta.titulo;
    
    // Actualizar información del header
    const modalInfo = document.querySelector('.modal-info');
    modalInfo.innerHTML = `
        <span class="modal-detail">🕐 ${receta.tiempo}</span>
        <span class="modal-detail">🔥 ${receta.calorias}</span>
        <span class="modal-detail">⭐ ${receta.rating}</span>
        <span class="modal-detail">👥 ${receta.personas}</span>
    `;
    
    // Actualizar ingredientes
    const ingredientesUl = document.querySelector('.ingredients ul');
    ingredientesUl.innerHTML = receta.ingredientes.map(ing => `<li>${ing}</li>`).join('');
    
    // Actualizar preparación
    const preparacionOl = document.querySelector('.instructions ol');
    preparacionOl.innerHTML = receta.preparacion.map(paso => `<li>${paso}</li>`).join('');
    
    // Actualizar consejos
    const consejosUl = document.querySelector('.tips ul');
    consejosUl.innerHTML = receta.consejos.map(consejo => `<li>${consejo}</li>`).join('');
}

// Abrir modal al hacer click en cualquier botón "Ver Receta"
buttons.forEach((button, index) => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        mostrarReceta(index);
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
    });
});

// Cerrar modal al hacer click en X
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Cerrar modal al hacer click fuera del contenido
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
