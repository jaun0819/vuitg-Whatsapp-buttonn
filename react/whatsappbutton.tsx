import React from 'react';
import proptypes from 'prop-types'
import "./style.css"
import { useCssHandles } from 'vtex.css-handles'
type Props = {
    logo: string
    phone: string
    message: string
    width: number
    height: number
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
    const CSS_HANDLES = ["botton-whatsapp"]
    const handles = useCssHandles(CSS_HANDLES)
    const formarttedMessage = message.replace(/ /g, "%20")
    console.log("mi mensaje formateado es", formarttedMessage, logo)
    return <>
        <div className={`fixed bottom-2 right-2 flex flexColumn ${handles["botton-whatsapp"]}`}>

            <a href={`https://www.bancofalabella.com.co/page/consultas-whatsapp/${phone}?text=${formarttedMessage}`}
                target="_blank"
                rel="noreferrer noopener"
            >
                <img src={logo}
                    width={width}
                    height={height} alt="logo de Whatsapp"
                    /* className={handles["botton-whatsapp"]} */ />

            </a>

        </div>
    </>
}
WhatsappButton.proptypes = {
    logo: proptypes.string.isRequired,
    phone: proptypes.string.isRequired,
    message: proptypes.string,
    width: proptypes.number,
    height: proptypes.number,
}
WhatsappButton.defaultProps = {
    logo: "mi-logo.png",
    phone: "+57 1 5878000",
    message: "estas comunicandote con Falabella",
    width: 90,
    height: 90
}
WhatsappButton.schema = {
    title: "Botón de Whatsapp",
    type: "object",
    properties: {
        logo: {
            title: "Logo de Whatsapp que se relacione con la marca",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            }

        },
        phone: {
            title: "Telefono",
            description: "Agrega por favor el numero de telefono",
            type: "string"
        },
        message: {
            title: "Mensaje",
            description: "Agrega pel mensaje que se vera para tu cliente",
            type: "string",
            widtget: {
                "u:widget": "textarea"
            }
        },
        width: {
            title: "tamaño",
            description: "Agrega por favor el numero  ",
            type: "number"
        },
        height: {
            title: "tamaño",
            description: "Agrega por favor el numero ",
            type: "number"
        }
    }
}
export default WhatsappButton;
