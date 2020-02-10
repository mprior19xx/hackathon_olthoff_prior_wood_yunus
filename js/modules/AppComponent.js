export default{
    template: `
    <section id="appLogIn">
        <h1>This is the app page</h1>

        <form id="my-form"> 
            <label for="name">Enter Your Name:</label>
            <input v-model="user" type="text" name="username" required placeholder="username">

            <label for="password">Enter Your Password:</label>
            <input v-model="password" type="password" name="password" required placeholder="password">

            <input @click.prevent="submitUserData" type="submit" value="Sign Up / Log In">
        </form>
    </section>
    `,

    data: function(){
        return{
            user: "",
            password: "",
        }
    },

    methods: {
        submitUserData() {
            //do a fetch using POST method
            //refer to node mailer ex from last semester
            //how to get data from a form into a fetch call
            console.log("hit the API pan is asking for, which should be in the root VUE instance.");

            document.querySelector('form').reset();

            //reset the username and password data in the app
            this.user="";
            this.password="";
        }
    },



    created: function() {
        console.log("app component rendered");
    },
};