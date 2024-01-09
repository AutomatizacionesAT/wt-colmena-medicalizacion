export const DB_Guiones_Chat = [
      {
       "ESCENARIO": "Saludo",
       "MOMENTO": "Al instante que se recibe el chat",
       "GUIONES": "Buenos días señor  XXXXXXXX mi nombre es  XXXX como puedo servirte el dia de hoy?"
      },
      {
       "ESCENARIO": "Solicitud de información",
       "MOMENTO": "Cuando se solicita informacion por 1 vez en la conversacion y cuya informacion no registra en el historial del chat",
       "GUIONES": "Para continuar con el proceso, me confirmas la siguiente información"
      },
      {
       "ESCENARIO": "Mantenimiento",
       "MOMENTO": "Al instante que se recibe la informacion del cliente",
       "GUIONES": "Permíteme un momento en línea voy a validar la información ya regreso"
      },
      {
       "ESCENARIO": "Mantenimiento",
       "MOMENTO": "Al minuto y medio si aun continua en validacion la informacion ",
       "GUIONES": "Continuo validando tu informacion"
      },
      {
       "ESCENARIO": "Guiones adicionales de mantenimiento para ser utilizados de manera aleatoria durante toda la conversación con el cliente",
       "MOMENTO": "Mantenimiento durante todo el proceso. ",
       "GUIONES": "Disculpa por la demora, estoy gestionando tu caso ya regreso contigo.\nAgradezco la espera, por favor permíteme un momento más.\n\n\n"
      },
      {
       "ESCENARIO": "Mantenimiento cuando no hay respuesta del cliente",
       "MOMENTO": "A los 2 minutos  despues de solicitar la informacion el asesor",
       "GUIONES": "Señor xxxx continua en linea, seguimos atentos a tu información."
      },
      {
       "ESCENARIO": "Retoma de conversacion",
       "MOMENTO": "Cuando se retoma el chat despues de hacer una validacion",
       "GUIONES": "Señor XXX te confirmo,  (da la informacion respectiva)"
      },
      {
       "ESCENARIO": "Finalizada una solicitud",
       "MOMENTO": "Cuando se da la respuesta a la solicitud del cliente",
       "GUIONES": "¿Hay algo más en lo que podamos ayudarte?"
      },
      {
       "ESCENARIO": "Despedida",
       "MOMENTO": "Cuando el cliente responde que no hay mas solicitudes o consultas",
       "GUIONES": "Gracias por comunicarte con Colmena seguros riesgos labores , recuerda  que puedes comunicarte por este medio en el momento que lo necesites, que tengas un excelente día"
      },
      {
       "ESCENARIO": "Cierre por falta de interaccion: ( Tres mantenimientos cuando no hay respuesta y continuamos sin respuesta)",
       "MOMENTO": "Se realiza 3 veces con el intervalo de 2 minutos cada una",
       "GUIONES": "Señor xxxx   debido a que no brindaste información, finalizaremos la conversación, , recuerda  que puedes comunicarte por este medio en el momento que lo necesites, que tengas un excelente día"
      }
     ]