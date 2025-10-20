import { Serie } from "./Serie.js";
import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
var tableContainer = document.querySelector(".table-container");
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (s) {
        var trElement = document.createElement("tr"); //row
        trElement.addEventListener("click", function () { return renderSerieDetail(s); });
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
function renderSerieDetail(series) {
    var cardContainer = document.getElementById("card-container");
    if (!cardContainer)
        return;
    cardContainer.innerHTML = "";
    var cardHTML = "\n    <div class=\"card text-white bg-dark mb-3\" style=\"max-width: 18rem\";>\n        <img src=\"".concat(series.imageUrl, "\" class=\"card-img-top\" alt=\"").concat(series.name, "\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(series.name, "</h5>\n            <p class=\"card-text\">").concat(series.description, "</p>\n            <a href=\"").concat(series.link, "\" class=\"btn btn-primary\">Go watch it</a>\n        </div>\n    </div>\n    ");
    cardContainer.innerHTML = cardHTML;
}
//# sourceMappingURL=main.js.map