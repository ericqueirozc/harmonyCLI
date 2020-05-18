//HarmonyCLI
//NodeJS project
//Author: Eric Queiroz Cavalcante


//futures updates:
//choose the style of music that are the focus and the difficult of the accords
//choose BPM and generate a basic beat
//integration with some software to turn into song

//Importing Libs
const program = require('commander'); //allows us to use commands
const figlet = require('figlet'); // stylization of tittle
const chalk = require('chalk') // stylization of texts
const inquirer = require('inquirer') //lib for best communication with the user

const pack = require('./package.json');//to get the version of the software
program.version = pack.version;

//making the logo and the welcome message
console.log(chalk.green(figlet.textSync('Harmony-CLI')));
console.log(`Welcome to HarmonyCLI version ${program.version}`);

//Array of chords

//Major Harmononic Field
const harmonicFieldChordsTriads_C = ['C','Dm','Em','F','G','Am','Bm(b5)'];
const harmonicFieldChordsTetrads_C = ['C7M','Dm7','Em7','F7M','G7','Am7','Bm7(b5)'];

const harmonicFieldChordsTriads_D = ['D','Em','F#m','G','A','Bm','C#m(b5)'];
const harmonicFieldChordsTetrads_D = ['D7','Em7','F#m7','G7','A7','Bm7','C#m7(b5)'];

const harmonicFieldChordsTriads_E = ['E','F#m','G#m','A','B','C#m','D#m(b5)'];
const harmonicFieldChordsTetrads_E = ['E7','F#m7','G#m7','A7','B7','C#m7','D#m7(b5)'];

const harmonicFieldChordsTriads_F = ['F','Gm','Am','Bb','C','Dm','Em(b5)'];
const harmonicFieldChordsTetrads_F = ['F7','Gm7','Am7','Bb7','C7','Dm7','Em7(b5)'];

const harmonicFieldChordsTriads_G = ['G','Am','Bm','C','D','Em','F#m(b5)'];
const harmonicFieldChordsTetrads_G = ['G7','Am7','Bm7','C7','D7','Em7','F#m7(b5)'];

const harmonicFieldChordsTriads_A = ['A','Bm','C#m','D','E','F#m','G#m(b5)'];
const harmonicFieldChordsTetrads_A = ['A7','Bm7','C#m7','D7','E7','F#m7','G#m7(b5)'];

const harmonicFieldChordsTriads_B = ['B','C#m','D#m','E','F#','G#m','A#m(b5)'];
const harmonicFieldChordsTetrads_B = ['B7','C#m7','D#m7','E7','F#7','G#m7','A#m7(b5)'];

//Minor Harmononic Field

const harmonicFieldChordsTriads_Cm = ['Cm','Ddim','Eb','Fm','Gm','Ab','Bb'];
const harmonicFieldChordsTetrads_Cm = ['Cm7','Ddim7','Eb7','Fm7','Gm7','Ab7','Bb7'];

const harmonicFieldChordsTriads_Dm = ['Dm','Edim','F','Gm','Am','Bb','C'];
const harmonicFieldChordsTetrads_Dm = ['Dm7','Edim7','F7','Gm7','Am7','Bb7','C7'];

const harmonicFieldChordsTriads_Em = ['Em','F#dim','G','Am','Bm','C','D'];
const harmonicFieldChordsTetrads_Em = ['Em7','F#7','G7','Am7','Bm7','C7','D7'];

const harmonicFieldChordsTriads_Fm = ['Fm','Gdim','Ab','Bbm','Cm','Db','Eb'];
const harmonicFieldChordsTetrads_Fm = ['Fm7','Gdim7','Ab7','Bbm7','Cm7','Db7','Eb7'];

const harmonicFieldChordsTriads_Gm = ['Gm','Adim','Bb','Cm','Dm','Eb','F'];
const harmonicFieldChordsTetrads_Gm = ['Gm7','Adim7','Bb7','Cm7','Dm7','Eb7','F7'];

const harmonicFieldChordsTriads_Am = ['Am','Bdim','C','Dm','Em','F','G'];
const harmonicFieldChordsTetrads_Am = ['Am7','Bdim7','Cm7','D7','Em7','F7','G7'];

const harmonicFieldChordsTriads_Bm = ['Bm','C#dim','D','Em','F#m','G','A'];
const harmonicFieldChordsTetrads_Bm = ['Bm7','C#7dim','D7','Em7','F#m7','G7','A7'];

//Sequencies

const sequencie = [[0,3,4,3],[0,1,3,1],[0,4,5,3],[0,5,1,4],[0,5,3,4],[0,4,5,2,3,0,3,4],[5,6,0],[0,3,0,4,0,3]]

const questions =[
	{
		type: 'list',
		name: 'musicalKey',
		message: 'Wich harmonic field?',
		choices: ['C','D','E','F','G','A','B']
	},
	{
		type:'list',
		name:'degre',
		message:'Major, Minor ',
		choices:['Major','Minor']
	}
];

let num = 0;

inquirer
	.prompt(questions)
	.then(answers => {
		console.log(`The chords for the ${JSON.stringify(answers, null, '   ')}`)
		console.log(`Are:`);
		if (answers.degre == 'Major'){
			switch(answers.musicalKey){
			case 'C': 
				function seq (){ return (Math.floor(Math.random()*8))}
				num = seq();
				console.log(sequencie[num]);
				sequencie[num].map((degre)=> console.log(harmonicFieldChordsTriads_C[degre]))
				break;
			case 'D': 
				function seq (){ return (Math.floor(Math.random()*8))}
				num = seq();
				console.log(sequencie[num]);
				sequencie[num].map((degre)=> console.log(harmonicFieldChordsTriads_D[degre]))
				break;
			case 'E': 
				function seq (){ return (Math.floor(Math.random()*8))}
				num = seq();
				console.log(sequencie[num]);
				sequencie[num].map((degre)=> console.log(harmonicFieldChordsTriads_E[degre]))
				break;
			case 'F': 
				function seq (){ return (Math.floor(Math.random()*8))}
				num = seq();
				console.log(sequencie[num]);
				sequencie[num].map((degre)=> console.log(harmonicFieldChordsTriads_F[degre]))
				break;
			case 'G': 
				function seq (){ return (Math.floor(Math.random()*8))}
				num = seq();
				console.log(sequencie[num]);
				sequencie[num].map((degre)=> console.log(harmonicFieldChordsTriads_G[degre]))
				break;
			case 'A': 
				function seq (){ return (Math.floor(Math.random()*8))}
				num = seq();
				console.log(sequencie[num]);
				sequencie[num].map((degre)=> console.log(harmonicFieldChordsTriads_A[degre]))
				break;
			case 'B': 
				function seq (){ return (Math.floor(Math.random()*8))}
				num = seq();
				console.log(sequencie[num]);
				sequencie[num].map((degre)=> console.log(harmonicFieldChordsTriads_B[degre]))
				break;

				
			default:
				console.log('We do not have this musical key yet!')
				break
		}
	} else {
		switch(answers.musicalKey){
			case 'C': 
				function seq (){ return (Math.floor(Math.random()*8))}
				num = seq();
				console.log(sequencie[num]);
				sequencie[num].map((degre)=> console.log(harmonicFieldChordsTriads_Cm[degre]))
				break;
			case 'D': 
				function seq (){ return (Math.floor(Math.random()*8))}
				num = seq();
				console.log(sequencie[num]);
				sequencie[num].map((degre)=> console.log(harmonicFieldChordsTriads_Dm[degre]))
				break;
			case 'E': 
				function seq (){ return (Math.floor(Math.random()*8))}
				num = seq();
				console.log(sequencie[num]);
				sequencie[num].map((degre)=> console.log(harmonicFieldChordsTriads_Em[degre]))
				break;
			case 'F': 
				function seq (){ return (Math.floor(Math.random()*8))}
				num = seq();
				console.log(sequencie[num]);
				sequencie[num].map((degre)=> console.log(harmonicFieldChordsTriads_Fm[degre]))
				break;
			case 'G': 
				function seq (){ return (Math.floor(Math.random()*8))}
				num = seq();
				console.log(sequencie[num]);
				sequencie[num].map((degre)=> console.log(harmonicFieldChordsTriads_Gm[degre]))
				break;
			case 'A': 
				function seq (){ return (Math.floor(Math.random()*8))}
				num = seq();
				console.log(sequencie[num]);
				sequencie[num].map((degre)=> console.log(harmonicFieldChordsTriads_Am[degre]))
				break;
			case 'B': 
				function seq (){ return (Math.floor(Math.random()*8))}
				num = seq();
				console.log(sequencie[num]);
				sequencie[num].map((degre)=> console.log(harmonicFieldChordsTriads_Bm[degre]))
				break;
	}
	}})
	.catch(error => {
		console.log('Does not work!')
	})


program.parse(process.argv);