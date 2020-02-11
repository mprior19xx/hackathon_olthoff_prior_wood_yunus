export default{
    template: `
    
    <section id="appLogIn">
        <h2> Ontario Summer Monthly Newsletter </h2>

        <p> Sign up for our monthly newsletter and get the inside scoop on all the hottest Ontario getaway locations! Subscribers will gain access to exclusive offers and reward programs through Tourism Ontario.</p>

        <form id="my-form" action="./admin/sign-up.php" method="post"> 
            <label for="name">First Name:</label>
            <input type="text" name="firstname" value="" required placeholder="First Name">

            <label for="name">Last Name:</label>
            <input type="text" name="lastname" value="" required placeholder="Last Name">

            <label for="email">Email:</label>
            <input type="text" name="email" value="" required placeholder="Email">

            <label for="name">Country:</label>
            <input type="text" name="country" value="" required placeholder="Country">

            <button name="submit" type="submit">Sign-Up</button>
        </form>
    </section>
    `,

    created: function() {
        console.log("register component rendered");
    },
};