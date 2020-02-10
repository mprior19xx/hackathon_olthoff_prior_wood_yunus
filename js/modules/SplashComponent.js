export default{
    template: `<section id="splashPage">
    <h1>{{message}}</h1>

    <div id="splashMain"> Splash Main </div>

    <div id="splashSecond"> Splash Second </div>

    <div id="splashThird"> Splash Third </div>

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