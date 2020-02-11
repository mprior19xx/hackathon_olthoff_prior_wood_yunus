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

                
                <div id="destinationIntro2">
                    <h3> Popular Ontario Destinations </h3>
                    <p> Come and visit some of the best sights in Canada! Ontario Summer is the shit. Its nice here.</p>
                </div>

                <div id="dest1">
                    <h3> Tobermory </h3>

                    <div class="destinationImg">
                        <img src="images/family_on_dock.jpg">
                        <img src="images/flag_on_back.jpg">
                    </div>
                    <div class="destinationDesc">
                        <p> Where water and land meet sky. Take a glass-bottomed boat to Flowerpot Island or rent a SUP where you can explore the coastline. Comb the village galleries and shops for treasures. Your first impression is breathtaking. Your last is unforgettable. </p>
                    </div>

                    
                </div>

                <div id="dest2">
                    <h3 class="heading"> Bon Echo </h3>

                    <div class="destinationImg">
                        <img src="images/kids_biking.jpg">
                        <img src="images/kid_on_mans_back.jpg">
                    </div>

                    <div class="destinationDesc">
                        <p> Bon Echo has over 500 campsites that include over 200 electrical-serviced sites. There are over 40 km of hiking trails as well as many canoes as well as kayak opportunities in more than 15 lakes and bodies of water. The park also has a rich cultural history and is a sacred place with over 260 Indigenous pictographs within the boundaries. </p>
                    </div>
                </div>

                <div id="dest3">
                    <h3 class="heading"> Macgregor Point Provincial Park </h3>
                    

                    <div class="destinationImg">
                        <img src="images/guy_in_kayak.jpg">
                        <img src="images/mom_and_daughter.jpg">
                    </div>

                    <div class="destinationDesc">
                        <p> Located on the Lake Huron Shoreline MacGregor Point Provincial Park offers more than 300 beautiful campsites ranging from private, rustic to family compounds. With playgrounds, trails, and even a private beach, MacGregor Park has something for everyone in the family. Hikes with dozens of views for unforgettable memories.</p>
                    </div>
                </div>
            </div>

            <div>
                    <div class="destinationImg">
                        <img src="images/family_outside.jpg">
                        <img src="images/toronto.jpg">
                    </div>

                    <div class="visitText">
                        <h2> Visit Ontario Today!</h2>
                    </div>

                    <div class="destinationImg">
                        <img src="images/toronto2.jpg">
                        <img src="images/couple_walking.jpg">
                    </div>  
            </div>
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