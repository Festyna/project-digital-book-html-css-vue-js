

const accueil = {
  template: `
<div class="cd_background">
  <section id="slideshow">
    <div class="entire-content">
      <div class="content-carrousel">
        <figure class="shadow"><img src="./assets/rose-2101475_1920.jpg"></figure>
        <figure class="shadow"><img src="./assets/removebg-preview.png" /></figure>
        <figure class="shadow"><img src="./assets/paper-1100254_1920.jpg" /></figure>
        <figure class="shadow"><img src="./assets/narrative-794978_1920.jpg" /></figure>
        <figure class="shadow"><img src="./assets/girl-3421489_1920.jpg" /></figure>
        <figure class="shadow"><img src="./assets/book-1659717_1920.jpg" /></figure>
        <figure class="shadow"><img src="./assets/book-419589_1920.jpg" /></figure>
        <figure class="shadow"><img src="./assets/book-863418_1920.jpg" /></figure>
        <figure class="shadow"><img src="./assets/book-2929646_1920.jpg" /></figure>
      </div>
    </div>
  </section>
  <div class="container">
    <div class="profile-container">
      <div class="profile-wrapper">
        <div class="profile-card">
          <div class="fav-icon">
            <i class="far fa-heart"></i>
          </div>

          <img src="./assets/hninja-1.jpg" alt="profile pics">
          <h2>Michael Monfort</h2>
          <h4>Le Ninja qui te defonce si tu paye pas ton livre 
          🐙 "Roberto, mio palmo."
          🍼 Papa x 2
          </h4>
          <p>Parmi le vaste choix de genre littéraire qui existent, les romans font partie des plus importants et des genres les plus lus.  </p>


          
          
          <a href="https://www.instagram.com/michael.monfort/?hl=fr%22%3EView">View Profile</a>


        </div>
      </div>
    </div>
  </div>
</div>`,
};

const boutique = {
  template: `<div>
  <div class="cd_container">
    <div v-if="show">
      <div class="cd_cards" >
          <div v-for="stock in stocks" :img="stock.image" :title="stock.titre" :prixht="stock.prixht"
            :quantite="stock.quantite" :date_de_parution="stock.date_de_parution">

            <div class="cd_carte">
              <h2 class="titre">{{stock.titre}}</h2>
              <img id="img" :src="stock.image">

              <p>Prix: {{stock.prixht}} €</p>
              <p>Quantité: {{stock.quantite}}</p>
              <p>Date de sortie: {{stock.date_de_parution}}</p>

            </div>
            <button class="button_panier" @click="">Cliquer !!!</button>
            <button class="button_panier" @click="addArticle(stock)">Acheter</button>
            
        </div>
      </div>
    </div>
    <div v-else-if="button_hide" >
      <form class="contact-form">
        <h2 class="">Contactez-Nous</h2>
        <label class="#" for="firstname">Prénom</label>
        <input type="text" name="prénom" id="firstname" required />

        <label class="text-input-label" for="lastname">Nom</label>
        <input type="text" name="nom" id="lastname" required />

        <label class="text-input-label" for="email">Email</label>
        <input type="email" name="email" id="email" required />

        <label class="text-input-label" for="message">Message:</label>
        <textarea name="message" id="message" required></textarea>

        <br />

        <input type="checkbox" name="consentement" id="consent" />
        <label for="consent" class="checkbox-label">
            J'accepte que mes données ci-dessus soient traitées à des
            fins de prises de contact commerciales.
        </label>

        <br />

          <button @click.prevent="button_hide=!button_hide" class="submit-button">Envoyer</button>
      </form>
      
    </div>
    <div v-else-if="message_confirmation" >
      <form class="contact-form">
        <h2 class="">deuxième</h2>
        <label class="#" for="firstname">Prénom</label>
        <input type="text" name="prénom" id="firstname" required />

        <label class="text-input-label" for="lastname">Nom</label>
        <input type="text" name="nom" id="lastname" required />

        <label class="text-input-label" for="email">Email</label>
        <input type="email" name="email" id="email" required />

        <label class="text-input-label" for="message">Message:</label>
        <textarea name="message" id="message" required></textarea>

        <br />

        <input type="checkbox" name="consentement" id="consent" />
        <label for="consent" class="checkbox-label">
            J'accepte que mes données ci-dessus soient traitées à des
            fins de prises de contact commerciales.
        </label>

        <br />

        <button @click.prevent="message_confirmation=!message_confirmation" v-class="submit-button">Envoyer</button>
      </form>
    </div>
    <div v-else>
      Bon appétit !
    </div>
    



    <div class="cd_panier">
      <table>
        <thead>
          <tr>
            <td></td>
            <td>titre </td>
            <td>prix </td>
          </tr>
        </thead>

        <tr v-for="bag in panier">
          <td><img :src="bag.image" /></td>
          <td>{{bag.titre}} </td>
          <td>{{bag.prixht}} </td>
        </tr>
        <p>Votre panier est de {{this.total}}</p>
        <button @click.prevent="show=!show" class="submit-button">Payer</button>
      </table>
    </div>
  </div>
</div>`,
  data: function () {
    return {
      total: 0,
      nb_articles: 0,
      prix_panier: 0,
      button_hide: true,
      cards: true,
      show: true,
      disparaitre: false,
      message_confirmation: true,
      stocks: [{
        id: "01",
        titre: "C'est arrivé la nuit",
        prixht: 10,
        quantite: 5,
        image: "./assets/images/livre1.jpg",
        date_de_parution: "07/08/2020",
        catégorie: "Roman",
      },
      {
        id: "02",
        titre: "Le crepuscule et l'aube",
        prixht: 10,
        quantite: 3,
        image: "./assets/images/livre2.jpg",
        date_de_parution: "12/04/2020",
        catégorie: "Fantastique",
      },
      {
        id: "03",
        titre: "La vie est un roman",
        prixht: 14,
        quantite: 12,
        image: "./assets/images/livre3.jpg",
        date_de_parution: "21/12/2020",
        catégorie: "Roman",
      },
      {
        id: "04",
        titre: "Quelqu'un de bien",
        prixht: 9,
        quantite: 7,
        image: "./assets/images/livre4.jpg",
        date_de_parution: "14/10/2020",
        catégorie: "Roman",
      },
      {
        id: "05",
        titre: "La vie mensongere des adultes",
        prixht: 13,
        quantite: 13,
        image: "./assets/images/livre5.jpg",
        date_de_parution: "17/06/2020",
        catégorie: "Amour",
      },
      {
        id: "06",
        titre: "Nos resiliences",
        prixht: 13,
        quantite: 10,
        image: "./assets/images/livre6.jpg",
        date_de_parution: "21/09/2020",
        catégorie: "Amour",
      },
      {
        id: "07",
        titre: "Ete anglais",
        prixht: 8,
        quantite: 5,
        image: "./assets/images/livre7.jpg",
        date_de_parution: "19/02/2020",
        catégorie: "Roman",
      },
      {
        id: "08",
        titre: "Frangines",
        prixht: 12,
        quantite: 15,
        image: "./assets/images/livre8.jpg",
        date_de_parution: "16/07/2020",
        catégorie: "Roman",
      },
      {
        id: "09",
        titre: "La commode aux tiroirs de couleurs",
        prixht: 21,
        quantite: 20,
        image: "./assets/images/livre9.jpg",
        date_de_parution: "14/12/2020",
        catégorie: "Roman",
      },
      {
        id: "10",
        titre: "Née sous une bonne étoile",
        prixht: 17,
        quantite: 10,
        image: "./assets/images/livre10.jpg",
        date_de_parution: "12/02/2020",
        catégorie: "Roman",
      },
      {
        id: "11",
        titre: "L'énigme de la chambre 622",
        prixht: 21,
        quantite: 10,
        image: "./assets/images/livre11.jpg",
        date_de_parution: "17/12/2020",
        catégorie: "Roman",
      },
      {
        id: "12",
        titre: "La ou chantent les ecrevisses",
        prixht: 15,
        quantite: 20,
        image: "./assets/images/livre12.jpg",
        date_de_parution: "24/08/2020",
        catégorie: "Amour",
      },
      {
        id: "13",
        titre: "Le bal des folles",
        prixht: 28,
        quantite: 30,
        image: "./assets/images/livre13.jpg",
        date_de_parution: "07/10/2020",
        catégorie: "Roman",
      },
      {
        id: "14",
        titre: "Stars",
        prixht: 11,
        quantite: 10,
        image: "./assets/images/livre14.jpg",
        date_de_parution: "18/10/2020",
        catégorie: "Amour",
      },
      {
        id: "15",
        titre: "Une chance sur un milliard",
        prixht: 21,
        quantite: 20,
        image: "./assets/images/livre15.jpg",
        date_de_parution: "16/03/2020",
        catégorie: "Amour",
      },
      {
        id: "16",
        titre: "Crénom baudelaire",
        prixht: 24,
        quantite: 20,
        image: "./assets/images/livre16.jpg",
        date_de_parution: "21/10/2020",
        catégorie: "Roman",
      },
      {
        id: "17",
        titre: "Impact",
        prixht: 27,
        quantite: 25,
        image: "./assets/images/livre17.jpg",
        date_de_parution: "21/09/2020",
        catégorie: "Roman",
      },
      {
        id: "18",
        titre: "L'inconnu de la foret",
        prixht: 17,
        quantite: 10,
        image: "./assets/images/livre18.jpg",
        date_de_parution: "18/06/2020",
        catégorie: "Roman",
      },
      {
        id: "19",
        titre: "L'illusion",
        prixht: 16,
        quantite: 10,
        image: "./assets/images/livre19.jpg",
        date_de_parution: "24/02/2020",
        catégorie: "Fantastique",
      },
      {
        id: "20",
        titre: "Incendie nocturne",
        prixht: 24,
        quantite: 20,
        image: "./assets/images/livre20.jpg",
        date_de_parution: "18/11/2020",
        catégorie: "Roman",
      },
      {
        id: "21",
        titre: "Eugène et moi",
        prixht: 19,
        quantite: 10,
        image: "./assets/images/livre21.jpg",
        date_de_parution: "14/12/2020",
        catégorie: "Roman",
      },
      {
        id: "22",
        titre: "Des ailes d'argent",
        prixht: 23,
        quantite: 10,
        image: "./assets/images/livre22.jpg",
        date_de_parution: "09/05/2020",
        catégorie: "Amour",
      },
      {
        id: "23",
        titre: "Le cri du moloch",
        prixht: 20,
        quantite: 15,
        image: "./assets/images/livre23.jpg",
        date_de_parution: "27/09/2020",
        catégorie: "Fantastique",
      },
      {
        id: "24",
        titre: "L'oracle de gé",
        prixht: 19,
        quantite: 20,
        image: "./assets/images/livre24.jpg",
        date_de_parution: "13/11/2020",
        catégorie: "Fantastique",
      },
      {
        id: "25",
        titre: "Chere mamie",
        prixht: 28,
        quantite: 35,
        image: "./assets/images/livre25.jpg",
        date_de_parution: "11/11/2020",
        catégorie: "Roman",
      },
      {
        id: "26",
        titre: "The Witcher",
        prixht: 30,
        quantite: 40,
        image: "./assets/images/livre26.jpg",
        date_de_parution: "24/12/2020",
        catégorie: "Fantastique",
      },
      {
        id: "27",
        titre: "L'affaire charles dexter ward",
        prixht: 28,
        quantite: 25,
        image: "./assets/images/livre27.jpg",
        date_de_parution: "15/06/2020",
        catégorie: "Roman",
      },
      {
        id: "28",
        titre: "Cendrillon",
        prixht: 27,
        quantite: 20,
        image: "./assets/images/livre28.jpg",
        date_de_parution: "09/07/2020",
        catégorie: "Amour",
      },
      {
        id: "29",
        titre: "Demon slayer",
        prixht: 27,
        quantite: 20,
        image: "./assets/images/livre29.jpg",
        date_de_parution: "13/07/2020",
        catégorie: "Fantastique",
      },
      {
        id: "30",
        titre: "La belle et la bete",
        prixht: 30,
        quantite: 25,
        image: "./assets/images/livre30.jpg",
        date_de_parution: "12/10/2020",
        catégorie: "Amour",
      },
      ],
      panier: [],
    };
  },
  methods: {
    addArticle: function (stock) {
      this.panier.push(stock)
      console.log(stock)
      var ht = 0;
      console.log(this.nb_articles);
      this.panier.forEach(element => {
        console.log("element ht" + element.prixht)
        ht += element.prixht;
        console.log("ht", ht)
      })
      this.total = ht * 1.20;

    }

  },

};
const livre_or = {
  template: `
    <div class="cd-livreor">
        
            <form class="form_livreor">
               <div v-for="livre_or in commentaire">
                    <h1>Le {{livre_or.date}} {{livre_or.pseudo}} a écrit : {{livre_or.message}}</h1>
                </div> 
        <input v-model="date" placeholder=" Entrez la date" class="inputlivre">
        <input v-model="pseudo" placeholder=" Entrez votre pseudo" class="inputlivre">
        <input v-model="message" placeholder=" Entrez votre message" class="inputlivre">

                <button type="submit" v-on:click="addCom">Envoyer</button>
                
            </form>
       
    </div>`,

  data: function () {
    return {
      pseudo: "",
      date: "",
      message: "",
      completed: false,
      commentaire: [{
        pseudo: "Steven",
        date: "05/10/2020",
        message: "Trop cool ce site, un plaisir !!!",
      },],
    };
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
        <div class="cd_contact">              
                <form class="contact-form" v-if='disparaitre'>
                  <h2 class="section-title">Contactez-Nous</h2>
                    <label class="text-input-label" for="firstname">Prénom</label>
                    <input type="text" name="prénom" id="firstname" required />
    
                    <label class="text-input-label" for="lastname">Nom</label>
                    <input type="text" name="nom" id="lastname" required />
    
                    <label class="text-input-label" for="email">Email</label>
                    <input type="email" name="email" id="email" required />
    
                    <label class="text-input-label" for="message">Message:</label>
                    <textarea name="message" id="message" required></textarea>
    
                    <br />
    
                    <input type="checkbox" name="consentement" id="consent" />
                    <label for="consent" class="checkbox-label">
                        J'accepte que mes données ci-dessus soient traitées à des
                        fins de prises de contact commerciales.
                    </label>
    
                    <br />
    
                    <button @click.prevent="disparaitre=!disparaitre" class="submit-button">Envoyer</button>
                </form>
                <div v-else="message" class="popup">
                  lol
                </div>

            
                </div>
        </div>`,
  data: function () {
    return {
      disparaitre: true,
      message: false,
    };
  },
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
    },],
  },
});