import { Serie } from "./Serie.js";
import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById('series')!;
const tableContainer: HTMLElement = document.querySelector(".table-container")!;

renderSeriesInTable(series);

function renderSeriesInTable(series: Serie[]): void {

    series.forEach(s => {
        let trElement = document.createElement("tr");
    trElement.addEventListener("click", () => renderSerieDetail(s));
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

function renderSerieDetail(series: Serie): void {
    const cardContainer = document.getElementById("card-container");
    if (!cardContainer) return;

    cardContainer.innerHTML = "";

    const cardHTML =`
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;>
        <img src="${series.imageUrl}" class="card-img-top" alt="${series.name}">
        <div class="card-body">
            <h5 class="card-title">${series.name}</h5>
            <p class="card-text">${series.description}</p>
            <a href="${series.link}" class="btn btn-primary">Go watch it</a>
        </div>
    </div>
    `;

    cardContainer.innerHTML = cardHTML;
}