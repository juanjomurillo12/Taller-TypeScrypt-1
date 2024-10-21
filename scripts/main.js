import { series } from "./Data.js";
var seriesTableBody = document.getElementById("tabla_series_body");
var seriesTable = document.getElementById("tabla_series");
function renderSeries(series) {
    // Renderizar las series
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                               <td style=\"color: blue;\">").concat(serie.name, "</td>\n                               <td>").concat(serie.channel, "</td>\n                               <td>").concat(serie.seasons, "</td>");
        seriesTableBody.appendChild(trElement);
    });
    var averageSeasons = series.reduce(function (acc, serie) { return acc + serie.seasons; }, 0) / series.length;
    var trAverage = document.createElement("tr");
    trAverage.innerHTML = "<td colspan=\"4\" style=\"text-align: center; font-weight: bold;\">\n                            Seasons average: ".concat(averageSeasons.toFixed(0), "\n                           </td>");
    seriesTable.appendChild(trAverage);
}
// Llamar a la función para renderizar las series
renderSeries(series);
