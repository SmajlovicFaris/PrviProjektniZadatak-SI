
// Početna stranica skripta
if (window.location.pathname.includes("index.html")) {
const boje = ["#f0f0f0", "#d1e7dd", "#fff3cd", "#f8d7da", "#cfe2ff"];
let index = 0;

function promijeniPozadinu() {
  document.body.style.backgroundColor = boje[index];
  index = (index + 1) % boje.length;
}


const dugme = document.createElement("button");
dugme.textContent = "Promijeni pozadinu";
dugme.style = "display:block;margin:40px auto;padding:10px 20px;font-size:18px;cursor:pointer;";
document.body.appendChild(dugme);

dugme.addEventListener("click", promijeniPozadinu);


const slike = document.querySelectorAll("img");
slike.forEach(slika => {
  slika.addEventListener("click", () => {
    alert("Kliknuo si na: " + slika.alt);
  });
});
}



// Historija i razvoj VW grupe stranica
if (window.location.pathname.includes("page1.html")) {
  console.log("Na stranici: Historija i razvoj VW grupe");

  const elementi = document.querySelectorAll("img, p");
  const naslov = document.querySelector("h1");
  naslov.style.transition = "opacity 1s ease";
  naslov.style.opacity = "0";
  setTimeout(() => naslov.style.opacity = "1", 500);

  const dugme = document.createElement("button");
  dugme.textContent = "Aktiviraj border";
  dugme.className = "btn btn-primary";
  dugme.style = "display:block;margin:20px auto;padding:10px 20px;font-size:18px;";
  document.body.appendChild(dugme);

  dugme.addEventListener("click", () => {
    function provjeriVidljivost() {
      elementi.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.style.border = "4px solid #a56107ff";
          el.style.transition = "border 0.5s ease";
        }
      });
    }
    window.addEventListener("scroll", provjeriVidljivost);
    provjeriVidljivost();
  });

   const dugmeBold = document.createElement("button");
    dugmeBold.textContent = "Boldiraj tekst";
    dugmeBold.style = "display:block;margin:20px auto;padding:10px 20px;font-size:18px;cursor:pointer;";
    document.body.appendChild(dugmeBold);

    let bold = false;
    dugmeBold.addEventListener("click", () => {
        document.body.style.fontWeight = bold ? "normal" : "bold";
        bold = !bold;
    });

}


// Aktuelni razvoj automobila stranica
if (window.location.pathname.includes("page2.html")) {
  console.log("Na stranici: Aktuelni razvoj automobila");

  const novosti = [
    "VW grupa ulaže u električne automobile.",
    "Audi predstavio novi model 2025.",
    "Bugatti planira luksuzni koncept."
  ];

  const novostiDiv = document.getElementById("novosti");

  const dugme = document.createElement("button");
  dugme.textContent = "Novosti";
  dugme.className = "btn btn-primary";
  dugme.style = "display:block;margin:20px auto;padding:10px 20px;font-size:18px;";
  document.body.appendChild(dugme);

  let prikazane = false;

  dugme.addEventListener("click", () => {
    if (!prikazane) {
      novosti.forEach(n => {
        const p = document.createElement("p");
        p.textContent = n;
        novostiDiv.appendChild(p);
      });
      prikazane = true;
    } else {
      novostiDiv.innerHTML = "";
      prikazane = false;
    }
  });
}





