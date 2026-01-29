# DT210G-Laboration2

Målet med denna labb är att utveckla en "Att göra-lista" (Todo List) applikation med React och TypeScript. Applikationen ska kommunicera med ett befintligt backend-API som hanterar CRUD-operationer för todo-objekt.

Backend-API:et som används går att hitta här: [DT210G-laboration2-backend](https://github.com/RobinHawiz/DT210G-laboration2-backend)

React-applikationen ska uppfylla följande krav:

- Använda TypeScript för typning och ökad kodkvalitet
- Applikationen ska vara uppdelad i lämpliga komponenter, tex en komponent för utskrift av lista, en för formulär.
- Implementera dynamisk datahämtning med useEffect-hook
- Skapa ett formulär för att lägga till nya todos med följande validering:
  - Titel måste vara minst 3 tecken lång
  - Hantera olika status för todos:
    - Ej påbörjad
    - Pågående
    - Avklarad
- Implementera funktioner för att:
  - Hämta in samtliga todos och skriv ut på lämpligt sätt på sidan
  - Lägga till en ny todo
  - Updatera status för en todo (ej påbörjad, pågående, avklarad)
  - Ta bort en todo
  - Hantera laddnings- och felmeddelanden vid API-anrop
  - Uppdatera listans tillstånd när en todo läggs till, uppdateras eller tas bort
