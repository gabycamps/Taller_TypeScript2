import { Serie } from "./Serie.js";
import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
var tableContainer = document.querySelector(".table-container");
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                            <td>").concat(s.name, "</td>\n                            <td>").concat(s.channel, "</td>\n                            <td>").concat(s.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
    renderAverageSeasons();
}
function averageSeasons(series) {
    var total = 0;
    series.forEach(function (serie) { return (total += serie.seasons); });
    return total / series.length;
}
function renderAverageSeasons() {
    var average = averageSeasons(series);
    var avgElement = document.createElement("p");
    avgElement.textContent = "Seasons average: ".concat(average);
    avgElement.classList.add("avg");
    tableContainer.appendChild(avgElement);
}
//# sourceMappingURL=main.js.map