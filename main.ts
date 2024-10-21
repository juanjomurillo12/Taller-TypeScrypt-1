import { series } from "./Data.js";
import { Serie } from "./Serie.js";

const seriesTableBody: HTMLElement = document.getElementById("tabla_series_body")!;
const seriesTable: HTMLElement = document.getElementById("tabla_series")!;

function renderSeries(series: Serie[]): void {
    // Renderizar las series
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                               <td style="color: blue;">${serie.name}</td>
                               <td>${serie.channel}</td>
                               <td>${serie.seasons}</td>`;
        seriesTableBody.appendChild(trElement);
    });

   
    const averageSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0) / series.length;

  
    const trAverage = document.createElement("tr");
    trAverage.innerHTML = `<td colspan="4" style="text-align: center; font-weight: bold;">
                            Seasons average: ${averageSeasons.toFixed(0)}
                           </td>`;
   
    seriesTable.appendChild(trAverage);
}


renderSeries(series);
