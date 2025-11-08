
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
}


// Aktuelni razvoj automobila stranica

if (window.location.pathname.includes("page2.html")) {
  console.log("Na stranici: Historija i razvoj VW grupe");

 
  const elementi = document.querySelectorAll("img, p, h2");
  
  function prikaziElemente() {
    elementi.forEach(el => {
      const visina = el.getBoundingClientRect().top;
      const vidljivo = window.innerHeight - 100;
      if (visina < vidljivo) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  }

  elementi.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease-out";
  });

  window.addEventListener("scroll", prikaziElemente);
  prikaziElemente(); 
}



// Kontakt stranica
if (window.location.pathname.includes("page3.html")) {
  console.log("Na stranici: Kontakt");
  const forma = document.getElementById("kontaktForma");
  forma.addEventListener("submit", function(event) {
      event.preventDefault();

      const ime = document.getElementById("ime").value;
      const email = document.getElementById("email").value;
      const poruka = document.getElementById("poruka").value;
      alert(`Hvala, ${ime}! Vaša poruka je primljena.\nEmail: ${email}\nPoruka: ${poruka}`);

      forma.reset();
  });
}

