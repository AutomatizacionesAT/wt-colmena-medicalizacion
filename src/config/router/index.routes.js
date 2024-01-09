import {views} from "@controllers/controller.js";


let root = document.getElementById("root");

const router = async (route) => {
    root.innerHTML = "";
    const goRoute =vista=> root.appendChild(vista)
    switch (route) {
        case "": {
            return goRoute(views.home());
        }
        case "#/": {
            return goRoute(views.home());
        } // checklist
        case "#/MEDICALIZACIONGuiones": {
            return goRoute(views.GuionesMedic());
        }
        case "#/INFORMACIONYMEDIOSGuiones": {
            return goRoute(views.GuionesInfoYMed());
        }
        case "#/PREVENCIONGuiones": {
            return goRoute(views.GuionesPrevencion());
        }
        case "#/SEGUROSVIDAGuiones": {
            return goRoute(views.GuionesSegVida());
        }
        case "#/MEDICALIZACIONNormativa": {
            return goRoute(views.LeyesMedic());
        }
        case "#/INFORMACIONYMEDIOSNormativa": {
            return goRoute(views.LeyesInfoYMedios());
        }
        case "#/PREVENCIONNormativa": {
            return goRoute(views.LeyesPrevencion());
        }
        case "#/GUIONESChat": {
            return goRoute(views.GuionesChat());
        }
        case "#/localbase": {
            return goRoute(views.excel());
        }   
        default: {
            return root.appendChild(views.notFound());
        }
    }
};

export { router };
