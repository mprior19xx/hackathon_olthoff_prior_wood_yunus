export default{
    template: `
    

    <section id="appLogIn">
    <h1> Sign Up for Our Monthly Newsletter </h1>

    <p> Sign up for our monthly newsletter and get the inside scoop on all the hottest Ontario getaway locations.</p>

        <form id="my-form"> 
            <label for="name">Enter Your Username:</label>
            <input v-model="user" type="text" name="username" required placeholder="username">

            <label for="name">Enter Your First Name:</label>
            <input v-model="user" type="text" name="fname" required placeholder="first name">

            <label for="name">Enter Your Last Name:</label>
            <input v-model="user" type="text" name="ulname" required placeholder="last name">

            <label for="name">Enter Your Country:</label>
            <input v-model="user" type="text" name="country" required placeholder="Country">

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