import { SistemaReservas } from "./helpers/sistemasReservas"


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
  </div>
`;

SistemaReservas();


