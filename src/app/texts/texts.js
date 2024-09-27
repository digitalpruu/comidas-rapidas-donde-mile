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
        description1: "En Comidas rápidas Dónde Mile, nos especializamos en ofrecerte una variedad de deliciosas opciones de comida rápida. Nuestro compromiso es brindar calidad y sabor en cada plato, asegurando que cada cliente disfrute de una experiencia culinaria excepcional.",
        description2: "Descubre nuestro menú y déjate llevar por el auténtico sabor de nuestras comidas rápidas. En Dónde Mile, cada bocado es una invitación a disfrutar de momentos especiales."
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
