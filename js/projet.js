let cards = {
  template: `
<div>
    <div class="partie">
        <div>
            <h2 class="titre">{{title}}</h2>
            <img id="img" :src="img">
            <transition name="cards">
            <div v-show="!cards">
                <p>Prix: {{prixht}} €</p>
                <p>Quantité: {{quantite}}</p>
                <p>Date de sortie: {{date_de_parution}}</p>
                </div>
            </transition>
        </div>
    </div>
    <div>
        <button @click="cards =! cards">Cliquer !!!</button>
    </div>
</div>  `,
  data: function () {
    return ({
      cards: false,
    })
  },
  props: ['img', 'title', 'myDescription', 'prixht', 'quantite', 'date_de_parution']
};




const accueil = {
  template: `<div></div>`,
};


const boutique = {
  template: `
    <div >
   <div >
        <cards v-for="stocks in stock" class="cards" :img="stocks.image" :title="stocks.titre" :prixht="stocks.prixht" :quantite="stocks.quantite" :date_de_parution="stocks.date_de_parution">
        </cards > 
    </div>
    </div >`,
  data: function () {
    return ({
      cards: true,
      stock: [{
          id: "01",
          titre: "C'est arrivé la nuit",
          prixht: "10",
          quantite: "5",
          image: "./assets/images/livre1.jpg",
          date_de_parution: "07/08/2020",
          catégorie: "Roman"
        },
        {
          id: "02",
          titre: "Le crepuscule et l'aube",
          prixht: "8",
          quantite: "3",
          image: "./assets/images/livre2.jpg",
          date_de_parution: "12/04/2020",
          catégorie: "Fantastique"
        },
        {
          id: "03",
          titre: "La vie est un roman",
          prixht: "14",
          quantite: "12",
          image: "./assets/images/livre3.jpg",
          date_de_parution: "21/12/2020",
          catégorie: "Roman"
        },
        {
          id: "04",
          titre: "Quelqu'un de bien",
          prixht: "9",
          quantite: "7",
          image: "./assets/images/livre4.jpg",
          date_de_parution: "14/10/2020",
          catégorie: "Roman"
        },
        {
          id: "05",
          titre: "La vie mensongere des adultes",
          prixht: "13",
          quantite: "13",
          image: "./assets/images/livre5.jpg",
          date_de_parution: "17/06/2020",
          catégorie: "Amour"
        },
        {
          id: "06",
          titre: "Nos resiliences",
          prixht: "13",
          quantite: "10",
          image: "./assets/images/livre6.jpg",
          date_de_parution: "21/09/2020",
          catégorie: "Amour"
        },
        {
          id: "07",
          titre: "Ete anglais",
          prixht: "8",
          quantite: "5",
          image: "./assets/images/livre7.jpg",
          date_de_parution: "19/02/2020",
          catégorie: "Roman"
        },
        {
          id: "08",
          titre: "Frangines",
          prixht: "12",
          quantite: "15",
          image: "./assets/images/livre8.jpg",
          date_de_parution: "16/07/2020",
          catégorie: "Roman"
        },
        {
          id: "09",
          titre: "La commode aux tiroirs de couleurs",
          prixht: "21",
          quantite: "20",
          image: "./assets/images/livre9.jpg",
          date_de_parution: "14/12/2020",
          catégorie: "Roman"
        },
        {
          id: "10",
          titre: "Née sous une bonne étoile",
          prixht: "17",
          quantite: "10",
          image: "./assets/images/livre10.jpg",
          date_de_parution: "12/02/2020",
          catégorie: "Roman"
        },
        {
          id: "11",
          titre: "L'énigme de la chambre 622",
          prixht: "21",
          quantite: "10",
          image: "./assets/images/livre11.jpg",
          date_de_parution: "17/12/2020",
          catégorie: "Roman"
        },
        {
          id: "12",
          titre: "La ou chantent les ecrevisses",
          prixht: "15",
          quantite: "20",
          image: "./assets/images/livre12.jpg",
          date_de_parution: "24/08/2020",
          catégorie: "Amour"
        },
        {
          id: "13",
          titre: "Le bal des folles",
          prixht: "28",
          quantite: "30",
          image: "./assets/images/livre13.jpg",
          date_de_parution: "07/10/2020",
          catégorie: "Roman"
        },
        {
          id: "14",
          titre: "Stars",
          prixht: "11",
          quantite: "10",
          image: "./assets/images/livre14.jpg",
          date_de_parution: "18/10/2020",
          catégorie: "Amour"
        },
        {
          id: "15",
          titre: "Une chance sur un milliard",
          prixht: "21",
          quantite: "20",
          image: "./assets/images/livre15.jpg",
          date_de_parution: "16/03/2020",
          catégorie: "Amour"
        },
        {
          id: "16",
          titre: "Crénom baudelaire",
          prixht: "24",
          quantite: "20",
          image: "./assets/images/livre16.jpg",
          date_de_parution: "21/10/2020",
          catégorie: "Roman"
        },
        {
          id: "17",
          titre: "Impact",
          prixht: "27",
          quantite: "25",
          image: "./assets/images/livre17.jpg",
          date_de_parution: "21/09/2020",
          catégorie: "Roman"
        },
        {
          id: "18",
          titre: "L'inconnu de la foret",
          prixht: "17",
          quantite: "10",
          image: "./assets/images/livre18.jpg",
          date_de_parution: "18/06/2020",
          catégorie: "Roman"
        },
        {
          id: "19",
          titre: "L'illusion",
          prixht: "16",
          quantite: "10",
          image: "./assets/images/livre19.jpg",
          date_de_parution: "24/02/2020",
          catégorie: "Fantastique"
        },
        {
          id: "20",
          titre: "Incendie nocturne",
          prixht: "24",
          quantite: "20",
          image: "./assets/images/livre20.jpg",
          date_de_parution: "18/11/2020",
          catégorie: "Roman"
        },
        {
          id: "21",
          titre: "Eugène et moi",
          prixht: "19",
          quantite: "10",
          image: "./assets/images/livre21.jpg",
          date_de_parution: "14/12/2020",
          catégorie: "Roman"
        },
        {
          id: "22",
          titre: "Des ailes d'argent",
          prixht: "23",
          quantite: "10",
          image: "./assets/images/livre22.jpg",
          date_de_parution: "09/05/2020",
          catégorie: "Amour"
        },
        {
          id: "23",
          titre: "Le cri du moloch",
          prixht: "20",
          quantite: "15",
          image: "./assets/images/livre23.jpg",
          date_de_parution: "27/09/2020",
          catégorie: "Fantastique"
        },
        {
          id: "24",
          titre: "L'oracle de gé",
          prixht: "19",
          quantite: "20",
          image: "./assets/images/livre24.jpg",
          date_de_parution: "13/11/2020",
          catégorie: "Fantastique"
        },
        {
          id: "25",
          titre: "Chere mamie",
          prixht: "28",
          quantite: "35",
          image: "./assets/images/livre25.jpg",
          date_de_parution: "11/11/2020",
          catégorie: "Roman"
        },
        {
          id: "26",
          titre: "The Witcher",
          prixht: "30",
          quantite: "40",
          image: "./assets/images/livre26.jpg",
          date_de_parution: "24/12/2020",
          catégorie: "Fantastique"
        },
        {
          id: "27",
          titre: "L'affaire charles dexter ward",
          prixht: "28",
          quantite: "25",
          image: "./assets/images/livre27.jpg",
          date_de_parution: "15/06/2020",
          catégorie: "Roman"
        },
        {
          id: "28",
          titre: "Cendrillon",
          prixht: "27",
          quantite: "20",
          image: "./assets/images/livre28.jpg",
          date_de_parution: "09/07/2020",
          catégorie: "Amour"
        },
        {
          id: "29",
          titre: "Demon slayer",
          prixht: "27",
          quantite: "20",
          image: "./assets/images/livre29.jpg",
          date_de_parution: "13/07/2020",
          catégorie: "Fantastique"
        },
        {
          id: "30",
          titre: "La belle et la bete",
          prixht: "30",
          quantite: "25",
          image: "./assets/images/livre30.jpg",
          date_de_parution: "12/10/2020",
          catégorie: "Amour"
        },

      ],
    })

  },
  components: {
    cards,
  }
};
const livre_or = {
  template: `
    <div>
        <div id="app">
            <form>
                <input v-model="pseudo">
                <input v-model="date">
                <input v-model="message">

                <button type="submit" v-on:click="addCom">Envoyer</button>
                <div v-for="livre_or in commentaire">
                    <h1>Le {{livre_or.date}} {{livre_or.pseudo}} a écrit : {{livre_or.message}}</h1>
                </div>
            </form>
        </div>
    </div>`,

  data: function () {
    return ({

      pseudo: "",
      date: "",
      message: "",
      completed: false,
      commentaire: [{
        pseudo: "Steven",
        date: "05/10/2020",
        message: "Trop cool ce site, un plaisir !!!",
      }],
    })
  },
  methods: {
    addCom() {
      this.commentaire.push({
        pseudo: this.pseudo,
        completed: false,
        date: this.date,
        message: this.message,
      });
    },
  },
};

const formulaire_contact = {
  template: `
        <div id="app">
            <form v-if='disparaitre'>

                <div>
                    <p>NOM</p>
                    <input>
                    <p>PRENOM</p>
                    <input>
                    <p>MAIL</p>
                    <input>
                    <p>Message</p>
                    <input>
                </div>

                <button type="submit" @click="disparaitre=!disparaitre">Envoyer</button>

            </form>
            <div v-else="message" class="popup">
                lol
            </div>
        </div>`,
  data: function () {
    return ({
      disparaitre: true,
      message: false,
    })
  }

};

var routes = [{
    path: "/accueil",
    component: accueil,
  },
  {
    path: "/boutique",
    component: boutique,
  },
  {
    path: "/livre-or",
    component: livre_or,
  },
  {
    path: "/formulaire",
    component: formulaire_contact,
  },
];

const router = new VueRouter({
  routes: routes,
});





var vm = new Vue({
  el: "#app",
  router: router,
  data: {

    pseudo: "",
    date: "",
    message: "",
    disparaitre: true,
    message: false,


    todos: [{
      pseudo: "Steven",
      date: "05/10/2020",
      message: "Trop cool ce site, un plaisir !!!",
      completed: false,
    }],
  },
  checkForm: function (e) {
    this.errors = [];

    if (!this.name) {
      this.errors.push("Name required.");
    }
    if (!this.email) {
      this.errors.push("Email required.");
    } else if (!this.validEmail(this.email)) {
      this.errors.push("Valid email required.");
    }

    if (!this.errors.length) {
      return true;
    }

    e.preventDefault();
  },



});