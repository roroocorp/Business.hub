const courses = [
{
id: 1,
title: "Bitcoin : comprendre les bases",
cat: "Crypto",
level: "Débutant",
time: "55 min",
desc: "Blockchain, transactions et sécurité : des repères concrets pour comprendre Bitcoin sans jargon.",
icon: "₿",
lessons: [
["Bitcoin expliqué simplement", "Bitcoin est une monnaie numérique fonctionnant sur un réseau décentralisé. Les transactions sont vérifiées par un réseau d'ordinateurs."],
["La blockchain", "La blockchain est un registre partagé. Les transactions sont regroupées en blocs puis liées entre elles."],
["Wallets et sécurité", "Un wallet permet de gérer les clés donnant accès aux fonds. La phrase de récupération doit rester privée."],
["Les risques", "Le prix du Bitcoin peut fortement monter ou baisser. Il faut comprendre les risques avant toute décision."]
]
},
{
id: 2,
title: "Débuter en crypto",
cat: "Crypto",
level: "Débutant",
time: "50 min",
desc: "Découvrir les actifs numériques, les réseaux, les frais et les précautions avant une première démarche.",
icon: "🚀",
lessons: [
["Comprendre les actifs numériques", "Découvre les grandes familles d'actifs numériques et leur fonctionnement général."],
["Les réseaux", "Les différents réseaux possèdent leurs propres caractéristiques, frais et usages."],
["Les frais", "Avant une transaction, vérifie toujours les frais et le réseau utilisé."],
["Premiers réflexes", "Commence progressivement et vérifie toujours les informations importantes."]
]
},
{
id: 3,
title: "Sécuriser ses actifs numériques",
cat: "Crypto",
level: "Débutant",
time: "45 min",
desc: "Mots de passe, double authentification, sauvegardes et réflexes utiles contre les arnaques.",
icon: "🛡️",
lessons: [
["Sécuriser ses comptes", "Utilise des mots de passe uniques et difficiles à deviner."],
["Double authentification", "Active une méthode de double authentification lorsque cela est possible."],
["Sauvegardes", "Conserve tes informations importantes dans un endroit sécurisé."],
["Reconnaître les arnaques", "Méfie-toi des messages urgents, promesses garanties et demandes de codes."]
]
},
{
id: 4,
title: "Créer son premier business en ligne",
cat: "Business",
level: "Débutant",
time: "60 min",
desc: "Trouver une idée, identifier un besoin, construire une offre et obtenir ses premiers clients.",
icon: "💼",
lessons: [
["Trouver un problème", "Un bon business commence souvent par un problème réel rencontré par une audience précise."],
["Construire une offre", "Une offre claire explique pour qui elle est faite et quel résultat elle vise."],
["Trouver ses premiers clients", "Commence avec du contenu utile, des recommandations ou une prospection respectueuse."],
["Améliorer", "Demande des retours et améliore progressivement ton offre."]
]
},
{
id: 5,
title: "Trouver une idée de business",
cat: "Business",
level: "Débutant",
time: "45 min",
desc: "Une méthode pour observer les besoins, produire des pistes et tester une hypothèse.",
icon: "💡",
lessons: [
["Observer les besoins", "Observe les problèmes fréquents rencontrés par une audience précise."],
["Créer des pistes", "Transforme les problèmes observés en différentes idées de solutions."],
["Tester", "Teste une première version avant de construire quelque chose de complexe."],
["Analyser", "Compare les retours et garde les pistes les plus prometteuses."]
]
},
{
id: 6,
title: "E-commerce de A à Z",
cat: "Business",
level: "Intermédiaire",
time: "65 min",
desc: "Produit, page produit, livraison et service client : les bases d'une boutique lisible.",
icon: "🛒",
lessons: [
["Produit et marché", "Cherche un produit avec une demande identifiable et étudie les concurrents."],
["Créer sa boutique", "Présente clairement les produits, les informations et les conditions."],
["Acquisition", "Teste différents canaux et mesure les résultats."],
["Service client", "Travaille la qualité du service pour créer une relation durable."]
]
},
{
id: 7,
title: "Marketing digital pour débutants",
cat: "Marketing",
level: "Débutant",
time: "60 min",
desc: "Positionnement, cible, contenus et indicateurs pour communiquer avec cohérence.",
icon: "🚀",
lessons: [
["Positionnement", "Comprendre comment positionner clairement une offre auprès d'une audience."],
["Définir sa cible", "Choisis une audience précise plutôt que de vouloir parler à tout le monde."],
["Contenus utiles", "Crée du contenu qui informe, démontre ou divertit."],
["Mesurer et ajuster", "Observe les résultats et améliore progressivement ta méthode."]
]
},
{
id: 8,
title: "Gérer son budget et ses revenus",
cat: "Business",
level: "Débutant",
time: "50 min",
desc: "Suivre ses revenus, classer les dépenses et créer une marge de sécurité.",
icon: "💰",
lessons: [
["Comprendre ses revenus", "Identifie précisément tes différentes sources de revenus."],
["Classer les dépenses", "Sépare les dépenses nécessaires, variables et optionnelles."],
["Créer une marge", "Prévois une marge de sécurité adaptée à ta situation."],
["Suivre", "Observe régulièrement les entrées et sorties pour ajuster ton budget."]
]
},
{
id: 9,
title: "Créer du contenu sur les réseaux sociaux",
cat: "Marketing",
level: "Débutant",
time: "55 min",
desc: "Angle éditorial, formats et routine de publication pour partager du contenu utile.",
icon: "🎨",
lessons: [
["Choisir un angle", "Définis un angle éditorial reconnaissable."],
["Choisir les formats", "Teste plusieurs formats et observe ceux qui correspondent à ton audience."],
["Publier", "Construis une routine réaliste et régulière."],
["Analyser", "Observe les interactions et les clics pour améliorer tes publications."]
]
},
{
id: 10,
title: "IA pour gagner du temps",
cat: "Business",
level: "Débutant",
time: "50 min",
desc: "Utiliser les outils d'IA pour organiser, rédiger, analyser et automatiser certaines tâches.",
icon: "🤖",
lessons: [
["Identifier les tâches", "Commence par les tâches répétitives comme les synthèses ou les premiers brouillons."],
["Donner un bon contexte", "Une demande précise avec objectif et contraintes produit généralement un meilleur résultat."],
["Vérifier", "L'IA peut se tromper. Vérifie toujours les informations importantes."],
["Automatiser", "Automatise progressivement et garde une validation humaine pour les tâches importantes."]
]
}
];

const businesses = [
["Bitcoin", "Crypto", "Étudier l'écosystème Bitcoin, les services éducatifs et les outils autour de cette technologie.", "₿"],
["Création de sites", "Business", "Créer des sites vitrines pour les petites entreprises.", "🌐"],
["Montage vidéo", "Business", "Proposer du montage vidéo pour les créateurs et entreprises.", "🎬"],
["Agence IA", "Business", "Aider des entreprises à identifier certaines tâches automatisables.", "🤖"],
["Newsletter spécialisée", "Marketing", "Créer une audience autour d'un thème précis.", "✉️"],
["Formation en ligne", "Business", "Transformer une compétence réelle en parcours pédagogique.", "🎓"]
];

let categoryFilter = "Toutes";
let levelFilter = "Tous";

function setCategory(value) {
categoryFilter = value;
render();
}

function setLevel(value) {
levelFilter = value;
render();
}

function toggleMenu() {
document.getElementById("mainNav").classList.toggle("mobile");
}

function go(hash) {
location.hash = hash;

setTimeout(() => {
window.scrollTo({
top: 0,
behavior: "smooth"
});
}, 20);
}

function getAllCourses() {
const custom = JSON.parse(
localStorage.getItem("customCourses") || "[]"
);

return [...courses, ...custom];
}

function getCoverClass(category) {
if (category === "Crypto") return "crypto";
if (category === "Business") return "business";
if (category === "Marketing") return "marketing";

return "default";
}

function render() {

const searchInput = document.getElementById("search");

const query = searchInput
? searchInput.value.toLowerCase().trim()
: "";

const all = getAllCourses();

const list = all.filter(course => {

const categoryOK =  
  categoryFilter === "Toutes" ||  
  course.cat === categoryFilter;  

const levelOK =  
  levelFilter === "Tous" ||  
  course.level === levelFilter;  

const text = (  
  course.title +  
  " " +  
  course.desc +  
  " " +  
  course.cat +  
  " " +  
  course.level  
).toLowerCase();  

return categoryOK && levelOK && text.includes(query);

});

const grid = document.getElementById("courseGrid");

if (!grid) return;

grid.innerHTML = list.length
? list.map(card).join("")
:   <div class="card">   <div class="card-body">   <h3>Aucun résultat</h3>   <p class="card-description">   Essaie un autre mot ou modifie les filtres.   </p>   </div>   </div>  ;

const count = document.getElementById("courseCount");

if (count) {
count.textContent =
${list.length} formation${list.length > 1 ? "s" : ""} gratuite${list.length > 1 ? "s" : ""} disponible${list.length > 1 ? "s" : ""};
}

renderBusinesses();
renderSpace();
}

function card(course) {

const cover = getCoverClass(course.cat);

return `
<article class="card">

<div class="card-cover ${cover}">  

    <span class="cover-category">  
      ${course.cat}  
    </span>  

    <span class="cover-icon">  
      ${course.icon || "📚"}  
    </span>  

  </div>  

  <div class="card-body">  

    <div class="card-top">  

      <span class="tag level-tag">  
        ${course.level}  
      </span>  

      <span class="tag free-tag">  
        GRATUIT  
      </span>  

    </div>  

    <h3>  
      ${course.title}  
    </h3>  

    <p class="card-description">  
      ${course.desc}  
    </p>  

    <div class="card-meta">  
      <span>${course.cat}</span>  
      <span>${course.time}</span>  
    </div>  

    <button  
      class="course-button"  
      onclick="openCourse(${course.id})"  
    >  
      Lire le cours  
    </button>  

  </div>  

</article>

`;
}

function renderBusinesses() {

const grid = document.getElementById("businessGrid");

if (!grid) return;

grid.innerHTML = businesses.map((business, index) => {

const classes = getCoverClass(business[1]);  

return `  
  <article class="card">  

    <div class="card-cover ${classes}">  

      <span class="cover-category">  
        ${business[1]}  
      </span>  

      <span class="cover-icon">  
        ${business[3]}  
      </span>  

    </div>  

    <div class="card-body">  

      <h3>  
        ${business[0]}  
      </h3>  

      <p class="card-description">  
        ${business[2]}  
      </p>  

      <button  
        class="course-button"  
        onclick="alert('Idée à étudier : ${business[0]}')"  
      >  
        Voir l'idée  
      </button>  

    </div>  

  </article>  
`;

}).join("");
}

function openCourse(id) {

const all = getAllCourses();

const course = all.find(
c => Number(c.id) === Number(id)
);

if (!course) return;

const page = document.getElementById("course");

page.classList.add("active");

document.querySelectorAll(
"main > section:not(#course)"
).forEach(section => {
section.style.display = "none";
});

const done = JSON.parse(
localStorage.getItem("done_" + id) || "[]"
);

const progress = course.lessons.length
? Math.round(
(done.length / course.lessons.length) * 100
)
: 0;

const firstLesson =
course.lessons[0] || [
"Introduction",
course.desc
];

document.getElementById("courseDetail").innerHTML = `

<div class="detailbox">  

  <aside class="course-sidebar">  

    <span class="tag free-tag">  
      GRATUIT  
    </span>  

    <div class="course-info">  
      ${course.cat} • ${course.level} • ${course.time}  
    </div>  

    <h1>  
      ${course.title}  
    </h1>  

    <p>  
      ${course.desc}  
    </p>  

    <div class="progress-head">  
      <span>Votre progression</span>  
      <span id="courseProgress">  
        ${progress} %  
      </span>  
    </div>  

    <div class="progress-bar">  
      <div  
        class="progress-fill"  
        id="progressFill"  
        style="width:${progress}%"  
      ></div>  
    </div>  

    <button  
      class="complete-button"  
      onclick="completeCurrentCourse(${course.id})"  
    >  
      ${progress === 100 ? "Formation terminée ✓" : "Marquer comme terminé"}  
    </button>  


    <div class="lesson-list">  

      <h3>  
        Leçons du cours  
      </h3>  

      ${course.lessons.map((lesson, index) => `  
        <div class="lesson-nav ${done.includes(index) ? "done" : ""}">  
          ${index + 1}. ${lesson[0]}  
        </div>  
      `).join("")}  

    </div>  

  </aside>  


  <article class="course-content">  

    <div class="course-content-label">  
      LEÇON 1 SUR ${course.lessons.length}  
    </div>  

    <h2>  
      ${firstLesson[0]}  
    </h2>  

    <div class="objective">  

      <strong>  
        Objectif  
      </strong>  

      <p>  
        Comprendre les notions essentielles  
        et les appliquer progressivement.  
      </p>  

    </div>  

    <p class="lesson-content">  
      ${firstLesson[1]}  
    </p>  

    <div class="example">  

      <strong>  
        Exemple concret  
      </strong>  

      <div>  
        Mets cette notion en pratique avec une  
        situation réelle et note ce que tu observes.  
      </div>  

    </div>  

    <div class="tip-grid">  

      <div class="tip good">  

        <strong>  
          Conseil pratique  
        </strong>  

        Avance étape par étape et garde une trace  
        de tes décisions afin de pouvoir comparer  
        ce qui fonctionne réellement.  

      </div>  

      <div class="tip bad">  

        <strong>  
          Erreur à éviter  
        </strong>  

        Évite de multiplier les outils ou les décisions  
        avant d'avoir testé une première approche.  

      </div>  

    </div>  

    <div class="checklist">  

      <h3>  
        Checklist de la leçon  
      </h3>  

      <p>  
        ✓ Je peux expliquer cette notion simplement.  
      </p>  

      <p>  
        ✓ J'ai identifié une première action liée à cette leçon.  
      </p>  

      <p>  
        ✓ Je sais quelles informations je dois encore vérifier.  
      </p>  

    </div>  


    <div class="quiz">  

      <h3>  
        🧠 Mini-test  
      </h3>  

      <p>  
        Quelle est la meilleure approche  
        pour apprendre sérieusement ?  
      </p>  

      <label>  
        <input type="radio" name="quiz" value="0">  
        Chercher un résultat garanti.  
      </label>  

      <label>  
        <input type="radio" name="quiz" value="1">  
        Comprendre, vérifier et pratiquer progressivement.  
      </label>  

      <label>  
        <input type="radio" name="quiz" value="0">  
        Copier quelqu'un sans vérifier.  
      </label>  

      <button onclick="checkQuiz()">  
        Corriger le test  
      </button>  

      <p id="quizResult"></p>  

    </div>  

  </article>  

</div>

`;

location.hash = "course";

window.scrollTo({
top: 0,
behavior: "smooth"
});
}

function completeCurrentCourse(id) {

const all = getAllCourses();

const course = all.find(
c => Number(c.id) === Number(id)
);

if (!course) return;

const done = course.lessons.map(
(_, index) => index
);

localStorage.setItem(
"done_" + id,
JSON.stringify(done)
);

openCourse(id);
renderSpace();
}

function toggleLesson(id, index, checked) {

let done = JSON.parse(
localStorage.getItem("done_" + id) || "[]"
);

if (checked) {

done = [  
  ...new Set([  
    ...done,  
    index  
  ])  
];

} else {

done = done.filter(  
  value => value !== index  
);

}

localStorage.setItem(
"done_" + id,
JSON.stringify(done)
);

renderSpace();
}

function checkQuiz() {

const answer = document.querySelector(
'input[name="quiz"]:checked'
);

const result = document.getElementById(
"quizResult"
);

if (!answer) {

result.textContent =  
  "Choisis une réponse.";  

return;

}

if (answer.value === "1") {

result.textContent =  
  "✅ Bonne réponse !";

} else {

result.textContent =  
  "❌ Pas exactement. Comprends, vérifie et progresse étape par étape.";

}
}

function renderSpace() {

const all = getAllCourses();

const completed = all.filter(course => {

const done = JSON.parse(  
  localStorage.getItem(  
    "done_" + course.id  
  ) || "[]"  
);  

return done.length >= course.lessons.length;

}).length;

const text = document.getElementById(
"progressText"
);

if (text) {

text.textContent =  
  `${completed} formation${completed > 1 ? "s" : ""} terminée${completed > 1 ? "s" : ""}`;

}

const saved = document.getElementById(
"savedCourses"
);

if (!saved) return;

saved.innerHTML = all.slice(0, 6).map(course => {

const done = JSON.parse(  
  localStorage.getItem(  
    "done_" + course.id  
  ) || "[]"  
);  


const percent = course.lessons.length  
  ? Math.round(  
      (done.length / course.lessons.length) * 100  
    )  
  : 0;  


return `  

  <article class="card">  

    <div class="card-body">  

      <span class="tag free-tag">  
        ${percent} %  
      </span>  

      <h3>  
        ${course.title}  
      </h3>  

      <p class="card-description">  
        ${done.length}/${course.lessons.length}  
        leçons terminées.  
      </p>  

      <button  
        class="course-button"  
        onclick="openCourse(${course.id})"  
      >  
        Continuer  
      </button>  

    </div>  

  </article>  

`;

}).join("");
}

document
.getElementById("addForm")
.addEventListener("submit", event => {

event.preventDefault();  


const custom = JSON.parse(  
  localStorage.getItem("customCourses") || "[]"  
);  


const image =  
  document.getElementById("newImage").value.trim();  


custom.push({  

  id: Date.now(),  

  title:  
    document.getElementById("newTitle").value.trim(),  

  desc:  
    document.getElementById("newDescription").value.trim(),  

  cat:  
    document.getElementById("newCategory").value,  

  level:  
    document.getElementById("newLevel").value,  

  time: "À définir",  

  price:  
    document.getElementById("newPrice").value.trim() ||  
    "Gratuit",  

  image: image,  

  icon: "📚",  

  lessons: [  
    [  
      "Introduction",  
      "Bienvenue dans cette formation. Présente ici les premières notions importantes."  
    ],  
    [  
      "Leçon suivante",  
      "Ajoute davantage de contenu pédagogique, des exemples et des exercices."  
    ],  
    [  
      "Mise en pratique",  
      "Ajoute un exercice permettant de mettre les notions en p
