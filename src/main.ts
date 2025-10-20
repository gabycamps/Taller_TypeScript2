import { Serie } from "./Serie.js";
import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById('series')!;
const tableContainer: HTMLElement = document.querySelector(".table-container")!;

renderSeriesInTable(series);

function renderSeriesInTable(series: Serie[]): void {

    series.forEach(s => {
        let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${s.id}</td>
                            <td>${s.name}</td>
                            <td>${s.channel}</td>
                            <td>${s.seasons}</td>`;
    seriesTbody.appendChild(trElement);
    });

    renderAverageSeasons();
}



function averageSeasons(series: any[]): number {

    let total = 0;
    series.forEach((serie) => (total += serie.seasons));
    return total/series.length
}

function renderAverageSeasons(): void {

    const average = averageSeasons(series);
    const avgElement = document.createElement("p");
    avgElement.textContent = `Seasons average: ${average}`;
    avgElement.classList.add("avg");
    tableContainer.appendChild(avgElement);
}