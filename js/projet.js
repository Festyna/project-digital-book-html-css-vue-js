const accueil = {
  template: `<div></div>`,
};
const boutique = {
  template: `<div></div>`,
};
const livre_or = {
  template: `    <div>
            <div id="app">
                <form>
                <input v-model="date" placeholder="Entrez la date">
                <input v-model="pseudo" placeholder="Entrez votre pseudo">
                <input v-model="message" placeholder="Entrez votre message">

                    <button type="submit" v-on:click="addCom">Envoyer</button>
                    <div v-for="livre_or in commentaire">
                        <h1>Le {{livre_or.date}} {{livre_or.pseudo}} a écrit : {{livre_or.message}}</h1>
                    </div>
                </form>
            </div>
            </div>`,

  data: function () {
    return {
      commentaire: [
        {
          pseudo: "Steven",
          date: "05/10/2020",
          message: "Trop cool ce site, un plaisir !!!",
          completed: false,
        },
      ],
    };
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
};

const formulaire_contact = {
  template: `
                <div> 
                
            </div>`,
};

var routes = [
  {
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

  data: {
    disparaitre: true,
    message: false,
    pseudo: "",
    date: "",
    message: "",
    errors: [],
    name: null,
    email: null,
    movie: null,

    todos: [
      {
        pseudo: "Steven",
        date: "05/10/2020",
        message: "Trop cool ce site, un plaisir !!!",
        completed: false,
      },
    ],
  },

  router: router,

  methods: {
    addTodo() {
      this.todos.push({
        pseudo: this.pseudo,
        completed: false,
        date: this.date,
        message: this.message,
      });
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
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
  computed: {},
});
