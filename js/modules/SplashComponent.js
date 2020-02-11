export default{
    template: `
    <section id="splashPage">
        <div id="container">
            <h1 class="hidden">{{message}}</h1>

            <div id="heroCon">
                <video id="commercial" autoplay loop controls poster="images/video_poster.jpg">
                    <source src="video/ontario_commercial.mp4" type="video/mp4">
                    Your browser does not support this video format.
                </video>
            </div>
            

            <div class="destinationMain">
                <h2> Popular Ontario Destinations </h2>
                <p> Come and visit some of the best sights in Canada! Ontario Summer is the shit. Its nice here.</p>
            </div>

            <div class="destinationMain">
                <h3> Tobermory </h3>
                <div class="destinationImg">
                    <img class="splashImg"src="images/1.jpg">
                    <p> Where water and land meet sky. Take a glass-bottomed boat to Flowerpot Island or rent a SUP where you can explore the coastline. Comb the village galleries and shops for treasures. Your first impression is breathtaking. Your last is unforgettable. </p>
                </div>
            </div>

            <div class="destinationMain">
                <h3> Bon Echo </h3>
                <div class="destinationImg">
                    <img class="splashImg" src="images/2.jpg">
                    <p> Bon Echo has over 500 campsites that include over 200 electrical-serviced sites. There are over 40 km of hiking trails as well as many canoes as well as kayak opportunities in more than 15 lakes and bodies of water. The park also has a rich cultural history and is a sacred place with over 260 Indigenous pictographs within the boundaries. </p>
                </div>
            </div>

            <div class="destinationMain">
                <h3> Macgregor Point Provincial Park </h3>
                <div class="destinationImg">
                    <img class="splashImg" src="images/3.jpg">
                    <p> Located on the Lake Huron Shoreline MacGregor Point Provincial Park offers more than 300 beautiful campsites ranging from private, rustic to family compounds. With playgrounds, trails, and even a private beach, MacGregor Park has something for everyone in the family. Hikes with dozens of views for unforgettable memories.</p>
                </div>
            </div>
        </div>

            <div id=signUpLink> 
                <h2> Sign Up For Our Newsletter Today </h2>
            </div>

            <div id="gallery">
                    <img class="box" src="images/5.jpg">
                    <img class="box" src="images/6.jpg">
                    <img class="box" src="images/8.jpg">
                    <img class="box" src="images/9.jpg">
                    <img class="box" src="images/10.jpg">
                    <img class="box" src="images/7.jpg">
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