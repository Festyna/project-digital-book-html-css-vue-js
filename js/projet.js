const accueil = {
    template: `<div></div>`
};
const boutique = {
    template: `<div></div>`
};
const livre_or = {
    template: `<div></div>`
};
const formulaire_contact = {
    template: `<div></div>`
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
    data: {
        disparaitre: true,
        message: false,
        pseudo: "",
        date: "",
        message: "",


        router: router,
        todos: [{
            pseudo: "Steven",
            date: "05/10/2020",
            message: "Trop cool ce site, un plaisir !!!",
            completed: false,
        }],
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
    },
    computed: {},
});