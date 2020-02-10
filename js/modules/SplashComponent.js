export default{
    template: `
    <section id="splashPage">
        <div id="container">
            <h1 class="hidden">{{message}}</h1>

            <div id="heroCon">
                <video id="commercial" autoplay>
                    <source src="video/ontario_commercial.mp4" type="video/mp4">
                    Your browser does not support this video format.
                </video>
            </div>
            

            <div class="destinationMain">
                <h2> Popular Ontario Destinations </h2>
                <p> Come and visit some of the best sights in Canada! Ontario Summer is the shit. Its nice here.</p>
            </div>

            <div class="destinationMain">
                <h3> Algonquin Park </h3>
                <div class="destinationImg">
                    <img src="images/algonquin_park.png">
                    <p> Boasting etcetcetc Algonquin park is a camping and hiking destination. </p>
                </div>
            </div>

            <div class="destinationMain">
                <h3> Niagara Falls </h3>
                <div class="destinationImg">
                    <img src="images/niagara_falls.png">
                    <p> Come get soaking wet ;) This dude loves it here. </p>
                </div>
            </div>

            <div class="destinationMain">
                <h3> Beaches</h3>
                <div class="destinationImg">
                    <img src="images/man_on_beach.png">
                    <p> Look at this dude on the beach. Don't you wanna be him?</p>
                </div>
            </div>
        </div>

            <div id=signUpLink> 
                <h2> Sign Up For Our Newsletter Today </h2>
            </div>

            <div id="contactMain"> 
                <h2 id="contactTitle"> Get In Contact </h2>

                <ul id="contactForm">
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