import Home from './home.controllers.js'
import GuionesMedic from './medicalizacion/guiones.controller.js'
import GuionesInfoYMed from './info_y_medios/guiones.controller.js'
import GuionesSegVida from './seguros_vida/guiones.controller.js'
import GuionesPrevencion from './prevencion/guiones.controller.js'
import GuionesChat from './chat/guiones.controller.js'
import LeyesMedic from './medicalizacion/leyes.controller.js'
import LeyesInfoYMedios from './info_y_medios/leyes.controller.js'
import LeyesPrevencion from './prevencion/leyes.controller.js'
import NotFound from './notFound.controller.js'
// opciones S
import codigos from './opcionesS/codigos.controller.js'
import glosario from './opcionesS/glosario.controller.js'
import corrector from './opcionesS/corrector.controller.js'

const views = {
    home: Home,
    GuionesMedic,
    GuionesInfoYMed,
    GuionesSegVida,
    GuionesPrevencion,
    LeyesMedic,
    LeyesInfoYMedios,
    LeyesPrevencion,
    GuionesChat,
    codigos,
    glosario,
    corrector,
    notFound: NotFound
}

export {views}