import mercadopago from "mercadopago";
import { MERCADOPAGO_API_KEY } from "../config.js";

mercadopago.configure({
  access_token: MERCADOPAGO_API_KEY,
});

export const createOrder = async (req, res) => {
  try {
    //preferencia de pago en 
    const preference = await mercadopago.preferences.create({
      items: [
        {
          title: "Producto de Prueba",
          unit_price: 100,
          quantity: 1,
        },
      ],
      back_urls: {
        success: 'http://localhost:3000', 
      },
    });
    console.log(preference.body);
    res.json({ init_point: preference.body.init_point });
  } catch (error) {
    res.status(500).json({ error: "Hubo un error al crear la preferencia de pago" });
  }
};

export const receiveWebhook = async (req, res) => {
  try {
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: "Hubo un error al procesar el webhook" });
  }
};


export const successHandler = (req, res) => {
  // Manejo de la ruta de éxito
  res.redirect('http://tu-sitio.com/home'); // redirige al usuario a la página de inicio
};
