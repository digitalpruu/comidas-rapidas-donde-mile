const title = "Comidas rápidas Dónde Mile";
const email = "comidasrapidasdondemile@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573152435540"; // Incluido el prefijo +57

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Comidas Rápidas Dónde Mile, nos dedicamos a ofrecerte una experiencia culinaria rápida y deliciosa. Nuestro menú está diseñado para satisfacer tus antojos con una variedad de opciones que incluyen tus comidas rápidas favoritas, preparadas con ingredientes frescos y de alta calidad.\n" +
            "Desde hamburguesas jugosas hasta papas fritas crujientes, cada plato está preparado con esmero para ofrecerte un sabor excepcional. Nuestro compromiso es brindarte una comida rápida que no solo sea conveniente, sino también increíblemente sabrosa.\n" +
            "lónde Mile, entendemos que la comida rápida puede ser sinónimo de calidad. Por eso, nos esforzamos por ofrecerte productos que te hagan volver una y otra vez ¡Ven y disfruta de una comida rápida que realmente vale la pena!\n" +
            "Te esperamos para que experimentes la mejor comida rápida en Dónde Mile, donde cada bocado es una delicia!"
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Donde el sabor se encuentra.",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/share/SguxZSGj556G7vip/?mibextid=qi2Omg", // Enlace específico de Facebook
        instagram: "https://www.instagram.com/", // Enlace específico de Instagram
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
