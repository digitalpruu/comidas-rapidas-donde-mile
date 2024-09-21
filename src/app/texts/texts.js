const title = "Comidas rápidas Dónde Mile";
const email = ""; // Información no proporcionada
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en tus productos de " + title + " y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!"
);
const numeroWhatsApp = ""; // Información no proporcionada

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Comidas rápidas Dónde Mile ofrece una variedad de comidas rápidas que están diseñadas para satisfacer tus antojos de manera deliciosa y rápida. Nuestro lema, 'Dónde Mile', refleja nuestra dedicación a brindarte comidas rápidas y de calidad.",
        description2: "En Comidas rápidas Dónde Mile, nos esforzamos por ofrecerte opciones de comida que sean tanto sabrosas como convenientes. Descubre cómo nuestras comidas pueden hacer tu día más fácil y delicioso."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Dónde Mile",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
