const accueil = {
    template: `<div></div>`
};
const boutique = {
    template: `<div>
                <div class="partie">
                    <div>
                        <h2 id="titre">{{myTitle}}</h2>
                        <img id="img" :src="myImg">
                        <transition name="cards">
                            <p v-show="!cards" class="description">{{myDescription}}</p>
                        </transition>
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
    props: ['myImg', 'myTitle', 'myDescription']
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
