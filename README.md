# Simple CFX API Package
*This package is a cfx status package which uses CFX.re API.*
<br>

*Feel free to contribute project.*

- **Install**
```bash
npm install cfx-status
```

## Utils
- Fetching General Status
- Fetching Components
- Get Component by ID
- Get Component by Name

## Usages

- **Basic Usage**
> *main.ts*
```ts
import CFXStatus from "cfx-status";
(async() => {
    const cfxre = new CFXStatus()
    // Automaticly Fetchs Components and General Status
    const generalStatus = await cfxre.currentStatus // CFX.re Status
    const components = await cfxre.components // CFX.re Systems Status
})();
```

- **Advanced Usage**
> *main.ts*
```ts
import CFXStatus from "cfx-status";
(async() => {
    const cfxre = new CFXStatus()
    // Automaticly Fetchs Components and General Status
    const wantedComponent = await cfxre.getComponentById("component-id")
    const wantedComponentTwo = await cfxre.getComponentByName("component-name")

    console.log(`${wantedComponent.name}: ${wantedComponent.status}`) // e.g. CnL: operational
    console.log(`${wantedComponentTwo.name}: ${wantedComponentTwo.status}`) // e.g. Keymaster: major_outage
})();
```