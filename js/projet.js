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
    template: `<div></div>`
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
            stock: [
                { id: "01", titre: "Lardon", prixht: "10", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "02", titre: "Mardon", prixht: "10", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "03", titre: "Pardon", prixht: "10", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "04", titre: "Tardon", prixht: "10", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "05", titre: "Sardon", prixht: "10", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "06", titre: "Qardon", prixht: "10", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "07", titre: "Vardon", prixht: "10", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "08", titre: "Wardon", prixht: "10", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "09", titre: "Xardon", prixht: "10", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "10", titre: "Zardon", prixht: "10", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "11", titre: "Saumon", prixht: "15", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "12", titre: "Taumon", prixht: "15", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "13", titre: "lardon", prixht: "15", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "14", titre: "lardon", prixht: "15", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "15", titre: "lardon", prixht: "15", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "16", titre: "lardon", prixht: "15", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "17", titre: "lardon", prixht: "15", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "18", titre: "lardon", prixht: "15", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "19", titre: "lardon", prixht: "15", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "20", titre: "lardon", prixht: "15", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "21", titre: "lardon", prixht: "15", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "22", titre: "lardon", prixht: "23.99", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "23", titre: "lardon", prixht: "23.99", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "24", titre: "lardon", prixht: "23.99", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "25", titre: "lardon", prixht: "23.99", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "26", titre: "lardon", prixht: "23.99", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "27", titre: "lardon", prixht: "23.99", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "28", titre: "lardon", prixht: "23.99", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "29", titre: "lardon", prixht: "23.99", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },
                { id: "30", titre: "lardon", prixht: "23.99", quantite: "5", image: "./assets/images/vue.jpg", date_de_parution: "07/10/2020", catégorie: "Porc" },

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
            this.commentaire.push({ pseudo: this.pseudo, completed: false, date: this.date, message: this.message, });
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
    path: '/accueil',
    component: accueil
},
{
    path: '/boutique',
    component: boutique
},
{
    path: '/livre-or',
    component: livre_or
},
{
    path: '/formulaire',
    component: formulaire_contact
},

];

const router = new VueRouter({
    routes: routes
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


    methods: {


        addTodo() {
            this.todos.push({
                pseudo: this.pseudo,
                completed: false,
                date: this.date,
                message: this.message,
            });
        },
    },
    computed: {},
});