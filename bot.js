
const Discord = require('discord.js');

const client = new Discord.Client();

let responses [65] = {

	"You're The One Who Started This Game. And Now That You're Losing, It's No Fun Anymore. You're Just A Big Baby.",
	"You're Just A Mindless Freak Of Nature, A Big Wad Of Spit-Out Chewing Gum!",
	"What's Wrong Frieza? Is Your Brain Another One Of Your Weak And Underused Muscles?",
	"I'm Angry Enough To Hurt Somebody. Pounding You Might Just Be The Therapy I Need.",
	"I'll Never Give In To You Circus Freaks.",
	"I Find It Hard To Believe That My Cells Are In Your Body. How Could You Have Turned Out So Ugly? What A Waste.",
	"If You Give Up Now, I Promise I'll Turn You Into Something Practical. Like A Toaster Or A Washing Machine.",
	"Maybe You Won't Be Such A Disappointment When You're Dead.",
	"My, My, What Do We Have Here? Oh Yes, The Ultimate Tub Of Lard, Bucket Of Bolts.",
	"World Champion? I've Known Stronger House Plants.",
	"SERVANT WOMAN! BRING ME A DRYING CLOTH AT ONCE!",
	"I'LL EAT YOUR WHOLE RACE!",
	"WELCOME TO THE END OF YOUR LIFE, AND I PROMISE, IT'S GOING TO HURT.",
	"WHO'S FACE IS UGLY?",
	"I DO A LOT OF PUSH-UPS AND SIT-UPS, AND I DRINK PLENTY OF JUICE.",
	"LET ME ASK YOU, DOES A MACHINE LIKE YOURSELF EVER EXPERIENCE FEAR?",
	"IS IT SLAVERY WHEN YOU GET WHAT YOU WANT?",
	"WHEN WE FIGHT, WE'LL NEED A WHOLE PLANET FOR AN ARENA.",
	"YOU SAY I'M ARROGANT, I SAY DAMN RIGHT. THAT'S PRIDE. PRIDE IN THE SAIYAN I AM.",
	"Too slow!",
	"Come here, runt!",
	"There's no such thing as a dirty fight!",
	"That's enough, Nappa!",
	"Don't order me around!",
	"Can you not read your enemy?",
	"I have no need for an ally who can't move.",
	"Show me your power, Kakarot!",
	"Soon I will control the entire universe!",
	"Make me immortal!",
	"Revive that fool!",
	"I am the strongest in the universe!",
	"Allow me to show you a power you could never achieve.",
	"You know there's no use in running away...",
	"Get out of my sight, you worthless low-class scum!",
	"You two may have fused into one, but you're still no match for the Prince of Saiyans!",
	"Do you think I would be defeated so easily?",
	"I will go beyond... Far beyond the power of a Super Saiyan!",
	"Fortune is finally on my side!",
	"Real Saiyans have black hair...",
	"Your naiveté makes me want to puke...",
	"You didn't actually think you could beat me like that, did you?",
	"I don't give a damn about other universes. If you're a Saiyan, then bow before me!",
	"I am a super-elite!",
	"Alright, who's next?",
	"Hey! Clean this garbage up. It stinks.",
	"Going any further would just be a waste of time.",
	"You were no match for me after all...",
	"This guy's been staring at me the entire battle... Tch, he's starting to get on my nerves.",
	"What can a pathetic Earthling like you do? Stay out of my way!",
	"Y-You're the God of Destruction! Why would you help me?",
	"What does a low-class warrior like you want with me? I don't need help from someone like you.",
	"Tch! Damn you and your bizarre techniques, Kakarot!",
	"Push through the Pain. Giving Up Hurts More.",
	"Welcome to the end of your Life! And, I promise it’s going to hurt.",
	"Even the Mightiest Warriors Experience fears. What makes them a true Warrior is the courage that they possess to overcome their fears.",
	"You may have invaded my mind and body but there is one thing a Saiyan always keeps… his pride!",
	"I do not fear this new challenge. Rather like a true warrior I will rise to meet it.",
	"Never send a boy to do a man’s job.",
	"Where is your honor? Like all pure-blooded Saiyans, Kakarot would rather die fighting than win with one of those disgraceful senzu beans as his crutch! Kakarot trained in the hyperbolic time chamber just as we did! Now let’s see what he can do!",
	"How could you die like that? How, Kakarot? I’ll never have the chance…to prove my strength against you. You died without fear. What does that make of me? I am no warrior. And I will never fight again.",
	"Are you ready now to witness a power not seen for thousands of years?",
	"Don’t remind me. I’m mad enough to hurt somebody and pounding you just might be the therapy I need.",
	"Hear me out. I don’t care about the people of Earth, but I promise I will destroy Cell.",
	"Go out and play if you want. But leave Cell to me. Because I don’t want anyone getting in my way. Do you understand?",
	"Kakarot… please… destroy Frieza… He made me what I am… Don’t let him… do it… to anyone else… whatever it takes… stop him… please"

}; 

client.on('ready', () => {

    console.log('Vegeta\'s Here');

});

 

client.on('message', message => {

    if ('vegeta' in message.content.toLowerCase ()) {

    	let i = Math.floor(Math.random() * 65);

       message.send (responses [i]);

       }

});

 

client.login(process.env.BOT_TOKEN);
