module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["You'll have a super dope instructor who's name will start with J", "He will give you a 100 on this assessment cause you're very good at brown nosing :)", "On gosh though, he's pretty cool", "Stay away from Paris. No reason it's just overrated", "It's true what tobacco comapanies say, cigarettes make you look way cool. Ignore those health studies, studies are for nerds and they aren't cool."];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },
    getAnxiety: (req, res) => {
        const anxiety = ["You often smell inexplicably of pickles", "Dude, everyone is looking at you", "Hey, don't let all this get you down, those other anxieties are just jealous of you", "Yo, something is definitly wrong right now. I won't say what, but definitley something"];

        let randomIndex = Math.floor(Math.random() * anxiety.length);
        let randomAnxiety = anxiety[randomIndex];

        res.status(200).send(randomAnxiety);
    },
    getInspo: (req, res) => {
        const inspo = ["When you fall off the horse, you get up and EAT THAT HORSE!!!", "You're doing your best, no one can ask for more than that.", "Meaning and solace aren't to be found in the heavens, but in the trenches of everyday living.", "Your dog likes you, you gonna tell me they're wrong?"];

        let randomIndex = Math.floor(Math.random() * inspo.length);
        let randomInspo = inspo[randomIndex];

        res.status(200).send(randomInspo);
    },
    getInsult: (req, res) => {
        const insult = ["I didn't mean anything in compliments", "You could be doing better if I'm being completely honest", "Hey, nice shirt, does it come in fashion??", "Your dog only likes you cause it suffering from stockholm syndrome", "I'm sorry, those were mean. You're doing great, NOT!!"];

        let randomIndex = Math.floor(Math.random() * insult.length);
        let randomInsult = insult[randomIndex];

        res.status(200).send(randomInsult);
    },

}