export default{
    template: `
    <section id="splashPage">
        <h1 class="hidden">{{message}}</h1>

        <div id="splashMain"> 
            <img src="images/man_on_cliff.png" id="splashPic1">
            <img src="images/niagara_falls.png" id="splashPic2">
            <img src="images/blue_sky.png" id="splashPic3">
        </div>

        <div id="destinationMain">
            <h2> Popular Ontario Destinations </h2>
            <p> Come and visit some of the best sights in Canada! Ontario Summer is the shit. Its nice here.</p>

            <h3> Algonquin Park </h3>
            <img src="images/algonquin_park.png">
            <p> Boasting etcetcetc Algonquin park is a camping and hiking destination. </p>

            <h3> Niagara Falls </h3>
            <img src="images/niagara_falls.png">
            <p> Come get soaking wet ;) </p>

            <h3> Beaches</h3>
            <img src="images/man_on_beach.png">
            <p> Look at this dude on the beach. Don't you wanna be him?</p>
        </div>

        <div id=signUpLink> 
            <h2> Sign Up For Our Newsletter Today </h2>
        </div>

        <div id="contact"> 
            <h2> Get In Contact </h2>
            <ul>
                <li>Phone: 555-555-5555</li>
                <li>Email: xxx@xxx.xxx</li>
                <li>Fax: 555-555-5555</li>
            </ul>

            <p> For more information on Ontario desinations please contact Ontario Summer, your local travel agent, or get out there and explore for yourslef.</p>
        </div>


    </section>
    `,

    created: function(){
        console.log("splash component rendered");
    },

    data: function(){
        return{
            message: "Ontario Summer"
        }
    }
}