const monkey = document.getElementById("monkey");
const box = document.getElementById("box");
const banana = document.getElementById("banana");
const stepsList = document.getElementById("steps");

function start() {

    stepsList.innerHTML = "";

    fetch('/run')
    .then(res => res.json())
    .then(steps => {

        let i = 0;

        function runStep() {
            if (i >= steps.length) return;

            let step = steps[i];

            // Add step text
            let li = document.createElement("li");
            li.innerText = step;
            stepsList.appendChild(li);

            // Actions
            if (step.includes("goes")) {
                monkey.style.left = "250px";
            }

            else if (step.includes("pushes")) {
                box.style.left = "500px";
                monkey.style.left = "500px";
            }

            else if (step.includes("climbs")) {
                monkey.style.bottom = "130px";
            }

            else if (step.includes("grabs")) {
                banana.style.display = "none";
            }

            i++;
            setTimeout(runStep, 1200);
        }

        runStep();
    });
}

function resetGame() {
    location.reload();
}