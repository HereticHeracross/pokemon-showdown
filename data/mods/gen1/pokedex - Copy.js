'use strict';

exports.BattlePokedex = {
	missingno: {
		num: 0,
		species: "Missingno.",
		types: ["Bird", "Normal"],
		gender: "N",
		baseStats: {hp: 33, atk: 136, def: 0, spa: 6, spd: 6, spe: 29},
		abilities: {},
		heightm: 3,
		weightkg: 1590.8,
		color: "Gray",
		eggGroups: ["Undiscovered"],
	},
	bulbasaur: {
		num: 1,
		species: "Bulbasaur",
		types: ["Grass", "Poison"],
		gender: "N",
		baseStats: {hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45},
		abilities: {},
		heightm: 0.7,
		weightkg: 6.9,
		color: "Green",
		evos: ["ivysaur"],
		eggGroups: ["Monster", "Grass"],
	},
	ivysaur: {
		num: 2,
		species: "Ivysaur",
		types: ["Grass", "Poison"],
		gender: "N",
		baseStats: {hp: 60, atk: 62, def: 63, spa: 80, spd: 80, spe: 60},
		abilities: {},
		heightm: 1,
		weightkg: 13,
		color: "Green",
		prevo: "bulbasaur",
		evos: ["venusaur"],
		evoLevel: 16,
		eggGroups: ["Monster", "Grass"],
	},
	venusaur: {
		num: 3,
		species: "Venusaur",
		types: ["Grass", "Poison"],
		gender: "N",
		baseStats: {hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80},
		abilities: {},
		heightm: 2,
		weightkg: 100,
		color: "Green",
		prevo: "ivysaur",
		evoLevel: 32,
		eggGroups: ["Monster", "Grass"],
	},
	charmander: {
		num: 4,
		species: "Charmander",
		types: ["Fire"],
		gender: "N",
		baseStats: {hp: 39, atk: 52, def: 43, spa: 50, spd: 50, spe: 65},
		abilities: {},
		heightm: 0.6,
		weightkg: 8.5,
		color: "Red",
		evos: ["charmeleon"],
		eggGroups: ["Monster", "Dragon"],
	},
	charmeleon: {
		num: 5,
		species: "Charmeleon",
		types: ["Fire"],
		gender: "N",
		baseStats: {hp: 58, atk: 64, def: 58, spa: 65, spd: 65, spe: 80},
		abilities: {},
		heightm: 1.1,
		weightkg: 19,
		color: "Red",
		prevo: "charmander",
		evos: ["charizard"],
		evoLevel: 16,
		eggGroups: ["Monster", "Dragon"],
	},
	charizard: {
		num: 6,
		species: "Charizard",
		types: ["Fire", "Flying"],
		gender: "N",
		baseStats: {hp: 78, atk: 84, def: 78, spa: 85, spd: 85, spe: 100},
		abilities: {},
		heightm: 1.7,
		weightkg: 90.5,
		color: "Red",
		prevo: "charmeleon",
		evoLevel: 36,
		eggGroups: ["Monster", "Dragon"],
	},
	squirtle: {
		num: 7,
		species: "Squirtle",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 44, atk: 48, def: 65, spa: 50, spd: 50, spe: 43},
		abilities: {},
		heightm: 0.5,
		weightkg: 9,
		color: "Blue",
		evos: ["wartortle"],
		eggGroups: ["Monster", "Water 1"],
	},
	wartortle: {
		num: 8,
		species: "Wartortle",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 59, atk: 63, def: 80, spa: 65, spd: 65, spe: 58},
		abilities: {},
		heightm: 1,
		weightkg: 22.5,
		color: "Blue",
		prevo: "squirtle",
		evos: ["blastoise"],
		evoLevel: 16,
		eggGroups: ["Monster", "Water 1"],
	},
	blastoise: {
		num: 9,
		species: "Blastoise",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 79, atk: 83, def: 100, spa: 85, spd: 85, spe: 78},
		abilities: {},
		heightm: 1.6,
		weightkg: 85.5,
		color: "Blue",
		prevo: "wartortle",
		evoLevel: 36,
		eggGroups: ["Monster", "Water 1"],
	},
	caterpie: {
		num: 10,
		species: "Caterpie",
		types: ["Bug"],
		gender: "N",
		baseStats: {hp: 45, atk: 30, def: 35, spa: 20, spd: 20, spe: 45},
		abilities: {},
		heightm: 0.3,
		weightkg: 2.9,
		color: "Green",
		evos: ["metapod"],
		eggGroups: ["Bug"],
	},
	metapod: {
		num: 11,
		species: "Metapod",
		types: ["Bug"],
		gender: "N",
		baseStats: {hp: 50, atk: 20, def: 55, spa: 25, spd: 25, spe: 30},
		abilities: {},
		heightm: 0.7,
		weightkg: 9.9,
		color: "Green",
		prevo: "caterpie",
		evos: ["butterfree"],
		evoLevel: 7,
		eggGroups: ["Bug"],
	},
	butterfree: {
		num: 12,
		species: "Butterfree",
		types: ["Bug", "Flying"],
		gender: "N",
		baseStats: {hp: 60, atk: 45, def: 50, spa: 80, spd: 80, spe: 70},
		abilities: {},
		heightm: 1.1,
		weightkg: 32,
		color: "White",
		prevo: "metapod",
		evoLevel: 10,
		eggGroups: ["Bug"],
	},
	weedle: {
		num: 13,
		species: "Weedle",
		types: ["Bug", "Poison"],
		gender: "N",
		baseStats: {hp: 40, atk: 35, def: 30, spa: 20, spd: 20, spe: 50},
		abilities: {},
		heightm: 0.3,
		weightkg: 3.2,
		color: "Brown",
		evos: ["kakuna"],
		eggGroups: ["Bug"],
	},
	kakuna: {
		num: 14,
		species: "Kakuna",
		types: ["Bug", "Poison"],
		gender: "N",
		baseStats: {hp: 45, atk: 25, def: 50, spa: 25, spd: 25, spe: 35},
		abilities: {},
		heightm: 0.6,
		weightkg: 10,
		color: "Yellow",
		prevo: "weedle",
		evos: ["beedrill"],
		evoLevel: 7,
		eggGroups: ["Bug"],
	},
	beedrill: {
		num: 15,
		species: "Beedrill",
		types: ["Bug", "Poison"],
		gender: "N",
		baseStats: {hp: 65, atk: 80, def: 40, spa: 45, spd: 45, spe: 75},
		abilities: {},
		heightm: 1,
		weightkg: 29.5,
		color: "Yellow",
		prevo: "kakuna",
		evoLevel: 10,
		eggGroups: ["Bug"],
	},
	pidgey: {
		num: 16,
		species: "Pidgey",
		types: ["Normal", "Flying"],
		gender: "N",
		baseStats: {hp: 40, atk: 45, def: 40, spa: 35, spd: 35, spe: 56},
		abilities: {},
		heightm: 0.3,
		weightkg: 1.8,
		color: "Brown",
		evos: ["pidgeotto"],
		eggGroups: ["Flying"],
	},
	pidgeotto: {
		num: 17,
		species: "Pidgeotto",
		types: ["Normal", "Flying"],
		gender: "N",
		baseStats: {hp: 63, atk: 60, def: 55, spa: 50, spd: 50, spe: 71},
		abilities: {},
		heightm: 1.1,
		weightkg: 30,
		color: "Brown",
		prevo: "pidgey",
		evos: ["pidgeot"],
		evoLevel: 18,
		eggGroups: ["Flying"],
	},
	pidgeot: {
		num: 18,
		species: "Pidgeot",
		types: ["Normal", "Flying"],
		gender: "N",
		baseStats: {hp: 83, atk: 80, def: 75, spa: 70, spd: 70, spe: 91},
		abilities: {},
		heightm: 1.5,
		weightkg: 39.5,
		color: "Brown",
		prevo: "pidgeotto",
		evoLevel: 36,
		eggGroups: ["Flying"],
	},
	rattata: {
		num: 19,
		species: "Rattata",
		types: ["Normal"],
		gender: "N",
		baseStats: {hp: 30, atk: 56, def: 35, spa: 25, spd: 25, spe: 72},
		abilities: {},
		heightm: 0.3,
		weightkg: 3.5,
		color: "Purple",
		evos: ["raticate"],
		eggGroups: ["Field"],
	},
	raticate: {
		num: 20,
		species: "Raticate",
		types: ["Normal"],
		gender: "N",
		baseStats: {hp: 55, atk: 81, def: 60, spa: 50, spd: 50, spe: 97},
		abilities: {},
		heightm: 0.7,
		weightkg: 18.5,
		color: "Brown",
		prevo: "rattata",
		evoLevel: 20,
		eggGroups: ["Field"],
	},
	spearow: {
		num: 21,
		species: "Spearow",
		types: ["Normal", "Flying"],
		gender: "N",
		baseStats: {hp: 40, atk: 60, def: 30, spa: 31, spd: 31, spe: 70},
		abilities: {},
		heightm: 0.3,
		weightkg: 2,
		color: "Brown",
		evos: ["fearow"],
		eggGroups: ["Flying"],
	},
	fearow: {
		num: 22,
		species: "Fearow",
		types: ["Normal", "Flying"],
		gender: "N",
		baseStats: {hp: 65, atk: 90, def: 65, spa: 61, spd: 61, spe: 100},
		abilities: {},
		heightm: 1.2,
		weightkg: 38,
		color: "Brown",
		prevo: "spearow",
		evoLevel: 20,
		eggGroups: ["Flying"],
	},
	ekans: {
		num: 23,
		species: "Ekans",
		types: ["Poison"],
		gender: "N",
		baseStats: {hp: 35, atk: 60, def: 44, spa: 40, spd: 40, spe: 55},
		abilities: {},
		heightm: 2,
		weightkg: 6.9,
		color: "Purple",
		evos: ["arbok"],
		eggGroups: ["Field", "Dragon"],
	},
	arbok: {
		num: 24,
		species: "Arbok",
		types: ["Poison"],
		gender: "N",
		baseStats: {hp: 60, atk: 85, def: 69, spa: 65, spd: 65, spe: 80},
		abilities: {},
		heightm: 3.5,
		weightkg: 65,
		color: "Purple",
		prevo: "ekans",
		evoLevel: 22,
		eggGroups: ["Field", "Dragon"],
	},
	pikachu: {
		num: 25,
		species: "Pikachu",
		types: ["Electric"],
		gender: "N",
		baseStats: {hp: 35, atk: 55, def: 30, spa: 50, spd: 50, spe: 90},
		abilities: {},
		heightm: 0.4,
		weightkg: 6,
		color: "Yellow",
		prevo: "pichu",
		evos: ["raichu"],
		eggGroups: ["Field", "Fairy"],
	},
	raichu: {
		num: 26,
		species: "Raichu",
		types: ["Electric"],
		gender: "N",
		baseStats: {hp: 60, atk: 90, def: 55, spa: 90, spd: 90, spe: 100},
		abilities: {},
		heightm: 0.8,
		weightkg: 30,
		color: "Yellow",
		prevo: "pikachu",
		evoLevel: 1,
		eggGroups: ["Field", "Fairy"],
	},
	sandshrew: {
		num: 27,
		species: "Sandshrew",
		types: ["Ground"],
		gender: "N",
		baseStats: {hp: 50, atk: 75, def: 85, spa: 30, spd: 30, spe: 40},
		abilities: {},
		heightm: 0.6,
		weightkg: 12,
		color: "Yellow",
		evos: ["sandslash"],
		eggGroups: ["Field"],
	},
	sandslash: {
		num: 28,
		species: "Sandslash",
		types: ["Ground"],
		gender: "N",
		baseStats: {hp: 75, atk: 100, def: 110, spa: 55, spd: 55, spe: 65},
		abilities: {},
		heightm: 1,
		weightkg: 29.5,
		color: "Yellow",
		prevo: "sandshrew",
		evoLevel: 22,
		eggGroups: ["Field"],
	},
	nidoranf: {
		num: 29,
		species: "Nidoran-F",
		types: ["Poison"],
		gender: "N",
		baseStats: {hp: 55, atk: 47, def: 52, spa: 40, spd: 40, spe: 41},
		abilities: {},
		heightm: 0.4,
		weightkg: 7,
		color: "Blue",
		evos: ["nidorina"],
		eggGroups: ["Monster", "Field"],
	},
	nidorina: {
		num: 30,
		species: "Nidorina",
		types: ["Poison"],
		gender: "N",
		baseStats: {hp: 70, atk: 62, def: 67, spa: 55, spd: 55, spe: 56},
		abilities: {},
		heightm: 0.8,
		weightkg: 20,
		color: "Blue",
		prevo: "nidoranf",
		evos: ["nidoqueen"],
		evoLevel: 16,
		eggGroups: ["Undiscovered"],
	},
	nidoqueen: {
		num: 31,
		species: "Nidoqueen",
		types: ["Poison", "Ground"],
		gender: "N",
		baseStats: {hp: 90, atk: 82, def: 87, spa: 75, spd: 75, spe: 76},
		abilities: {},
		heightm: 1.3,
		weightkg: 60,
		color: "Blue",
		prevo: "nidorina",
		evoLevel: 16,
		eggGroups: ["Undiscovered"],
	},
	nidoranm: {
		num: 32,
		species: "Nidoran-M",
		types: ["Poison"],
		gender: "N",
		baseStats: {hp: 46, atk: 57, def: 40, spa: 40, spd: 40, spe: 50},
		abilities: {},
		heightm: 0.5,
		weightkg: 9,
		color: "Purple",
		evos: ["nidorino"],
		eggGroups: ["Monster", "Field"],
	},
	nidorino: {
		num: 33,
		species: "Nidorino",
		types: ["Poison"],
		gender: "N",
		baseStats: {hp: 61, atk: 72, def: 57, spa: 55, spd: 55, spe: 65},
		abilities: {},
		heightm: 0.9,
		weightkg: 19.5,
		color: "Purple",
		prevo: "nidoranm",
		evos: ["nidoking"],
		evoLevel: 16,
		eggGroups: ["Monster", "Field"],
	},
	nidoking: {
		num: 34,
		species: "Nidoking",
		types: ["Poison", "Ground"],
		gender: "N",
		baseStats: {hp: 81, atk: 92, def: 77, spa: 75, spd: 75, spe: 85},
		abilities: {},
		heightm: 1.4,
		weightkg: 62,
		color: "Purple",
		prevo: "nidorino",
		evoLevel: 16,
		eggGroups: ["Monster", "Field"],
	},
	clefairy: {
		num: 35,
		species: "Clefairy",
		types: ["Normal"],
		gender: "N",
		baseStats: {hp: 70, atk: 45, def: 48, spa: 60, spd: 60, spe: 35},
		abilities: {},
		heightm: 0.6,
		weightkg: 7.5,
		color: "Pink",
		prevo: "cleffa",
		evos: ["clefable"],
		eggGroups: ["Fairy"],
	},
	clefable: {
		num: 36,
		species: "Clefable",
		types: ["Normal"],
		gender: "N",
		baseStats: {hp: 95, atk: 70, def: 73, spa: 85, spd: 85, spe: 60},
		abilities: {},
		heightm: 1.3,
		weightkg: 40,
		color: "Pink",
		prevo: "clefairy",
		evoLevel: 1,
		eggGroups: ["Fairy"],
	},
	vulpix: {
		num: 37,
		species: "Vulpix",
		types: ["Fire"],
		gender: "N",
		baseStats: {hp: 38, atk: 41, def: 40, spa: 65, spd: 65, spe: 65},
		abilities: {},
		heightm: 0.6,
		weightkg: 9.9,
		color: "Brown",
		evos: ["ninetales"],
		eggGroups: ["Field"],
	},
	ninetales: {
		num: 38,
		species: "Ninetales",
		types: ["Fire"],
		gender: "N",
		baseStats: {hp: 73, atk: 76, def: 75, spa: 100, spd: 100, spe: 100},
		abilities: {},
		heightm: 1.1,
		weightkg: 19.9,
		color: "Yellow",
		prevo: "vulpix",
		evoLevel: 1,
		eggGroups: ["Field"],
	},
	jigglypuff: {
		num: 39,
		species: "Jigglypuff",
		types: ["Normal"],
		gender: "N",
		baseStats: {hp: 115, atk: 45, def: 20, spa: 25, spd: 25, spe: 20},
		abilities: {},
		heightm: 0.5,
		weightkg: 5.5,
		color: "Pink",
		prevo: "igglybuff",
		evos: ["wigglytuff"],
		eggGroups: ["Fairy"],
	},
	wigglytuff: {
		num: 40,
		species: "Wigglytuff",
		types: ["Normal"],
		gender: "N",
		baseStats: {hp: 140, atk: 70, def: 45, spa: 50, spd: 50, spe: 45},
		abilities: {},
		heightm: 1,
		weightkg: 12,
		color: "Pink",
		prevo: "jigglypuff",
		evoLevel: 1,
		eggGroups: ["Fairy"],
	},
	zubat: {
		num: 41,
		species: "Zubat",
		types: ["Poison", "Flying"],
		gender: "N",
		baseStats: {hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 55},
		abilities: {},
		heightm: 0.8,
		weightkg: 7.5,
		color: "Purple",
		evos: ["golbat"],
		eggGroups: ["Flying"],
	},
	golbat: {
		num: 42,
		species: "Golbat",
		types: ["Poison", "Flying"],
		gender: "N",
		baseStats: {hp: 75, atk: 80, def: 70, spa: 75, spd: 75, spe: 90},
		abilities: {},
		heightm: 1.6,
		weightkg: 55,
		color: "Purple",
		prevo: "zubat",
		evos: ["crobat"],
		evoLevel: 22,
		eggGroups: ["Flying"],
	},
	oddish: {
		num: 43,
		species: "Oddish",
		types: ["Grass", "Poison"],
		gender: "N",
		baseStats: {hp: 45, atk: 50, def: 55, spa: 75, spd: 75, spe: 30},
		abilities: {},
		heightm: 0.5,
		weightkg: 5.4,
		color: "Blue",
		evos: ["gloom"],
		eggGroups: ["Grass"],
	},
	gloom: {
		num: 44,
		species: "Gloom",
		types: ["Grass", "Poison"],
		gender: "N",
		baseStats: {hp: 60, atk: 65, def: 70, spa: 85, spd: 85, spe: 40},
		abilities: {},
		heightm: 0.8,
		weightkg: 8.6,
		color: "Blue",
		prevo: "oddish",
		evos: ["vileplume", "bellossom"],
		evoLevel: 21,
		eggGroups: ["Grass"],
	},
	vileplume: {
		num: 45,
		species: "Vileplume",
		types: ["Grass", "Poison"],
		gender: "N",
		baseStats: {hp: 75, atk: 80, def: 85, spa: 100, spd: 100, spe: 50},
		abilities: {},
		heightm: 1.2,
		weightkg: 18.6,
		color: "Red",
		prevo: "gloom",
		evoLevel: 21,
		eggGroups: ["Grass"],
	},
	paras: {
		num: 46,
		species: "Paras",
		types: ["Bug", "Grass"],
		gender: "N",
		baseStats: {hp: 35, atk: 70, def: 55, spa: 55, spd: 55, spe: 25},
		abilities: {},
		heightm: 0.3,
		weightkg: 5.4,
		color: "Red",
		evos: ["parasect"],
		eggGroups: ["Bug", "Grass"],
	},
	parasect: {
		num: 47,
		species: "Parasect",
		types: ["Bug", "Grass"],
		gender: "N",
		baseStats: {hp: 60, atk: 95, def: 80, spa: 80, spd: 80, spe: 30},
		abilities: {},
		heightm: 1,
		weightkg: 29.5,
		color: "Red",
		prevo: "paras",
		evoLevel: 24,
		eggGroups: ["Bug", "Grass"],
	},
	venonat: {
		num: 48,
		species: "Venonat",
		types: ["Bug", "Poison"],
		gender: "N",
		baseStats: {hp: 60, atk: 55, def: 50, spa: 40, spd: 40, spe: 45},
		abilities: {},
		heightm: 1,
		weightkg: 30,
		color: "Purple",
		evos: ["venomoth"],
		eggGroups: ["Bug"],
	},
	venomoth: {
		num: 49,
		species: "Venomoth",
		types: ["Bug", "Poison"],
		gender: "N",
		baseStats: {hp: 70, atk: 65, def: 60, spa: 90, spd: 90, spe: 90},
		abilities: {},
		heightm: 1.5,
		weightkg: 12.5,
		color: "Purple",
		prevo: "venonat",
		evoLevel: 31,
		eggGroups: ["Bug"],
	},
	diglett: {
		num: 50,
		species: "Diglett",
		types: ["Ground"],
		gender: "N",
		baseStats: {hp: 10, atk: 55, def: 25, spa: 45, spd: 45, spe: 95},
		abilities: {},
		heightm: 0.2,
		weightkg: 0.8,
		color: "Brown",
		evos: ["dugtrio"],
		eggGroups: ["Field"],
	},
	dugtrio: {
		num: 51,
		species: "Dugtrio",
		types: ["Ground"],
		gender: "N",
		baseStats: {hp: 35, atk: 80, def: 50, spa: 70, spd: 70, spe: 120},
		abilities: {},
		heightm: 0.7,
		weightkg: 33.3,
		color: "Brown",
		prevo: "diglett",
		evoLevel: 26,
		eggGroups: ["Field"],
	},
	meowth: {
		num: 52,
		species: "Meowth",
		types: ["Normal"],
		gender: "N",
		baseStats: {hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 90},
		abilities: {},
		heightm: 0.4,
		weightkg: 4.2,
		color: "Yellow",
		evos: ["persian"],
		eggGroups: ["Field"],
	},
	persian: {
		num: 53,
		species: "Persian",
		types: ["Normal"],
		gender: "N",
		baseStats: {hp: 65, atk: 70, def: 60, spa: 65, spd: 65, spe: 115},
		abilities: {},
		heightm: 1,
		weightkg: 32,
		color: "Yellow",
		prevo: "meowth",
		evoLevel: 28,
		eggGroups: ["Field"],
	},
	psyduck: {
		num: 54,
		species: "Psyduck",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 50, atk: 52, def: 48, spa: 50, spd: 50, spe: 55},
		abilities: {},
		heightm: 0.8,
		weightkg: 19.6,
		color: "Yellow",
		evos: ["golduck"],
		eggGroups: ["Water 1", "Field"],
	},
	golduck: {
		num: 55,
		species: "Golduck",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 80, atk: 82, def: 78, spa: 80, spd: 80, spe: 85},
		abilities: {},
		heightm: 1.7,
		weightkg: 76.6,
		color: "Blue",
		prevo: "psyduck",
		evoLevel: 33,
		eggGroups: ["Water 1", "Field"],
	},
	mankey: {
		num: 56,
		species: "Mankey",
		types: ["Fighting"],
		gender: "N",
		baseStats: {hp: 40, atk: 80, def: 35, spa: 35, spd: 35, spe: 70},
		abilities: {},
		heightm: 0.5,
		weightkg: 28,
		color: "Brown",
		evos: ["primeape"],
		eggGroups: ["Field"],
	},
	primeape: {
		num: 57,
		species: "Primeape",
		types: ["Fighting"],
		gender: "N",
		baseStats: {hp: 65, atk: 105, def: 60, spa: 60, spd: 60, spe: 95},
		abilities: {},
		heightm: 1,
		weightkg: 32,
		color: "Brown",
		prevo: "mankey",
		evoLevel: 28,
		eggGroups: ["Field"],
	},
	growlithe: {
		num: 58,
		species: "Growlithe",
		types: ["Fire"],
		gender: "N",
		baseStats: {hp: 55, atk: 70, def: 45, spa: 50, spd: 50, spe: 60},
		abilities: {},
		heightm: 0.7,
		weightkg: 19,
		color: "Brown",
		evos: ["arcanine"],
		eggGroups: ["Field"],
	},
	arcanine: {
		num: 59,
		species: "Arcanine",
		types: ["Fire"],
		gender: "N",
		baseStats: {hp: 90, atk: 110, def: 80, spa: 80, spd: 80, spe: 95},
		abilities: {},
		heightm: 1.9,
		weightkg: 155,
		color: "Brown",
		prevo: "growlithe",
		evoLevel: 1,
		eggGroups: ["Field"],
	},
	poliwag: {
		num: 60,
		species: "Poliwag",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 40, atk: 50, def: 40, spa: 40, spd: 40, spe: 90},
		abilities: {},
		heightm: 0.6,
		weightkg: 12.4,
		color: "Blue",
		evos: ["poliwhirl"],
		eggGroups: ["Water 1"],
	},
	poliwhirl: {
		num: 61,
		species: "Poliwhirl",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 65, atk: 65, def: 65, spa: 50, spd: 50, spe: 90},
		abilities: {},
		heightm: 1,
		weightkg: 20,
		color: "Blue",
		prevo: "poliwag",
		evos: ["poliwrath", "politoed"],
		evoLevel: 25,
		eggGroups: ["Water 1"],
	},
	poliwrath: {
		num: 62,
		species: "Poliwrath",
		types: ["Water", "Fighting"],
		gender: "N",
		baseStats: {hp: 90, atk: 85, def: 95, spa: 70, spd: 70, spe: 70},
		abilities: {},
		heightm: 1.3,
		weightkg: 54,
		color: "Blue",
		prevo: "poliwhirl",
		evoLevel: 25,
		eggGroups: ["Water 1"],
	},
	abra: {
		num: 63,
		species: "Abra",
		types: ["Psychic"],
		gender: "N",
		baseStats: {hp: 25, atk: 20, def: 15, spa: 105, spd: 105, spe: 90},
		abilities: {},
		heightm: 0.9,
		weightkg: 19.5,
		color: "Brown",
		evos: ["kadabra"],
		eggGroups: ["Human-Like"],
	},
	kadabra: {
		num: 64,
		species: "Kadabra",
		types: ["Psychic"],
		gender: "N",
		baseStats: {hp: 40, atk: 35, def: 30, spa: 120, spd: 120, spe: 105},
		abilities: {},
		heightm: 1.3,
		weightkg: 56.5,
		color: "Brown",
		prevo: "abra",
		evos: ["alakazam"],
		evoLevel: 16,
		eggGroups: ["Human-Like"],
	},
	alakazam: {
		num: 65,
		species: "Alakazam",
		types: ["Psychic"],
		gender: "N",
		baseStats: {hp: 55, atk: 50, def: 45, spa: 135, spd: 135, spe: 120},
		abilities: {},
		heightm: 1.5,
		weightkg: 48,
		color: "Brown",
		prevo: "kadabra",
		evoLevel: 16,
		eggGroups: ["Human-Like"],
	},
	machop: {
		num: 66,
		species: "Machop",
		types: ["Fighting"],
		gender: "N",
		baseStats: {hp: 70, atk: 80, def: 50, spa: 35, spd: 35, spe: 35},
		abilities: {},
		heightm: 0.8,
		weightkg: 19.5,
		color: "Gray",
		evos: ["machoke"],
		eggGroups: ["Human-Like"],
	},
	machoke: {
		num: 67,
		species: "Machoke",
		types: ["Fighting"],
		gender: "N",
		baseStats: {hp: 80, atk: 100, def: 70, spa: 50, spd: 50, spe: 45},
		abilities: {},
		heightm: 1.5,
		weightkg: 70.5,
		color: "Gray",
		prevo: "machop",
		evos: ["machamp"],
		evoLevel: 28,
		eggGroups: ["Human-Like"],
	},
	machamp: {
		num: 68,
		species: "Machamp",
		types: ["Fighting"],
		gender: "N",
		baseStats: {hp: 90, atk: 130, def: 80, spa: 65, spd: 65, spe: 55},
		abilities: {},
		heightm: 1.6,
		weightkg: 130,
		color: "Gray",
		prevo: "machoke",
		evoLevel: 28,
		eggGroups: ["Human-Like"],
	},
	bellsprout: {
		num: 69,
		species: "Bellsprout",
		types: ["Grass", "Poison"],
		gender: "N",
		baseStats: {hp: 50, atk: 75, def: 35, spa: 70, spd: 70, spe: 40},
		abilities: {},
		heightm: 0.7,
		weightkg: 4,
		color: "Green",
		evos: ["weepinbell"],
		eggGroups: ["Grass"],
	},
	weepinbell: {
		num: 70,
		species: "Weepinbell",
		types: ["Grass", "Poison"],
		gender: "N",
		baseStats: {hp: 65, atk: 90, def: 50, spa: 85, spd: 85, spe: 55},
		abilities: {},
		heightm: 1,
		weightkg: 6.4,
		color: "Green",
		prevo: "bellsprout",
		evos: ["victreebel"],
		evoLevel: 21,
		eggGroups: ["Grass"],
	},
	victreebel: {
		num: 71,
		species: "Victreebel",
		types: ["Grass", "Poison"],
		gender: "N",
		baseStats: {hp: 80, atk: 105, def: 65, spa: 100, spd: 100, spe: 70},
		abilities: {},
		heightm: 1.7,
		weightkg: 15.5,
		color: "Green",
		prevo: "weepinbell",
		evoLevel: 21,
		eggGroups: ["Grass"],
	},
	tentacool: {
		num: 72,
		species: "Tentacool",
		types: ["Water", "Poison"],
		gender: "N",
		baseStats: {hp: 40, atk: 40, def: 35, spa: 100, spd: 100, spe: 70},
		abilities: {},
		heightm: 0.9,
		weightkg: 45.5,
		color: "Blue",
		evos: ["tentacruel"],
		eggGroups: ["Water 3"],
	},
	tentacruel: {
		num: 73,
		species: "Tentacruel",
		types: ["Water", "Poison"],
		gender: "N",
		baseStats: {hp: 80, atk: 70, def: 65, spa: 120, spd: 120, spe: 100},
		abilities: {},
		heightm: 1.6,
		weightkg: 55,
		color: "Blue",
		prevo: "tentacool",
		evoLevel: 30,
		eggGroups: ["Water 3"],
	},
	geodude: {
		num: 74,
		species: "Geodude",
		types: ["Rock", "Ground"],
		gender: "N",
		baseStats: {hp: 40, atk: 80, def: 100, spa: 30, spd: 30, spe: 20},
		abilities: {},
		heightm: 0.4,
		weightkg: 20,
		color: "Brown",
		evos: ["graveler"],
		eggGroups: ["Mineral"],
	},
	graveler: {
		num: 75,
		species: "Graveler",
		types: ["Rock", "Ground"],
		gender: "N",
		baseStats: {hp: 55, atk: 95, def: 115, spa: 45, spd: 45, spe: 35},
		abilities: {},
		heightm: 1,
		weightkg: 105,
		color: "Brown",
		prevo: "geodude",
		evos: ["golem"],
		evoLevel: 25,
		eggGroups: ["Mineral"],
	},
	golem: {
		num: 76,
		species: "Golem",
		types: ["Rock", "Ground"],
		gender: "N",
		baseStats: {hp: 80, atk: 110, def: 130, spa: 55, spd: 55, spe: 45},
		abilities: {},
		heightm: 1.4,
		weightkg: 300,
		color: "Brown",
		prevo: "graveler",
		evoLevel: 25,
		eggGroups: ["Mineral"],
	},
	ponyta: {
		num: 77,
		species: "Ponyta",
		types: ["Fire"],
		gender: "N",
		baseStats: {hp: 50, atk: 85, def: 55, spa: 65, spd: 65, spe: 90},
		abilities: {},
		heightm: 1,
		weightkg: 30,
		color: "Yellow",
		evos: ["rapidash"],
		eggGroups: ["Field"],
	},
	rapidash: {
		num: 78,
		species: "Rapidash",
		types: ["Fire"],
		gender: "N",
		baseStats: {hp: 65, atk: 100, def: 70, spa: 80, spd: 80, spe: 105},
		abilities: {},
		heightm: 1.7,
		weightkg: 95,
		color: "Yellow",
		prevo: "ponyta",
		evoLevel: 40,
		eggGroups: ["Field"],
	},
	slowpoke: {
		num: 79,
		species: "Slowpoke",
		types: ["Water", "Psychic"],
		gender: "N",
		baseStats: {hp: 90, atk: 65, def: 65, spa: 40, spd: 40, spe: 15},
		abilities: {},
		heightm: 1.2,
		weightkg: 36,
		color: "Pink",
		evos: ["slowbro", "slowking"],
		eggGroups: ["Monster", "Water 1"],
	},
	slowbro: {
		num: 80,
		species: "Slowbro",
		types: ["Water", "Psychic"],
		gender: "N",
		baseStats: {hp: 95, atk: 75, def: 110, spa: 80, spd: 80, spe: 30},
		abilities: {},
		heightm: 1.6,
		weightkg: 78.5,
		color: "Pink",
		prevo: "slowpoke",
		evoLevel: 37,
		eggGroups: ["Monster", "Water 1"],
	},
	magnemite: {
		num: 81,
		species: "Magnemite",
		types: ["Electric"],
		gender: "N",
		baseStats: {hp: 25, atk: 35, def: 70, spa: 95, spd: 95, spe: 45},
		abilities: {},
		heightm: 0.3,
		weightkg: 6,
		color: "Gray",
		evos: ["magneton"],
		eggGroups: ["Mineral"],
	},
	magneton: {
		num: 82,
		species: "Magneton",
		types: ["Electric"],
		gender: "N",
		baseStats: {hp: 50, atk: 60, def: 95, spa: 120, spd: 120, spe: 70},
		abilities: {},
		heightm: 1,
		weightkg: 60,
		color: "Gray",
		prevo: "magnemite",
		evos: ["magnezone"],
		evoLevel: 30,
		eggGroups: ["Mineral"],
	},
	farfetchd: {
		num: 83,
		species: "Farfetch'd",
		types: ["Normal", "Flying"],
		gender: "N",
		baseStats: {hp: 52, atk: 65, def: 55, spa: 58, spd: 58, spe: 60},
		abilities: {},
		heightm: 0.8,
		weightkg: 15,
		color: "Brown",
		eggGroups: ["Flying", "Field"],
	},
	doduo: {
		num: 84,
		species: "Doduo",
		types: ["Normal", "Flying"],
		gender: "N",
		baseStats: {hp: 35, atk: 85, def: 45, spa: 35, spd: 35, spe: 75},
		abilities: {},
		heightm: 1.4,
		weightkg: 39.2,
		color: "Brown",
		evos: ["dodrio"],
		eggGroups: ["Flying"],
	},
	dodrio: {
		num: 85,
		species: "Dodrio",
		types: ["Normal", "Flying"],
		gender: "N",
		baseStats: {hp: 60, atk: 110, def: 70, spa: 60, spd: 60, spe: 100},
		abilities: {},
		heightm: 1.8,
		weightkg: 85.2,
		color: "Brown",
		prevo: "doduo",
		evoLevel: 31,
		eggGroups: ["Flying"],
	},
	seel: {
		num: 86,
		species: "Seel",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 65, atk: 45, def: 55, spa: 70, spd: 70, spe: 45},
		abilities: {},
		heightm: 1.1,
		weightkg: 90,
		color: "White",
		evos: ["dewgong"],
		eggGroups: ["Water 1", "Field"],
	},
	dewgong: {
		num: 87,
		species: "Dewgong",
		types: ["Water", "Ice"],
		gender: "N",
		baseStats: {hp: 90, atk: 70, def: 80, spa: 95, spd: 95, spe: 70},
		abilities: {},
		heightm: 1.7,
		weightkg: 120,
		color: "White",
		prevo: "seel",
		evoLevel: 34,
		eggGroups: ["Water 1", "Field"],
	},
	grimer: {
		num: 88,
		species: "Grimer",
		types: ["Poison"],
		gender: "N",
		baseStats: {hp: 80, atk: 80, def: 50, spa: 40, spd: 40, spe: 25},
		abilities: {},
		heightm: 0.9,
		weightkg: 30,
		color: "Purple",
		evos: ["muk"],
		eggGroups: ["Amorphous"],
	},
	muk: {
		num: 89,
		species: "Muk",
		types: ["Poison"],
		gender: "N",
		baseStats: {hp: 105, atk: 105, def: 75, spa: 65, spd: 65, spe: 50},
		abilities: {},
		heightm: 1.2,
		weightkg: 30,
		color: "Purple",
		prevo: "grimer",
		evoLevel: 38,
		eggGroups: ["Amorphous"],
	},
	shellder: {
		num: 90,
		species: "Shellder",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 30, atk: 65, def: 100, spa: 45, spd: 45, spe: 40},
		abilities: {},
		heightm: 0.3,
		weightkg: 4,
		color: "Purple",
		evos: ["cloyster"],
		eggGroups: ["Water 3"],
	},
	cloyster: {
		num: 91,
		species: "Cloyster",
		types: ["Water", "Ice"],
		gender: "N",
		baseStats: {hp: 50, atk: 95, def: 180, spa: 85, spd: 85, spe: 70},
		abilities: {},
		heightm: 1.5,
		weightkg: 132.5,
		color: "Purple",
		prevo: "shellder",
		evoLevel: 1,
		eggGroups: ["Water 3"],
	},
	gastly: {
		num: 92,
		species: "Gastly",
		types: ["Ghost", "Poison"],
		gender: "N",
		baseStats: {hp: 30, atk: 35, def: 30, spa: 100, spd: 100, spe: 80},
		abilities: {},
		heightm: 1.3,
		weightkg: 0.1,
		color: "Purple",
		evos: ["haunter"],
		eggGroups: ["Amorphous"],
	},
	haunter: {
		num: 93,
		species: "Haunter",
		types: ["Ghost", "Poison"],
		gender: "N",
		baseStats: {hp: 45, atk: 50, def: 45, spa: 115, spd: 115, spe: 95},
		abilities: {},
		heightm: 1.6,
		weightkg: 0.1,
		color: "Purple",
		prevo: "gastly",
		evos: ["gengar"],
		evoLevel: 25,
		eggGroups: ["Amorphous"],
	},
	gengar: {
		num: 94,
		species: "Gengar",
		types: ["Ghost", "Poison"],
		gender: "N",
		baseStats: {hp: 60, atk: 65, def: 60, spa: 130, spd: 130, spe: 110},
		abilities: {},
		heightm: 1.5,
		weightkg: 40.5,
		color: "Purple",
		prevo: "haunter",
		evoLevel: 25,
		eggGroups: ["Amorphous"],
	},
	onix: {
		num: 95,
		species: "Onix",
		types: ["Rock", "Ground"],
		gender: "N",
		baseStats: {hp: 35, atk: 45, def: 160, spa: 30, spd: 30, spe: 70},
		abilities: {},
		heightm: 8.8,
		weightkg: 210,
		color: "Gray",
		evos: ["steelix"],
		eggGroups: ["Mineral"],
	},
	drowzee: {
		num: 96,
		species: "Drowzee",
		types: ["Psychic"],
		gender: "N",
		baseStats: {hp: 60, atk: 48, def: 45, spa: 90, spd: 90, spe: 42},
		abilities: {},
		heightm: 1,
		weightkg: 32.4,
		color: "Yellow",
		evos: ["hypno"],
		eggGroups: ["Human-Like"],
	},
	hypno: {
		num: 97,
		species: "Hypno",
		types: ["Psychic"],
		gender: "N",
		baseStats: {hp: 85, atk: 73, def: 70, spa: 115, spd: 115, spe: 67},
		abilities: {},
		heightm: 1.6,
		weightkg: 75.6,
		color: "Yellow",
		prevo: "drowzee",
		evoLevel: 26,
		eggGroups: ["Human-Like"],
	},
	krabby: {
		num: 98,
		species: "Krabby",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 30, atk: 105, def: 90, spa: 25, spd: 25, spe: 50},
		abilities: {},
		heightm: 0.4,
		weightkg: 6.5,
		color: "Red",
		evos: ["kingler"],
		eggGroups: ["Water 3"],
	},
	kingler: {
		num: 99,
		species: "Kingler",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 55, atk: 130, def: 115, spa: 50, spd: 50, spe: 75},
		abilities: {},
		heightm: 1.3,
		weightkg: 60,
		color: "Red",
		prevo: "krabby",
		evoLevel: 28,
		eggGroups: ["Water 3"],
	},
	voltorb: {
		num: 100,
		species: "Voltorb",
		types: ["Electric"],
		gender: "N",
		baseStats: {hp: 40, atk: 30, def: 50, spa: 55, spd: 55, spe: 100},
		abilities: {},
		heightm: 0.5,
		weightkg: 10.4,
		color: "Red",
		evos: ["electrode"],
		eggGroups: ["Mineral"],
	},
	electrode: {
		num: 101,
		species: "Electrode",
		types: ["Electric"],
		gender: "N",
		baseStats: {hp: 60, atk: 50, def: 70, spa: 80, spd: 80, spe: 140},
		abilities: {},
		heightm: 1.2,
		weightkg: 66.6,
		color: "Red",
		prevo: "voltorb",
		evoLevel: 30,
		eggGroups: ["Mineral"],
	},
	exeggcute: {
		num: 102,
		species: "Exeggcute",
		types: ["Grass", "Psychic"],
		gender: "N",
		baseStats: {hp: 60, atk: 40, def: 80, spa: 60, spd: 60, spe: 40},
		abilities: {},
		heightm: 0.4,
		weightkg: 2.5,
		color: "Pink",
		evos: ["exeggutor"],
		eggGroups: ["Grass"],
	},
	exeggutor: {
		num: 103,
		species: "Exeggutor",
		types: ["Grass", "Psychic"],
		gender: "N",
		baseStats: {hp: 95, atk: 95, def: 85, spa: 125, spd: 125, spe: 55},
		abilities: {},
		heightm: 2,
		weightkg: 120,
		color: "Yellow",
		prevo: "exeggcute",
		evoLevel: 1,
		eggGroups: ["Grass"],
	},
	cubone: {
		num: 104,
		species: "Cubone",
		types: ["Ground"],
		gender: "N",
		baseStats: {hp: 50, atk: 50, def: 95, spa: 40, spd: 40, spe: 35},
		abilities: {},
		heightm: 0.4,
		weightkg: 6.5,
		color: "Brown",
		evos: ["marowak"],
		eggGroups: ["Monster"],
	},
	marowak: {
		num: 105,
		species: "Marowak",
		types: ["Ground"],
		gender: "N",
		baseStats: {hp: 60, atk: 80, def: 110, spa: 50, spd: 50, spe: 45},
		abilities: {},
		heightm: 1,
		weightkg: 45,
		color: "Brown",
		prevo: "cubone",
		evoLevel: 28,
		eggGroups: ["Monster"],
	},
	hitmonlee: {
		num: 106,
		species: "Hitmonlee",
		types: ["Fighting"],
		gender: "N",
		baseStats: {hp: 50, atk: 120, def: 53, spa: 35, spd: 35, spe: 87},
		abilities: {},
		heightm: 1.5,
		weightkg: 49.8,
		color: "Brown",
		prevo: "tyrogue",
		eggGroups: ["Human-Like"],
	},
	hitmonchan: {
		num: 107,
		species: "Hitmonchan",
		types: ["Fighting"],
		gender: "N",
		baseStats: {hp: 50, atk: 105, def: 79, spa: 35, spd: 35, spe: 76},
		abilities: {},
		heightm: 1.4,
		weightkg: 50.2,
		color: "Brown",
		prevo: "tyrogue",
		eggGroups: ["Human-Like"],
	},
	lickitung: {
		num: 108,
		species: "Lickitung",
		types: ["Normal"],
		gender: "N",
		baseStats: {hp: 90, atk: 55, def: 75, spa: 60, spd: 60, spe: 30},
		abilities: {},
		heightm: 1.2,
		weightkg: 65.5,
		color: "Pink",
		evos: ["lickilicky"],
		eggGroups: ["Monster"],
	},
	koffing: {
		num: 109,
		species: "Koffing",
		types: ["Poison"],
		gender: "N",
		baseStats: {hp: 40, atk: 65, def: 95, spa: 60, spd: 60, spe: 35},
		abilities: {},
		heightm: 0.6,
		weightkg: 1,
		color: "Purple",
		evos: ["weezing"],
		eggGroups: ["Amorphous"],
	},
	weezing: {
		num: 110,
		species: "Weezing",
		types: ["Poison"],
		gender: "N",
		baseStats: {hp: 65, atk: 90, def: 120, spa: 85, spd: 85, spe: 60},
		abilities: {},
		heightm: 1.2,
		weightkg: 9.5,
		color: "Purple",
		prevo: "koffing",
		evoLevel: 35,
		eggGroups: ["Amorphous"],
	},
	rhyhorn: {
		num: 111,
		species: "Rhyhorn",
		types: ["Ground", "Rock"],
		gender: "N",
		baseStats: {hp: 80, atk: 85, def: 95, spa: 30, spd: 30, spe: 25},
		abilities: {},
		heightm: 1,
		weightkg: 115,
		color: "Gray",
		evos: ["rhydon"],
		eggGroups: ["Monster", "Field"],
	},
	rhydon: {
		num: 112,
		species: "Rhydon",
		types: ["Ground", "Rock"],
		gender: "N",
		baseStats: {hp: 105, atk: 130, def: 120, spa: 45, spd: 45, spe: 40},
		abilities: {},
		heightm: 1.9,
		weightkg: 120,
		color: "Gray",
		prevo: "rhyhorn",
		evos: ["rhyperior"],
		evoLevel: 42,
		eggGroups: ["Monster", "Field"],
	},
	chansey: {
		num: 113,
		species: "Chansey",
		types: ["Normal"],
		gender: "N",
		baseStats: {hp: 250, atk: 5, def: 5, spa: 105, spd: 105, spe: 50},
		abilities: {},
		heightm: 1.1,
		weightkg: 34.6,
		color: "Pink",
		evos: ["blissey"],
		eggGroups: ["Fairy"],
	},
	tangela: {
		num: 114,
		species: "Tangela",
		types: ["Grass"],
		gender: "N",
		baseStats: {hp: 65, atk: 55, def: 115, spa: 100, spd: 100, spe: 60},
		abilities: {},
		heightm: 1,
		weightkg: 35,
		color: "Blue",
		evos: ["tangrowth"],
		eggGroups: ["Grass"],
	},
	kangaskhan: {
		num: 115,
		species: "Kangaskhan",
		types: ["Normal"],
		gender: "N",
		baseStats: {hp: 105, atk: 95, def: 80, spa: 40, spd: 40, spe: 90},
		abilities: {},
		heightm: 2.2,
		weightkg: 80,
		color: "Brown",
		eggGroups: ["Monster"],
	},
	horsea: {
		num: 116,
		species: "Horsea",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 30, atk: 40, def: 70, spa: 70, spd: 70, spe: 60},
		abilities: {},
		heightm: 0.4,
		weightkg: 8,
		color: "Blue",
		evos: ["seadra"],
		eggGroups: ["Water 1", "Dragon"],
	},
	seadra: {
		num: 117,
		species: "Seadra",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 55, atk: 65, def: 95, spa: 95, spd: 95, spe: 85},
		abilities: {},
		heightm: 1.2,
		weightkg: 25,
		color: "Blue",
		prevo: "horsea",
		evos: ["kingdra"],
		evoLevel: 32,
		eggGroups: ["Water 1", "Dragon"],
	},
	goldeen: {
		num: 118,
		species: "Goldeen",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 45, atk: 67, def: 60, spa: 50, spd: 50, spe: 63},
		abilities: {},
		heightm: 0.6,
		weightkg: 15,
		color: "Red",
		evos: ["seaking"],
		eggGroups: ["Water 2"],
	},
	seaking: {
		num: 119,
		species: "Seaking",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 80, atk: 92, def: 65, spa: 80, spd: 80, spe: 68},
		abilities: {},
		heightm: 1.3,
		weightkg: 39,
		color: "Red",
		prevo: "goldeen",
		evoLevel: 33,
		eggGroups: ["Water 2"],
	},
	staryu: {
		num: 120,
		species: "Staryu",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 30, atk: 45, def: 55, spa: 70, spd: 70, spe: 85},
		abilities: {},
		heightm: 0.8,
		weightkg: 34.5,
		color: "Brown",
		evos: ["starmie"],
		eggGroups: ["Water 3"],
	},
	starmie: {
		num: 121,
		species: "Starmie",
		types: ["Water", "Psychic"],
		gender: "N",
		baseStats: {hp: 60, atk: 75, def: 85, spa: 100, spd: 100, spe: 115},
		abilities: {},
		heightm: 1.1,
		weightkg: 80,
		color: "Purple",
		prevo: "staryu",
		evoLevel: 1,
		eggGroups: ["Water 3"],
	},
	mrmime: {
		num: 122,
		species: "Mr. Mime",
		types: ["Psychic"],
		gender: "N",
		baseStats: {hp: 40, atk: 45, def: 65, spa: 100, spd: 100, spe: 90},
		abilities: {},
		heightm: 1.3,
		weightkg: 54.5,
		color: "Pink",
		eggGroups: ["Human-Like"],
	},
	scyther: {
		num: 123,
		species: "Scyther",
		types: ["Bug", "Flying"],
		gender: "N",
		baseStats: {hp: 70, atk: 110, def: 80, spa: 55, spd: 55, spe: 105},
		abilities: {},
		heightm: 1.5,
		weightkg: 56,
		color: "Green",
		evos: ["scizor"],
		eggGroups: ["Bug"],
	},
	jynx: {
		num: 124,
		species: "Jynx",
		types: ["Ice", "Psychic"],
		gender: "N",
		baseStats: {hp: 65, atk: 50, def: 35, spa: 95, spd: 95, spe: 95},
		abilities: {},
		heightm: 1.4,
		weightkg: 40.6,
		color: "Red",
		prevo: "smoochum",
		eggGroups: ["Human-Like"],
	},
	electabuzz: {
		num: 125,
		species: "Electabuzz",
		types: ["Electric"],
		gender: "N",
		baseStats: {hp: 65, atk: 83, def: 57, spa: 85, spd: 85, spe: 105},
		abilities: {},
		heightm: 1.1,
		weightkg: 30,
		color: "Yellow",
		prevo: "elekid",
		evos: ["electivire"],
		eggGroups: ["Human-Like"],
	},
	magmar: {
		num: 126,
		species: "Magmar",
		types: ["Fire"],
		gender: "N",
		baseStats: {hp: 65, atk: 95, def: 57, spa: 85, spd: 85, spe: 93},
		abilities: {},
		heightm: 1.3,
		weightkg: 44.5,
		color: "Red",
		prevo: "magby",
		evos: ["magmortar"],
		eggGroups: ["Human-Like"],
	},
	pinsir: {
		num: 127,
		species: "Pinsir",
		types: ["Bug"],
		gender: "N",
		baseStats: {hp: 65, atk: 125, def: 100, spa: 55, spd: 55, spe: 85},
		abilities: {},
		heightm: 1.5,
		weightkg: 55,
		color: "Brown",
		eggGroups: ["Bug"],
	},
	tauros: {
		num: 128,
		species: "Tauros",
		types: ["Normal"],
		gender: "N",
		baseStats: {hp: 75, atk: 100, def: 95, spa: 70, spd: 70, spe: 110},
		abilities: {},
		heightm: 1.4,
		weightkg: 88.4,
		color: "Brown",
		eggGroups: ["Field"],
	},
	magikarp: {
		num: 129,
		species: "Magikarp",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 20, atk: 10, def: 55, spa: 20, spd: 20, spe: 80},
		abilities: {},
		heightm: 0.9,
		weightkg: 10,
		color: "Red",
		evos: ["gyarados"],
		eggGroups: ["Water 2", "Dragon"],
	},
	gyarados: {
		num: 130,
		species: "Gyarados",
		types: ["Water", "Flying"],
		gender: "N",
		baseStats: {hp: 95, atk: 125, def: 79, spa: 100, spd: 100, spe: 81},
		abilities: {},
		heightm: 6.5,
		weightkg: 235,
		color: "Blue",
		prevo: "magikarp",
		evoLevel: 20,
		eggGroups: ["Water 2", "Dragon"],
	},
	lapras: {
		num: 131,
		species: "Lapras",
		types: ["Water", "Ice"],
		gender: "N",
		baseStats: {hp: 130, atk: 85, def: 80, spa: 95, spd: 95, spe: 60},
		abilities: {},
		heightm: 2.5,
		weightkg: 220,
		color: "Blue",
		eggGroups: ["Monster", "Water 1"],
	},
	ditto: {
		num: 132,
		species: "Ditto",
		types: ["Normal"],
		gender: "N",
		baseStats: {hp: 48, atk: 48, def: 48, spa: 48, spd: 48, spe: 48},
		abilities: {},
		heightm: 0.3,
		weightkg: 4,
		color: "Purple",
		eggGroups: ["Ditto"],
	},
	eevee: {
		num: 133,
		species: "Eevee",
		types: ["Normal"],
		gender: "N",
		baseStats: {hp: 55, atk: 55, def: 50, spa: 65, spd: 65, spe: 55},
		abilities: {},
		heightm: 0.3,
		weightkg: 6.5,
		color: "Brown",
		evos: ["vaporeon", "jolteon", "flareon", "espeon", "umbreon", "leafeon", "glaceon", "sylveon"],
		eggGroups: ["Field"],
	},
	vaporeon: {
		num: 134,
		species: "Vaporeon",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 130, atk: 65, def: 60, spa: 110, spd: 110, spe: 65},
		abilities: {},
		heightm: 1,
		weightkg: 29,
		color: "Blue",
		prevo: "eevee",
		evoLevel: 1,
		eggGroups: ["Field"],
	},
	jolteon: {
		num: 135,
		species: "Jolteon",
		types: ["Electric"],
		gender: "N",
		baseStats: {hp: 65, atk: 65, def: 60, spa: 110, spd: 110, spe: 130},
		abilities: {},
		heightm: 0.8,
		weightkg: 24.5,
		color: "Yellow",
		prevo: "eevee",
		evoLevel: 1,
		eggGroups: ["Field"],
	},
	flareon: {
		num: 136,
		species: "Flareon",
		types: ["Fire"],
		gender: "N",
		baseStats: {hp: 65, atk: 130, def: 60, spa: 110, spd: 110, spe: 65},
		abilities: {},
		heightm: 0.9,
		weightkg: 25,
		color: "Red",
		prevo: "eevee",
		evoLevel: 1,
		eggGroups: ["Field"],
	},
	porygon: {
		num: 137,
		species: "Porygon",
		types: ["Normal"],
		gender: "N",
		baseStats: {hp: 65, atk: 60, def: 70, spa: 75, spd: 75, spe: 40},
		abilities: {},
		heightm: 0.8,
		weightkg: 36.5,
		color: "Pink",
		evos: ["porygon2"],
		eggGroups: ["Mineral"],
	},
	omanyte: {
		num: 138,
		species: "Omanyte",
		types: ["Rock", "Water"],
		gender: "N",
		baseStats: {hp: 35, atk: 40, def: 100, spa: 90, spd: 90, spe: 35},
		abilities: {},
		heightm: 0.4,
		weightkg: 7.5,
		color: "Blue",
		evos: ["omastar"],
		eggGroups: ["Water 1", "Water 3"],
	},
	omastar: {
		num: 139,
		species: "Omastar",
		types: ["Rock", "Water"],
		gender: "N",
		baseStats: {hp: 70, atk: 60, def: 125, spa: 115, spd: 115, spe: 55},
		abilities: {},
		heightm: 1,
		weightkg: 35,
		color: "Blue",
		prevo: "omanyte",
		evoLevel: 40,
		eggGroups: ["Water 1", "Water 3"],
	},
	kabuto: {
		num: 140,
		species: "Kabuto",
		types: ["Rock", "Water"],
		gender: "N",
		baseStats: {hp: 30, atk: 80, def: 90, spa: 45, spd: 45, spe: 55},
		abilities: {},
		heightm: 0.5,
		weightkg: 11.5,
		color: "Brown",
		evos: ["kabutops"],
		eggGroups: ["Water 1", "Water 3"],
	},
	kabutops: {
		num: 141,
		species: "Kabutops",
		types: ["Rock", "Water"],
		gender: "N",
		baseStats: {hp: 60, atk: 115, def: 105, spa: 70, spd: 70, spe: 80},
		abilities: {},
		heightm: 1.3,
		weightkg: 40.5,
		color: "Brown",
		prevo: "kabuto",
		evoLevel: 40,
		eggGroups: ["Water 1", "Water 3"],
	},
	aerodactyl: {
		num: 142,
		species: "Aerodactyl",
		types: ["Rock", "Flying"],
		gender: "N",
		baseStats: {hp: 80, atk: 105, def: 65, spa: 60, spd: 60, spe: 130},
		abilities: {},
		heightm: 1.8,
		weightkg: 59,
		color: "Purple",
		eggGroups: ["Flying"],
	},
	snorlax: {
		num: 143,
		species: "Snorlax",
		types: ["Normal"],
		gender: "N",
		baseStats: {hp: 160, atk: 110, def: 65, spa: 65, spd: 65, spe: 30},
		abilities: {},
		heightm: 2.1,
		weightkg: 460,
		color: "Black",
		eggGroups: ["Monster"],
	},
	articuno: {
		num: 144,
		species: "Articuno",
		types: ["Ice", "Flying"],
		gender: "N",
		baseStats: {hp: 90, atk: 85, def: 100, spa: 125, spd: 125, spe: 85},
		abilities: {},
		heightm: 1.7,
		weightkg: 55.4,
		color: "Blue",
		eggGroups: ["Undiscovered"],
	},
	zapdos: {
		num: 145,
		species: "Zapdos",
		types: ["Electric", "Flying"],
		gender: "N",
		baseStats: {hp: 90, atk: 90, def: 85, spa: 125, spd: 125, spe: 100},
		abilities: {},
		heightm: 1.6,
		weightkg: 52.6,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
	},
	moltres: {
		num: 146,
		species: "Moltres",
		types: ["Fire", "Flying"],
		gender: "N",
		baseStats: {hp: 90, atk: 100, def: 90, spa: 125, spd: 125, spe: 90},
		abilities: {},
		heightm: 2,
		weightkg: 60,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
	},
	dratini: {
		num: 147,
		species: "Dratini",
		types: ["Dragon"],
		gender: "N",
		baseStats: {hp: 41, atk: 64, def: 45, spa: 50, spd: 50, spe: 50},
		abilities: {},
		heightm: 1.8,
		weightkg: 3.3,
		color: "Blue",
		evos: ["dragonair"],
		eggGroups: ["Water 1", "Dragon"],
	},
	dragonair: {
		num: 148,
		species: "Dragonair",
		types: ["Dragon"],
		gender: "N",
		baseStats: {hp: 61, atk: 84, def: 65, spa: 70, spd: 70, spe: 70},
		abilities: {},
		heightm: 4,
		weightkg: 16.5,
		color: "Blue",
		prevo: "dratini",
		evos: ["dragonite"],
		evoLevel: 30,
		eggGroups: ["Water 1", "Dragon"],
	},
	dragonite: {
		num: 149,
		species: "Dragonite",
		types: ["Dragon", "Flying"],
		gender: "N",
		baseStats: {hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80},
		abilities: {},
		heightm: 2.2,
		weightkg: 210,
		color: "Brown",
		prevo: "dragonair",
		evoLevel: 55,
		eggGroups: ["Water 1", "Dragon"],
	},
	mewtwo: {
		num: 150,
		species: "Mewtwo",
		types: ["Psychic"],
		gender: "N",
		baseStats: {hp: 106, atk: 110, def: 90, spa: 154, spd: 154, spe: 130},
		abilities: {},
		heightm: 2,
		weightkg: 122,
		color: "Purple",
		eggGroups: ["Undiscovered"],
	},
	mew: {
		num: 151,
		species: "Mew",
		types: ["Psychic"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {},
		heightm: 0.4,
		weightkg: 4,
		color: "Pink",
		eggGroups: ["Undiscovered"],
	},
		pichu: {
		num: -21
		species: Pichu
		types: ["Electric"]
		baseStats: {"hp":20,"atk":40,"def":15,"spa":35,"spd":35,"spe":60}
		abilities: {"0":"Static","H":"Lightning Rod"}
	},
	cleffa: {
		num: -22
		species: Cleffa
		types: ["Fairy"]
		baseStats: {"hp":50,"atk":25,"def":28,"spa":50,"spd":50,"spe":15}
		abilities: {"0":"Cute Charm","1":"Magic Guard","H":"Friend Guard"}
	},
	igglybuff: {
		num: -23
		species: Igglybuff
		types: ["Normal","Fairy"]
		baseStats: {"hp":90,"atk":30,"def":15,"spa":30,"spd":30,"spe":15}
		abilities: {"0":"Cute Charm","1":"Competitive","H":"Friend Guard"}
	},
	tyrogue: {
		num: -85
		species: Tyrogue
		types: ["Fighting"]
		baseStats: {"hp":35,"atk":35,"def":35,"spa":35,"spd":35,"spe":35}
		abilities: {"0":"Guts","1":"Steadfast","H":"Vital Spirit"}
	},
	happiny: {
		num: -289
		species: Happiny
		types: ["Normal"]
		baseStats: {"hp":100,"atk":5,"def":5,"spa":40,"spd":40,"spe":30}
		abilities: {"0":"Natural Cure","1":"Serene Grace","H":"Friend Guard"}
	},
	mimejr: {
		num: -288
		species: Mime Jr.
		types: ["Psychic","Fairy"]
		baseStats: {"hp":20,"atk":25,"def":45,"spa":80,"spd":80,"spe":60}
		abilities: {"0":"Soundproof","1":"Filter","H":"Technician"}
	},
	smoochum: {
		num: -87
		species: Smoochum
		types: ["Ice","Psychic"]
		baseStats: {"hp":45,"atk":30,"def":15,"spa":75,"spd":75,"spe":65}
		abilities: {"0":"Oblivious","1":"Forewarn","H":"Hydration"}
	},
	elekid: {
		num: -88
		species: Elekid
		types: ["Electric"]
		baseStats: {"hp":45,"atk":63,"def":37,"spa":60,"spd":60,"spe":95}
		abilities: {"0":"Static","H":"Vital Spirit"}
	},
	magby: {
		num: -89
		species: Magby
		types: ["Fire"]
		baseStats: {"hp":45,"atk":75,"def":37,"spa":63,"spd":63,"spe":83}
		abilities: {"0":"Flame Body","H":"Vital Spirit"}
	},
	munchlax: {
		num: -295
		species: Munchlax
		types: ["Normal"]
		baseStats: {"hp":135,"atk":85,"def":40,"spa":63,"spd":63,"spe":5}
		abilities: {"0":"Pickup","1":"Thick Fat","H":"Gluttony"}
	},
	chikorita: {
		num: -1
		species: Chikorita
		types: ["Grass"]
		baseStats: {"hp":45,"atk":49,"def":65,"spa":57,"spd":57,"spe":45}
		abilities: {"0":"Overgrow","H":"Leaf Guard"}
	},
	cyndaquil: {
		num: -4
		species: Cyndaquil
		types: ["Fire"]
		baseStats: {"hp":39,"atk":52,"def":43,"spa":55,"spd":55,"spe":65}
		abilities: {"0":"Blaze","H":"Flash Fire"}
	},
	totodile: {
		num: -7
		species: Totodile
		types: ["Water"]
		baseStats: {"hp":50,"atk":65,"def":64,"spa":46,"spd":46,"spe":43}
		abilities: {"0":"Torrent","H":"Sheer Force"}
	},
	sentret: {
		num: -10
		species: Sentret
		types: ["Normal"]
		baseStats: {"hp":35,"atk":46,"def":34,"spa":40,"spd":40,"spe":20}
		abilities: {"0":"Run Away","1":"Keen Eye","H":"Frisk"}
	},
	hoothoot: {
		num: -12
		species: Hoothoot
		types: ["Normal","Flying"]
		baseStats: {"hp":60,"atk":30,"def":30,"spa":46,"spd":46,"spe":50}
		abilities: {"0":"Insomnia","1":"Keen Eye","H":"Tinted Lens"}
	},
	ledyba: {
		num: -14
		species: Ledyba
		types: ["Bug","Flying"]
		baseStats: {"hp":40,"atk":20,"def":30,"spa":60,"spd":60,"spe":55}
		abilities: {"0":"Swarm","1":"Early Bird","H":"Rattled"}
	},
	spinarak: {
		num: -16
		species: Spinarak
		types: ["Bug","Poison"]
		baseStats: {"hp":40,"atk":60,"def":40,"spa":40,"spd":40,"spe":30}
		abilities: {"0":"Swarm","1":"Insomnia","H":"Sniper"}
	},
	chinchou: {
		num: -19
		species: Chinchou
		types: ["Water","Electric"]
		baseStats: {"hp":75,"atk":38,"def":38,"spa":56,"spd":56,"spe":67}
		abilities: {"0":"Volt Absorb","1":"Illuminate","H":"Water Absorb"}
	},
	togepi: {
		num: -24
		species: Togepi
		types: ["Fairy"]
		baseStats: {"hp":35,"atk":20,"def":65,"spa":53,"spd":53,"spe":20}
		abilities: {"0":"Hustle","1":"Serene Grace","H":"Super Luck"}
	},
	natu: {
		num: -26
		species: Natu
		types: ["Psychic","Flying"]
		baseStats: {"hp":40,"atk":50,"def":45,"spa":58,"spd":58,"spe":70}
		abilities: {"0":"Synchronize","1":"Early Bird","H":"Magic Bounce"}
	},
	mareep: {
		num: -28
		species: Mareep
		types: ["Electric"]
		baseStats: {"hp":55,"atk":40,"def":40,"spa":55,"spd":55,"spe":35}
		abilities: {"0":"Static","H":"Plus"}
	},
	azurill: {
		num: -147
		species: Azurill
		types: ["Normal","Fairy"]
		baseStats: {"hp":50,"atk":20,"def":40,"spa":30,"spd":30,"spe":20}
		abilities: {"0":"Thick Fat","1":"Huge Power","H":"Sap Sipper"}
	},
	marill: {
		num: -32
		species: Marill
		types: ["Water","Fairy"]
		baseStats: {"hp":70,"atk":20,"def":50,"spa":35,"spd":35,"spe":40}
		abilities: {"0":"Thick Fat","1":"Huge Power","H":"Sap Sipper"}
	},
	bonsly: {
		num: -287
		species: Bonsly
		types: ["Rock"]
		baseStats: {"hp":50,"atk":80,"def":95,"spa":28,"spd":28,"spe":10}
		abilities: {"0":"Sturdy","1":"Rock Head","H":"Rattled"}
	},
	sudowoodo: {
		num: -34
		species: Sudowoodo
		types: ["Rock"]
		baseStats: {"hp":70,"atk":100,"def":115,"spa":48,"spd":48,"spe":30}
		abilities: {"0":"Sturdy","1":"Rock Head","H":"Rattled"}
	},
	hoppip: {
		num: -36
		species: Hoppip
		types: ["Grass","Flying"]
		baseStats: {"hp":35,"atk":35,"def":40,"spa":45,"spd":45,"spe":50}
		abilities: {"0":"Chlorophyll","1":"Leaf Guard","H":"Infiltrator"}
	},
	aipom: {
		num: -39
		species: Aipom
		types: ["Normal"]
		baseStats: {"hp":55,"atk":70,"def":55,"spa":48,"spd":48,"spe":85}
		abilities: {"0":"Run Away","1":"Pickup","H":"Skill Link"}
	},
	sunkern: {
		num: -40
		species: Sunkern
		types: ["Grass"]
		baseStats: {"hp":30,"atk":30,"def":30,"spa":30,"spd":30,"spe":30}
		abilities: {"0":"Chlorophyll","1":"Solar Power","H":"Early Bird"}
	},
	yanma: {
		num: -42
		species: Yanma
		types: ["Bug","Flying"]
		baseStats: {"hp":65,"atk":65,"def":45,"spa":60,"spd":60,"spe":95}
		abilities: {"0":"Speed Boost","1":"Compound Eyes","H":"Frisk"}
	},
	wooper: {
		num: -43
		species: Wooper
		types: ["Water","Ground"]
		baseStats: {"hp":55,"atk":45,"def":45,"spa":25,"spd":25,"spe":15}
		abilities: {"0":"Damp","1":"Water Absorb","H":"Unaware"}
	},
	murkrow: {
		num: -47
		species: Murkrow
		types: ["Dark","Flying"]
		baseStats: {"hp":60,"atk":85,"def":42,"spa":64,"spd":64,"spe":91}
		abilities: {"0":"Insomnia","1":"Super Luck","H":"Prankster"}
	},
	misdreavus: {
		num: -49
		species: Misdreavus
		types: ["Ghost"]
		baseStats: {"hp":60,"atk":60,"def":60,"spa":85,"spd":85,"spe":85}
		abilities: {"0":"Levitate"}
	},
	girafarig: {
		num: -52
		species: Girafarig
		types: ["Normal","Psychic"]
		baseStats: {"hp":70,"atk":80,"def":65,"spa":78,"spd":78,"spe":85}
		abilities: {"0":"Inner Focus","1":"Early Bird","H":"Sap Sipper"}
	},
	pineco: {
		num: -53
		species: Pineco
		types: ["Bug"]
		baseStats: {"hp":50,"atk":65,"def":90,"spa":35,"spd":35,"spe":15}
		abilities: {"0":"Sturdy","H":"Overcoat"}
	},
	dunsparce: {
		num: -55
		species: Dunsparce
		types: ["Normal"]
		baseStats: {"hp":100,"atk":70,"def":70,"spa":65,"spd":65,"spe":45}
		abilities: {"0":"Serene Grace","1":"Run Away","H":"Rattled"}
	},
	gligar: {
		num: -56
		species: Gligar
		types: ["Ground","Flying"]
		baseStats: {"hp":65,"atk":75,"def":105,"spa":50,"spd":50,"spe":85}
		abilities: {"0":"Hyper Cutter","1":"Sand Veil","H":"Immunity"}
	},
	snubbull: {
		num: -58
		species: Snubbull
		types: ["Fairy"]
		baseStats: {"hp":60,"atk":80,"def":50,"spa":40,"spd":40,"spe":30}
		abilities: {"0":"Intimidate","1":"Run Away","H":"Rattled"}
	},
	qwilfish: {
		num: -60
		species: Qwilfish
		types: ["Water","Poison"]
		baseStats: {"hp":65,"atk":95,"def":85,"spa":55,"spd":55,"spe":85}
		abilities: {"0":"Poison Point","1":"Swift Swim","H":"Intimidate"}
	},
	shuckle: {
		num: -62
		species: Shuckle
		types: ["Bug","Rock"]
		baseStats: {"hp":20,"atk":10,"def":230,"spa":120,"spd":120,"spe":5}
		abilities: {"0":"Sturdy","1":"Gluttony","H":"Contrary"}
	},
	heracross: {
		num: -63
		species: Heracross
		types: ["Bug","Fighting"]
		baseStats: {"hp":80,"atk":125,"def":75,"spa":68,"spd":68,"spe":85}
		abilities: {"0":"Swarm","1":"Guts","H":"Moxie"}
	},
	sneasel: {
		num: -64
		species: Sneasel
		types: ["Dark","Ice"]
		baseStats: {"hp":55,"atk":95,"def":55,"spa":55,"spd":55,"spe":115}
		abilities: {"0":"Inner Focus","1":"Keen Eye","H":"Pickpocket"}
	},
	teddiursa: {
		num: -65
		species: Teddiursa
		types: ["Normal"]
		baseStats: {"hp":60,"atk":80,"def":50,"spa":50,"spd":50,"spe":40}
		abilities: {"0":"Pickup","1":"Quick Feet","H":"Honey Gather"}
	},
	slugma: {
		num: -67
		species: Slugma
		types: ["Fire"]
		baseStats: {"hp":40,"atk":40,"def":40,"spa":55,"spd":55,"spe":20}
		abilities: {"0":"Magma Armor","1":"Flame Body","H":"Weak Armor"}
	},
	swinub: {
		num: -69
		species: Swinub
		types: ["Ice","Ground"]
		baseStats: {"hp":50,"atk":50,"def":40,"spa":30,"spd":30,"spe":50}
		abilities: {"0":"Oblivious","1":"Snow Cloak","H":"Thick Fat"}
	},
	corsola: {
		num: -71
		species: Corsola
		types: ["Water","Rock"]
		baseStats: {"hp":65,"atk":55,"def":95,"spa":80,"spd":80,"spe":35}
		abilities: {"0":"Hustle","1":"Natural Cure","H":"Regenerator"}
	},
	corsolagalar: {
		num: -71
		species: Corsola-Galar
		types: ["Ghost"]
		baseStats: {"hp":60,"atk":55,"def":100,"spa":83,"spd":83,"spe":30}
		abilities: {"0":"Weak Armor","H":"Cursed Body"}
	},
	remoraid: {
		num: -72
		species: Remoraid
		types: ["Water"]
		baseStats: {"hp":35,"atk":65,"def":35,"spa":50,"spd":50,"spe":65}
		abilities: {"0":"Hustle","1":"Sniper","H":"Moody"}
	},
	delibird: {
		num: -74
		species: Delibird
		types: ["Ice","Flying"]
		baseStats: {"hp":45,"atk":55,"def":45,"spa":55,"spd":55,"spe":75}
		abilities: {"0":"Vital Spirit","1":"Hustle","H":"Insomnia"}
	},
	mantyke: {
		num: -307
		species: Mantyke
		types: ["Water","Flying"]
		baseStats: {"hp":45,"atk":20,"def":50,"spa":90,"spd":90,"spe":50}
		abilities: {"0":"Swift Swim","1":"Water Absorb","H":"Water Veil"}
	},
	mantine: {
		num: -75
		species: Mantine
		types: ["Water","Flying"]
		baseStats: {"hp":85,"atk":40,"def":70,"spa":110,"spd":110,"spe":70}
		abilities: {"0":"Swift Swim","1":"Water Absorb","H":"Water Veil"}
	},
	skarmory: {
		num: -76
		species: Skarmory
		types: ["Steel","Flying"]
		baseStats: {"hp":65,"atk":80,"def":140,"spa":55,"spd":55,"spe":70}
		abilities: {"0":"Keen Eye","1":"Sturdy","H":"Weak Armor"}
	},
	houndour: {
		num: -77
		species: Houndour
		types: ["Dark","Fire"]
		baseStats: {"hp":45,"atk":60,"def":30,"spa":65,"spd":65,"spe":65}
		abilities: {"0":"Early Bird","1":"Flash Fire","H":"Unnerve"}
	},
	phanpy: {
		num: -80
		species: Phanpy
		types: ["Ground"]
		baseStats: {"hp":90,"atk":60,"def":60,"spa":40,"spd":40,"spe":40}
		abilities: {"0":"Pickup","H":"Sand Veil"}
	},
	stantler: {
		num: -83
		species: Stantler
		types: ["Normal"]
		baseStats: {"hp":73,"atk":95,"def":62,"spa":75,"spd":75,"spe":85}
		abilities: {"0":"Intimidate","1":"Frisk","H":"Sap Sipper"}
	},
	miltank: {
		num: -90
		species: Miltank
		types: ["Normal"]
		baseStats: {"hp":95,"atk":80,"def":105,"spa":55,"spd":55,"spe":100}
		abilities: {"0":"Thick Fat","1":"Scrappy","H":"Sap Sipper"}
	},
	larvitar: {
		num: -95
		species: Larvitar
		types: ["Rock","Ground"]
		baseStats: {"hp":50,"atk":64,"def":50,"spa":48,"spd":48,"spe":41}
		abilities: {"0":"Guts","H":"Sand Veil"}
	},
	treecko: {
		num: -101
		species: Treecko
		types: ["Grass"]
		baseStats: {"hp":40,"atk":45,"def":35,"spa":60,"spd":60,"spe":70}
		abilities: {"0":"Overgrow","H":"Unburden"}
	},
	torchic: {
		num: -104
		species: Torchic
		types: ["Fire"]
		baseStats: {"hp":45,"atk":60,"def":40,"spa":60,"spd":60,"spe":45}
		abilities: {"0":"Blaze","H":"Speed Boost"}
	},
	mudkip: {
		num: -107
		species: Mudkip
		types: ["Water"]
		baseStats: {"hp":50,"atk":70,"def":50,"spa":50,"spd":50,"spe":40}
		abilities: {"0":"Torrent","H":"Damp"}
	},
	poochyena: {
		num: -110
		species: Poochyena
		types: ["Dark"]
		baseStats: {"hp":35,"atk":55,"def":35,"spa":30,"spd":30,"spe":35}
		abilities: {"0":"Run Away","1":"Quick Feet","H":"Rattled"}
	},
	zigzagoon: {
		num: -112
		species: Zigzagoon
		types: ["Normal"]
		baseStats: {"hp":38,"atk":30,"def":41,"spa":36,"spd":36,"spe":60}
		abilities: {"0":"Pickup","1":"Gluttony","H":"Quick Feet"}
	},
	zigzagoongalar: {
		num: -112
		species: Zigzagoon-Galar
		types: ["Dark","Normal"]
		baseStats: {"hp":38,"atk":30,"def":41,"spa":36,"spd":36,"spe":60}
		abilities: {"0":"Pickup","1":"Gluttony","H":"Quick Feet"}
	},
	lotad: {
		num: -119
		species: Lotad
		types: ["Water","Grass"]
		baseStats: {"hp":40,"atk":30,"def":30,"spa":45,"spd":45,"spe":30}
		abilities: {"0":"Swift Swim","1":"Rain Dish","H":"Own Tempo"}
	},
	seedot: {
		num: -122
		species: Seedot
		types: ["Grass"]
		baseStats: {"hp":40,"atk":40,"def":50,"spa":30,"spd":30,"spe":30}
		abilities: {"0":"Chlorophyll","1":"Early Bird","H":"Pickpocket"}
	},
	taillow: {
		num: -125
		species: Taillow
		types: ["Normal","Flying"]
		baseStats: {"hp":40,"atk":55,"def":30,"spa":30,"spd":30,"spe":85}
		abilities: {"0":"Guts","H":"Scrappy"}
	},
	wingull: {
		num: -127
		species: Wingull
		types: ["Water","Flying"]
		baseStats: {"hp":40,"atk":30,"def":30,"spa":43,"spd":43,"spe":85}
		abilities: {"0":"Keen Eye","1":"Hydration","H":"Rain Dish"}
	},
	ralts: {
		num: -129
		species: Ralts
		types: ["Psychic","Fairy"]
		baseStats: {"hp":28,"atk":25,"def":25,"spa":40,"spd":40,"spe":40}
		abilities: {"0":"Synchronize","1":"Trace","H":"Telepathy"}
	},
	surskit: {
		num: -132
		species: Surskit
		types: ["Bug","Water"]
		baseStats: {"hp":40,"atk":30,"def":32,"spa":51,"spd":51,"spe":65}
		abilities: {"0":"Swift Swim","H":"Rain Dish"}
	},
	shroomish: {
		num: -134
		species: Shroomish
		types: ["Grass"]
		baseStats: {"hp":60,"atk":40,"def":60,"spa":50,"spd":50,"spe":35}
		abilities: {"0":"Effect Spore","1":"Poison Heal","H":"Quick Feet"}
	},
	slakoth: {
		num: -136
		species: Slakoth
		types: ["Normal"]
		baseStats: {"hp":60,"atk":60,"def":60,"spa":35,"spd":35,"spe":30}
		abilities: {"0":"Truant"}
	},
	nincada: {
		num: -139
		species: Nincada
		types: ["Bug","Ground"]
		baseStats: {"hp":31,"atk":45,"def":90,"spa":30,"spd":30,"spe":40}
		abilities: {"0":"Compound Eyes","H":"Run Away"}
	},
	whismur: {
		num: -142
		species: Whismur
		types: ["Normal"]
		baseStats: {"hp":64,"atk":51,"def":23,"spa":37,"spd":37,"spe":28}
		abilities: {"0":"Soundproof","H":"Rattled"}
	},
	makuhita: {
		num: -145
		species: Makuhita
		types: ["Fighting"]
		baseStats: {"hp":72,"atk":60,"def":30,"spa":25,"spd":25,"spe":25}
		abilities: {"0":"Thick Fat","1":"Guts","H":"Sheer Force"}
	},
	nosepass: {
		num: -148
		species: Nosepass
		types: ["Rock"]
		baseStats: {"hp":30,"atk":45,"def":135,"spa":68,"spd":68,"spe":30}
		abilities: {"0":"Sturdy","1":"Magnet Pull","H":"Sand Force"}
	},
	skitty: {
		num: -149
		species: Skitty
		types: ["Normal"]
		baseStats: {"hp":50,"atk":45,"def":45,"spa":35,"spd":35,"spe":50}
		abilities: {"0":"Cute Charm","1":"Normalize","H":"Wonder Skin"}
	},
	sableye: {
		num: -151
		species: Sableye
		types: ["Dark","Ghost"]
		baseStats: {"hp":50,"atk":75,"def":75,"spa":65,"spd":65,"spe":50}
		abilities: {"0":"Keen Eye","1":"Stall","H":"Prankster"}
	},
	mawile: {
		num: -152
		species: Mawile
		types: ["Steel","Fairy"]
		baseStats: {"hp":50,"atk":85,"def":85,"spa":55,"spd":55,"spe":50}
		abilities: {"0":"Hyper Cutter","1":"Intimidate","H":"Sheer Force"}
	},
	aron: {
		num: -153
		species: Aron
		types: ["Steel","Rock"]
		baseStats: {"hp":50,"atk":70,"def":100,"spa":40,"spd":40,"spe":30}
		abilities: {"0":"Sturdy","1":"Rock Head","H":"Heavy Metal"}
	},
	meditite: {
		num: -156
		species: Meditite
		types: ["Fighting","Psychic"]
		baseStats: {"hp":30,"atk":40,"def":55,"spa":48,"spd":48,"spe":60}
		abilities: {"0":"Pure Power","H":"Telepathy"}
	},
	electrike: {
		num: -158
		species: Electrike
		types: ["Electric"]
		baseStats: {"hp":40,"atk":45,"def":40,"spa":53,"spd":53,"spe":65}
		abilities: {"0":"Static","1":"Lightning Rod","H":"Minus"}
	},
	plusle: {
		num: -160
		species: Plusle
		types: ["Electric"]
		baseStats: {"hp":60,"atk":50,"def":40,"spa":80,"spd":80,"spe":95}
		abilities: {"0":"Plus","H":"Lightning Rod"}
	},
	minun: {
		num: -161
		species: Minun
		types: ["Electric"]
		baseStats: {"hp":60,"atk":40,"def":50,"spa":80,"spd":80,"spe":95}
		abilities: {"0":"Minus","H":"Volt Absorb"}
	},
	volbeat: {
		num: -162
		species: Volbeat
		types: ["Bug"]
		baseStats: {"hp":65,"atk":73,"def":75,"spa":66,"spd":66,"spe":85}
		abilities: {"0":"Illuminate","1":"Swarm","H":"Prankster"}
	},
	illumise: {
		num: -163
		species: Illumise
		types: ["Bug"]
		baseStats: {"hp":65,"atk":47,"def":75,"spa":79,"spd":79,"spe":85}
		abilities: {"0":"Oblivious","1":"Tinted Lens","H":"Prankster"}
	},
	budew: {
		num: -255
		species: Budew
		types: ["Grass","Poison"]
		baseStats: {"hp":40,"atk":30,"def":35,"spa":60,"spd":60,"spe":55}
		abilities: {"0":"Natural Cure","1":"Poison Point","H":"Leaf Guard"}
	},
	roselia: {
		num: -164
		species: Roselia
		types: ["Grass","Poison"]
		baseStats: {"hp":50,"atk":60,"def":45,"spa":90,"spd":90,"spe":65}
		abilities: {"0":"Natural Cure","1":"Poison Point","H":"Leaf Guard"}
	},
	gulpin: {
		num: -165
		species: Gulpin
		types: ["Poison"]
		baseStats: {"hp":70,"atk":43,"def":53,"spa":48,"spd":48,"spe":40}
		abilities: {"0":"Liquid Ooze","1":"Sticky Hold","H":"Gluttony"}
	},
	carvanha: {
		num: -167
		species: Carvanha
		types: ["Water","Dark"]
		baseStats: {"hp":45,"atk":90,"def":20,"spa":43,"spd":43,"spe":65}
		abilities: {"0":"Rough Skin","H":"Speed Boost"}
	},
	wailmer: {
		num: -169
		species: Wailmer
		types: ["Water"]
		baseStats: {"hp":130,"atk":70,"def":35,"spa":53,"spd":53,"spe":60}
		abilities: {"0":"Water Veil","1":"Oblivious","H":"Pressure"}
	},
	numel: {
		num: -171
		species: Numel
		types: ["Fire","Ground"]
		baseStats: {"hp":60,"atk":60,"def":40,"spa":55,"spd":55,"spe":35}
		abilities: {"0":"Oblivious","1":"Simple","H":"Own Tempo"}
	},
	torkoal: {
		num: -173
		species: Torkoal
		types: ["Fire"]
		baseStats: {"hp":70,"atk":85,"def":140,"spa":78,"spd":78,"spe":20}
		abilities: {"0":"White Smoke","1":"Drought","H":"Shell Armor"}
	},
	spoink: {
		num: -174
		species: Spoink
		types: ["Psychic"]
		baseStats: {"hp":60,"atk":25,"def":35,"spa":75,"spd":75,"spe":60}
		abilities: {"0":"Thick Fat","1":"Own Tempo","H":"Gluttony"}
	},
	spinda: {
		num: -176
		species: Spinda
		types: ["Normal"]
		baseStats: {"hp":60,"atk":60,"def":60,"spa":60,"spd":60,"spe":60}
		abilities: {"0":"Own Tempo","1":"Tangled Feet","H":"Contrary"}
	},
	trapinch: {
		num: -177
		species: Trapinch
		types: ["Ground"]
		baseStats: {"hp":45,"atk":100,"def":45,"spa":45,"spd":45,"spe":10}
		abilities: {"0":"Hyper Cutter","1":"Arena Trap","H":"Sheer Force"}
	},
	cacnea: {
		num: -180
		species: Cacnea
		types: ["Grass"]
		baseStats: {"hp":50,"atk":85,"def":40,"spa":63,"spd":63,"spe":35}
		abilities: {"0":"Sand Veil","H":"Water Absorb"}
	},
	swablu: {
		num: -182
		species: Swablu
		types: ["Normal","Flying"]
		baseStats: {"hp":45,"atk":40,"def":60,"spa":58,"spd":58,"spe":50}
		abilities: {"0":"Natural Cure","H":"Cloud Nine"}
	},
	zangoose: {
		num: -184
		species: Zangoose
		types: ["Normal"]
		baseStats: {"hp":73,"atk":115,"def":60,"spa":60,"spd":60,"spe":90}
		abilities: {"0":"Immunity","H":"Toxic Boost"}
	},
	seviper: {
		num: -185
		species: Seviper
		types: ["Poison"]
		baseStats: {"hp":73,"atk":100,"def":60,"spa":80,"spd":80,"spe":65}
		abilities: {"0":"Shed Skin","H":"Infiltrator"}
	},
	barboach: {
		num: -188
		species: Barboach
		types: ["Water","Ground"]
		baseStats: {"hp":50,"atk":48,"def":43,"spa":44,"spd":44,"spe":60}
		abilities: {"0":"Oblivious","1":"Anticipation","H":"Hydration"}
	},
	corphish: {
		num: -190
		species: Corphish
		types: ["Water"]
		baseStats: {"hp":43,"atk":80,"def":65,"spa":43,"spd":43,"spe":35}
		abilities: {"0":"Hyper Cutter","1":"Shell Armor","H":"Adaptability"}
	},
	lileep: {
		num: -194
		species: Lileep
		types: ["Rock","Grass"]
		baseStats: {"hp":66,"atk":41,"def":77,"spa":74,"spd":74,"spe":23}
		abilities: {"0":"Suction Cups","H":"Storm Drain"}
	},
	anorith: {
		num: -196
		species: Anorith
		types: ["Rock","Bug"]
		baseStats: {"hp":45,"atk":95,"def":50,"spa":45,"spd":45,"spe":75}
		abilities: {"0":"Battle Armor","H":"Swift Swim"}
	},
	feebas: {
		num: -198
		species: Feebas
		types: ["Water"]
		baseStats: {"hp":20,"atk":15,"def":20,"spa":33,"spd":33,"spe":80}
		abilities: {"0":"Swift Swim","1":"Oblivious","H":"Adaptability"}
	},
	castform: {
		num: -200
		species: Castform
		types: ["Normal"]
		baseStats: {"hp":70,"atk":70,"def":70,"spa":70,"spd":70,"spe":70}
		abilities: {"0":"Forecast"}
	},
	kecleon: {
		num: -201
		species: Kecleon
		types: ["Normal"]
		baseStats: {"hp":60,"atk":90,"def":70,"spa":90,"spd":90,"spe":40}
		abilities: {"0":"Color Change","H":"Protean"}
	},
	shuppet: {
		num: -202
		species: Shuppet
		types: ["Ghost"]
		baseStats: {"hp":44,"atk":75,"def":35,"spa":48,"spd":48,"spe":45}
		abilities: {"0":"Insomnia","1":"Frisk","H":"Cursed Body"}
	},
	duskull: {
		num: -204
		species: Duskull
		types: ["Ghost"]
		baseStats: {"hp":20,"atk":40,"def":90,"spa":60,"spd":60,"spe":25}
		abilities: {"0":"Levitate","H":"Frisk"}
	},
	tropius: {
		num: -206
		species: Tropius
		types: ["Grass","Flying"]
		baseStats: {"hp":99,"atk":68,"def":83,"spa":80,"spd":80,"spe":51}
		abilities: {"0":"Chlorophyll","1":"Solar Power","H":"Harvest"}
	},
	chingling: {
		num: -282
		species: Chingling
		types: ["Psychic"]
		baseStats: {"hp":45,"atk":30,"def":50,"spa":58,"spd":58,"spe":45}
		abilities: {"0":"Levitate"}
	},
	chimecho: {
		num: -207
		species: Chimecho
		types: ["Psychic"]
		baseStats: {"hp":75,"atk":50,"def":80,"spa":93,"spd":93,"spe":65}
		abilities: {"0":"Levitate"}
	},
	absol: {
		num: -208
		species: Absol
		types: ["Dark"]
		baseStats: {"hp":65,"atk":130,"def":60,"spa":68,"spd":68,"spe":75}
		abilities: {"0":"Pressure","1":"Super Luck","H":"Justified"}
	},
	snorunt: {
		num: -210
		species: Snorunt
		types: ["Ice"]
		baseStats: {"hp":50,"atk":50,"def":50,"spa":50,"spd":50,"spe":50}
		abilities: {"0":"Inner Focus","1":"Ice Body","H":"Moody"}
	},
	spheal: {
		num: -212
		species: Spheal
		types: ["Ice","Water"]
		baseStats: {"hp":70,"atk":40,"def":50,"spa":53,"spd":53,"spe":25}
		abilities: {"0":"Thick Fat","1":"Ice Body","H":"Oblivious"}
	},
	clamperl: {
		num: -215
		species: Clamperl
		types: ["Water"]
		baseStats: {"hp":35,"atk":64,"def":85,"spa":65,"spd":65,"spe":32}
		abilities: {"0":"Shell Armor","H":"Rattled"}
	},
	relicanth: {
		num: -218
		species: Relicanth
		types: ["Water","Rock"]
		baseStats: {"hp":100,"atk":90,"def":130,"spa":55,"spd":55,"spe":55}
		abilities: {"0":"Swift Swim","1":"Rock Head","H":"Sturdy"}
	},
	luvdisc: {
		num: -219
		species: Luvdisc
		types: ["Water"]
		baseStats: {"hp":43,"atk":30,"def":55,"spa":53,"spd":53,"spe":97}
		abilities: {"0":"Swift Swim","H":"Hydration"}
	},
	bagon: {
		num: -220
		species: Bagon
		types: ["Dragon"]
		baseStats: {"hp":45,"atk":75,"def":60,"spa":35,"spd":35,"spe":50}
		abilities: {"0":"Rock Head","H":"Sheer Force"}
	},
	turtwig: {
		num: -236
		species: Turtwig
		types: ["Grass"]
		baseStats: {"hp":55,"atk":68,"def":64,"spa":50,"spd":50,"spe":31}
		abilities: {"0":"Overgrow","H":"Shell Armor"}
	},
	chimchar: {
		num: -239
		species: Chimchar
		types: ["Fire"]
		baseStats: {"hp":44,"atk":58,"def":44,"spa":51,"spd":51,"spe":61}
		abilities: {"0":"Blaze","H":"Iron Fist"}
	},
	piplup: {
		num: -242
		species: Piplup
		types: ["Water"]
		baseStats: {"hp":53,"atk":51,"def":53,"spa":59,"spd":59,"spe":40}
		abilities: {"0":"Torrent","H":"Defiant"}
	},
	starly: {
		num: -245
		species: Starly
		types: ["Normal","Flying"]
		baseStats: {"hp":40,"atk":55,"def":30,"spa":30,"spd":30,"spe":60}
		abilities: {"0":"Keen Eye","H":"Reckless"}
	},
	bidoof: {
		num: -248
		species: Bidoof
		types: ["Normal"]
		baseStats: {"hp":59,"atk":45,"def":40,"spa":38,"spd":38,"spe":31}
		abilities: {"0":"Simple","1":"Unaware","H":"Moody"}
	},
	shinx: {
		num: -252
		species: Shinx
		types: ["Electric"]
		baseStats: {"hp":45,"atk":65,"def":34,"spa":37,"spd":37,"spe":45}
		abilities: {"0":"Rivalry","1":"Intimidate","H":"Guts"}
	},
	cranidos: {
		num: -257
		species: Cranidos
		types: ["Rock"]
		baseStats: {"hp":67,"atk":125,"def":40,"spa":30,"spd":30,"spe":58}
		abilities: {"0":"Mold Breaker","H":"Sheer Force"}
	},
	shieldon: {
		num: -259
		species: Shieldon
		types: ["Rock","Steel"]
		baseStats: {"hp":30,"atk":42,"def":118,"spa":65,"spd":65,"spe":30}
		abilities: {"0":"Sturdy","H":"Soundproof"}
	},
	pachirisu: {
		num: -266
		species: Pachirisu
		types: ["Electric"]
		baseStats: {"hp":60,"atk":45,"def":70,"spa":68,"spd":68,"spe":95}
		abilities: {"0":"Run Away","1":"Pickup","H":"Volt Absorb"}
	},
	buizel: {
		num: -267
		species: Buizel
		types: ["Water"]
		baseStats: {"hp":55,"atk":65,"def":35,"spa":45,"spd":45,"spe":85}
		abilities: {"0":"Swift Swim","H":"Water Veil"}
	},
	cherubi: {
		num: -269
		species: Cherubi
		types: ["Grass"]
		baseStats: {"hp":45,"atk":35,"def":45,"spa":58,"spd":58,"spe":35}
		abilities: {"0":"Chlorophyll"}
	},
	shellos: {
		num: -271
		species: Shellos
		types: ["Water"]
		baseStats: {"hp":76,"atk":48,"def":48,"spa":60,"spd":60,"spe":34}
		abilities: {"0":"Sticky Hold","1":"Storm Drain","H":"Sand Force"}
	},
	drifloon: {
		num: -274
		species: Drifloon
		types: ["Ghost","Flying"]
		baseStats: {"hp":90,"atk":50,"def":34,"spa":52,"spd":52,"spe":70}
		abilities: {"0":"Aftermath","1":"Unburden","H":"Flare Boost"}
	},
	buneary: {
		num: -276
		species: Buneary
		types: ["Normal"]
		baseStats: {"hp":55,"atk":66,"def":44,"spa":50,"spd":50,"spe":85}
		abilities: {"0":"Run Away","1":"Klutz","H":"Limber"}
	},
	glameow: {
		num: -280
		species: Glameow
		types: ["Normal"]
		baseStats: {"hp":49,"atk":55,"def":42,"spa":40,"spd":40,"spe":85}
		abilities: {"0":"Limber","1":"Own Tempo","H":"Keen Eye"}
	},
	stunky: {
		num: -283
		species: Stunky
		types: ["Poison","Dark"]
		baseStats: {"hp":63,"atk":63,"def":47,"spa":41,"spd":41,"spe":74}
		abilities: {"0":"Stench","1":"Aftermath","H":"Keen Eye"}
	},
	chatot: {
		num: -290
		species: Chatot
		types: ["Normal","Flying"]
		baseStats: {"hp":76,"atk":65,"def":45,"spa":67,"spd":67,"spe":91}
		abilities: {"0":"Keen Eye","1":"Tangled Feet","H":"Big Pecks"}
	},
	spiritomb: {
		num: -291
		species: Spiritomb
		types: ["Ghost","Dark"]
		baseStats: {"hp":50,"atk":92,"def":108,"spa":100,"spd":100,"spe":35}
		abilities: {"0":"Pressure","H":"Infiltrator"}
	},
	gible: {
		num: -292
		species: Gible
		types: ["Dragon","Ground"]
		baseStats: {"hp":58,"atk":70,"def":45,"spa":43,"spd":43,"spe":42}
		abilities: {"0":"Sand Veil","H":"Rough Skin"}
	},
	riolu: {
		num: -296
		species: Riolu
		types: ["Fighting"]
		baseStats: {"hp":40,"atk":70,"def":40,"spa":38,"spd":38,"spe":60}
		abilities: {"0":"Steadfast","1":"Inner Focus","H":"Prankster"}
	},
	hippopotas: {
		num: -298
		species: Hippopotas
		types: ["Ground"]
		baseStats: {"hp":68,"atk":72,"def":78,"spa":40,"spd":40,"spe":32}
		abilities: {"0":"Sand Stream","H":"Sand Force"}
	},
	skorupi: {
		num: -300
		species: Skorupi
		types: ["Poison","Bug"]
		baseStats: {"hp":40,"atk":50,"def":90,"spa":43,"spd":43,"spe":65}
		abilities: {"0":"Battle Armor","1":"Sniper","H":"Keen Eye"}
	},
	croagunk: {
		num: -302
		species: Croagunk
		types: ["Poison","Fighting"]
		baseStats: {"hp":48,"atk":61,"def":40,"spa":51,"spd":51,"spe":50}
		abilities: {"0":"Anticipation","1":"Dry Skin","H":"Poison Touch"}
	},
	carnivine: {
		num: -304
		species: Carnivine
		types: ["Grass"]
		baseStats: {"hp":74,"atk":100,"def":72,"spa":81,"spd":81,"spe":46}
		abilities: {"0":"Levitate"}
	},
	finneon: {
		num: -305
		species: Finneon
		types: ["Water"]
		baseStats: {"hp":49,"atk":49,"def":56,"spa":55,"spd":55,"spe":66}
		abilities: {"0":"Swift Swim","1":"Storm Drain","H":"Water Veil"}
	},
	snover: {
		num: -308
		species: Snover
		types: ["Grass","Ice"]
		baseStats: {"hp":60,"atk":62,"def":50,"spa":61,"spd":61,"spe":40}
		abilities: {"0":"Snow Warning","H":"Soundproof"}
	},
	snivy: {
		num: -344
		species: Snivy
		types: ["Grass"]
		baseStats: {"hp":45,"atk":45,"def":55,"spa":50,"spd":50,"spe":63}
		abilities: {"0":"Overgrow","H":"Contrary"}
	},
	tepig: {
		num: -347
		species: Tepig
		types: ["Fire"]
		baseStats: {"hp":65,"atk":63,"def":45,"spa":45,"spd":45,"spe":45}
		abilities: {"0":"Blaze","H":"Thick Fat"}
	},
	oshawott: {
		num: -350
		species: Oshawott
		types: ["Water"]
		baseStats: {"hp":55,"atk":55,"def":45,"spa":54,"spd":54,"spe":45}
		abilities: {"0":"Torrent","H":"Shell Armor"}
	},
	patrat: {
		num: -353
		species: Patrat
		types: ["Normal"]
		baseStats: {"hp":45,"atk":55,"def":39,"spa":37,"spd":37,"spe":42}
		abilities: {"0":"Run Away","1":"Keen Eye","H":"Analytic"}
	},
	lillipup: {
		num: -355
		species: Lillipup
		types: ["Normal"]
		baseStats: {"hp":45,"atk":60,"def":45,"spa":35,"spd":35,"spe":55}
		abilities: {"0":"Vital Spirit","1":"Pickup","H":"Run Away"}
	},
	purrloin: {
		num: -358
		species: Purrloin
		types: ["Dark"]
		baseStats: {"hp":41,"atk":50,"def":37,"spa":44,"spd":44,"spe":66}
		abilities: {"0":"Limber","1":"Unburden","H":"Prankster"}
	},
	pansage: {
		num: -360
		species: Pansage
		types: ["Grass"]
		baseStats: {"hp":50,"atk":53,"def":48,"spa":51,"spd":51,"spe":64}
		abilities: {"0":"Gluttony","H":"Overgrow"}
	},
	pansear: {
		num: -362
		species: Pansear
		types: ["Fire"]
		baseStats: {"hp":50,"atk":53,"def":48,"spa":51,"spd":51,"spe":64}
		abilities: {"0":"Gluttony","H":"Blaze"}
	},
	panpour: {
		num: -364
		species: Panpour
		types: ["Water"]
		baseStats: {"hp":50,"atk":53,"def":48,"spa":51,"spd":51,"spe":64}
		abilities: {"0":"Gluttony","H":"Torrent"}
	},
	munna: {
		num: -366
		species: Munna
		types: ["Psychic"]
		baseStats: {"hp":76,"atk":25,"def":45,"spa":61,"spd":61,"spe":24}
		abilities: {"0":"Forewarn","1":"Synchronize","H":"Telepathy"}
	},
	pidove: {
		num: -368
		species: Pidove
		types: ["Normal","Flying"]
		baseStats: {"hp":50,"atk":55,"def":50,"spa":33,"spd":33,"spe":43}
		abilities: {"0":"Big Pecks","1":"Super Luck","H":"Rivalry"}
	},
	blitzle: {
		num: -371
		species: Blitzle
		types: ["Electric"]
		baseStats: {"hp":45,"atk":60,"def":32,"spa":41,"spd":41,"spe":76}
		abilities: {"0":"Lightning Rod","1":"Motor Drive","H":"Sap Sipper"}
	},
	roggenrola: {
		num: -373
		species: Roggenrola
		types: ["Rock"]
		baseStats: {"hp":55,"atk":75,"def":85,"spa":25,"spd":25,"spe":15}
		abilities: {"0":"Sturdy","1":"Weak Armor","H":"Sand Force"}
	},
	woobat: {
		num: -376
		species: Woobat
		types: ["Psychic","Flying"]
		baseStats: {"hp":65,"atk":45,"def":43,"spa":49,"spd":49,"spe":72}
		abilities: {"0":"Unaware","1":"Klutz","H":"Simple"}
	},
	drilbur: {
		num: -378
		species: Drilbur
		types: ["Ground"]
		baseStats: {"hp":60,"atk":85,"def":40,"spa":38,"spd":38,"spe":68}
		abilities: {"0":"Sand Rush","1":"Sand Force","H":"Mold Breaker"}
	},
	audino: {
		num: -380
		species: Audino
		types: ["Normal"]
		baseStats: {"hp":103,"atk":60,"def":86,"spa":73,"spd":73,"spe":50}
		abilities: {"0":"Healer","1":"Regenerator","H":"Klutz"}
	},
	timburr: {
		num: -381
		species: Timburr
		types: ["Fighting"]
		baseStats: {"hp":75,"atk":80,"def":55,"spa":30,"spd":30,"spe":35}
		abilities: {"0":"Guts","1":"Sheer Force","H":"Iron Fist"}
	},
	tympole: {
		num: -384
		species: Tympole
		types: ["Water"]
		baseStats: {"hp":50,"atk":50,"def":40,"spa":45,"spd":45,"spe":64}
		abilities: {"0":"Swift Swim","1":"Hydration","H":"Water Absorb"}
	},
	sewaddle: {
		num: -389
		species: Sewaddle
		types: ["Bug","Grass"]
		baseStats: {"hp":45,"atk":53,"def":70,"spa":50,"spd":50,"spe":42}
		abilities: {"0":"Swarm","1":"Chlorophyll","H":"Overcoat"}
	},
	venipede: {
		num: -392
		species: Venipede
		types: ["Bug","Poison"]
		baseStats: {"hp":30,"atk":45,"def":59,"spa":35,"spd":35,"spe":57}
		abilities: {"0":"Poison Point","1":"Swarm","H":"Speed Boost"}
	},
	cottonee: {
		num: -395
		species: Cottonee
		types: ["Grass","Fairy"]
		baseStats: {"hp":40,"atk":27,"def":60,"spa":44,"spd":44,"spe":66}
		abilities: {"0":"Prankster","1":"Infiltrator","H":"Chlorophyll"}
	},
	petilil: {
		num: -397
		species: Petilil
		types: ["Grass"]
		baseStats: {"hp":45,"atk":35,"def":50,"spa":60,"spd":60,"spe":30}
		abilities: {"0":"Chlorophyll","1":"Own Tempo","H":"Leaf Guard"}
	},
	basculin: {
		num: -399
		species: Basculin
		types: ["Water"]
		baseStats: {"hp":70,"atk":92,"def":65,"spa":68,"spd":68,"spe":98}
		abilities: {"0":"Reckless","1":"Adaptability","H":"Mold Breaker"}
	},
	sandile: {
		num: -400
		species: Sandile
		types: ["Ground","Dark"]
		baseStats: {"hp":50,"atk":72,"def":35,"spa":35,"spd":35,"spe":65}
		abilities: {"0":"Intimidate","1":"Moxie","H":"Anger Point"}
	},
	darumaka: {
		num: -403
		species: Darumaka
		types: ["Fire"]
		baseStats: {"hp":70,"atk":90,"def":45,"spa":30,"spd":30,"spe":50}
		abilities: {"0":"Hustle","H":"Inner Focus"}
	},
	darumakagalar: {
		num: -403
		species: Darumaka-Galar
		types: ["Ice"]
		baseStats: {"hp":70,"atk":90,"def":45,"spa":30,"spd":30,"spe":50}
		abilities: {"0":"Hustle","H":"Inner Focus"}
	},
	maractus: {
		num: -405
		species: Maractus
		types: ["Grass"]
		baseStats: {"hp":75,"atk":86,"def":67,"spa":87,"spd":87,"spe":60}
		abilities: {"0":"Water Absorb","1":"Chlorophyll","H":"Storm Drain"}
	},
	dwebble: {
		num: -406
		species: Dwebble
		types: ["Bug","Rock"]
		baseStats: {"hp":50,"atk":65,"def":85,"spa":35,"spd":35,"spe":55}
		abilities: {"0":"Sturdy","1":"Shell Armor","H":"Weak Armor"}
	},
	scraggy: {
		num: -408
		species: Scraggy
		types: ["Dark","Fighting"]
		baseStats: {"hp":50,"atk":75,"def":70,"spa":53,"spd":53,"spe":48}
		abilities: {"0":"Shed Skin","1":"Moxie","H":"Intimidate"}
	},
	sigilyph: {
		num: -410
		species: Sigilyph
		types: ["Psychic","Flying"]
		baseStats: {"hp":72,"atk":58,"def":80,"spa":92,"spd":92,"spe":97}
		abilities: {"0":"Wonder Skin","1":"Magic Guard","H":"Tinted Lens"}
	},
	yamask: {
		num: -411
		species: Yamask
		types: ["Ghost"]
		baseStats: {"hp":38,"atk":30,"def":85,"spa":60,"spd":60,"spe":30}
		abilities: {"0":"Mummy"}
	},
	yamaskgalar: {
		num: -411
		species: Yamask-Galar
		types: ["Ground","Ghost"]
		baseStats: {"hp":38,"atk":55,"def":85,"spa":48,"spd":48,"spe":30}
		abilities: {"0":"Wandering Spirit"}
	},
	tirtouga: {
		num: -413
		species: Tirtouga
		types: ["Water","Rock"]
		baseStats: {"hp":54,"atk":78,"def":103,"spa":49,"spd":49,"spe":22}
		abilities: {"0":"Solid Rock","1":"Sturdy","H":"Swift Swim"}
	},
	archen: {
		num: -415
		species: Archen
		types: ["Rock","Flying"]
		baseStats: {"hp":55,"atk":112,"def":45,"spa":60,"spd":60,"spe":70}
		abilities: {"0":"Defeatist"}
	},
	trubbish: {
		num: -417
		species: Trubbish
		types: ["Poison"]
		baseStats: {"hp":50,"atk":50,"def":62,"spa":51,"spd":51,"spe":65}
		abilities: {"0":"Stench","1":"Sticky Hold","H":"Aftermath"}
	},
	zorua: {
		num: -419
		species: Zorua
		types: ["Dark"]
		baseStats: {"hp":40,"atk":65,"def":40,"spa":60,"spd":60,"spe":65}
		abilities: {"0":"Illusion"}
	},
	minccino: {
		num: -421
		species: Minccino
		types: ["Normal"]
		baseStats: {"hp":55,"atk":50,"def":40,"spa":40,"spd":40,"spe":75}
		abilities: {"0":"Cute Charm","1":"Technician","H":"Skill Link"}
	},
	gothita: {
		num: -423
		species: Gothita
		types: ["Psychic"]
		baseStats: {"hp":45,"atk":30,"def":50,"spa":60,"spd":60,"spe":45}
		abilities: {"0":"Frisk","1":"Competitive","H":"Shadow Tag"}
	},
	solosis: {
		num: -426
		species: Solosis
		types: ["Psychic"]
		baseStats: {"hp":45,"atk":30,"def":40,"spa":78,"spd":78,"spe":20}
		abilities: {"0":"Overcoat","1":"Magic Guard","H":"Regenerator"}
	},
	ducklett: {
		num: -429
		species: Ducklett
		types: ["Water","Flying"]
		baseStats: {"hp":62,"atk":44,"def":50,"spa":47,"spd":47,"spe":55}
		abilities: {"0":"Keen Eye","1":"Big Pecks","H":"Hydration"}
	},
	vanillite: {
		num: -431
		species: Vanillite
		types: ["Ice"]
		baseStats: {"hp":36,"atk":50,"def":50,"spa":63,"spd":63,"spe":44}
		abilities: {"0":"Ice Body","1":"Snow Cloak","H":"Weak Armor"}
	},
	deerling: {
		num: -434
		species: Deerling
		types: ["Normal","Grass"]
		baseStats: {"hp":60,"atk":60,"def":50,"spa":45,"spd":45,"spe":75}
		abilities: {"0":"Chlorophyll","1":"Sap Sipper","H":"Serene Grace"}
	},
	emolga: {
		num: -436
		species: Emolga
		types: ["Electric","Flying"]
		baseStats: {"hp":55,"atk":75,"def":60,"spa":68,"spd":68,"spe":103}
		abilities: {"0":"Static","H":"Motor Drive"}
	},
	karrablast: {
		num: -437
		species: Karrablast
		types: ["Bug"]
		baseStats: {"hp":50,"atk":75,"def":45,"spa":43,"spd":43,"spe":60}
		abilities: {"0":"Swarm","1":"Shed Skin","H":"No Guard"}
	},
	foongus: {
		num: -439
		species: Foongus
		types: ["Grass","Poison"]
		baseStats: {"hp":69,"atk":55,"def":45,"spa":55,"spd":55,"spe":15}
		abilities: {"0":"Effect Spore","H":"Regenerator"}
	},
	frillish: {
		num: -441
		species: Frillish
		types: ["Water","Ghost"]
		baseStats: {"hp":55,"atk":40,"def":50,"spa":75,"spd":75,"spe":40}
		abilities: {"0":"Water Absorb","1":"Cursed Body","H":"Damp"}
	},
	alomomola: {
		num: -443
		species: Alomomola
		types: ["Water"]
		baseStats: {"hp":165,"atk":75,"def":80,"spa":43,"spd":43,"spe":65}
		abilities: {"0":"Healer","1":"Hydration","H":"Regenerator"}
	},
	joltik: {
		num: -444
		species: Joltik
		types: ["Bug","Electric"]
		baseStats: {"hp":50,"atk":47,"def":50,"spa":54,"spd":54,"spe":65}
		abilities: {"0":"Compound Eyes","1":"Unnerve","H":"Swarm"}
	},
	ferroseed: {
		num: -446
		species: Ferroseed
		types: ["Grass","Steel"]
		baseStats: {"hp":44,"atk":50,"def":91,"spa":55,"spd":55,"spe":10}
		abilities: {"0":"Iron Barbs"}
	},
	elgyem: {
		num: -454
		species: Elgyem
		types: ["Psychic"]
		baseStats: {"hp":55,"atk":55,"def":55,"spa":70,"spd":70,"spe":30}
		abilities: {"0":"Telepathy","1":"Synchronize","H":"Analytic"}
	},
	litwick: {
		num: -456
		species: Litwick
		types: ["Ghost","Fire"]
		baseStats: {"hp":50,"atk":30,"def":55,"spa":60,"spd":60,"spe":20}
		abilities: {"0":"Flash Fire","1":"Flame Body","H":"Infiltrator"}
	},
	axew: {
		num: -459
		species: Axew
		types: ["Dragon"]
		baseStats: {"hp":46,"atk":87,"def":60,"spa":35,"spd":35,"spe":57}
		abilities: {"0":"Rivalry","1":"Mold Breaker","H":"Unnerve"}
	},
	cubchoo: {
		num: -462
		species: Cubchoo
		types: ["Ice"]
		baseStats: {"hp":55,"atk":70,"def":40,"spa":50,"spd":50,"spe":40}
		abilities: {"0":"Snow Cloak","1":"Slush Rush","H":"Rattled"}
	},
	shelmet: {
		num: -465
		species: Shelmet
		types: ["Bug"]
		baseStats: {"hp":50,"atk":40,"def":85,"spa":53,"spd":53,"spe":25}
		abilities: {"0":"Hydration","1":"Shell Armor","H":"Overcoat"}
	},
	stunfisk: {
		num: -467
		species: Stunfisk
		types: ["Ground","Electric"]
		baseStats: {"hp":109,"atk":66,"def":84,"spa":90,"spd":90,"spe":32}
		abilities: {"0":"Static","1":"Limber","H":"Sand Veil"}
	},
	stunfiskgalar: {
		num: -467
		species: Stunfisk-Galar
		types: ["Ground","Steel"]
		baseStats: {"hp":109,"atk":81,"def":99,"spa":75,"spd":75,"spe":32}
		abilities: {"0":"Mimicry"}
	},
	mienfoo: {
		num: -468
		species: Mienfoo
		types: ["Fighting"]
		baseStats: {"hp":45,"atk":85,"def":50,"spa":53,"spd":53,"spe":65}
		abilities: {"0":"Inner Focus","1":"Regenerator","H":"Reckless"}
	},
	druddigon: {
		num: -470
		species: Druddigon
		types: ["Dragon"]
		baseStats: {"hp":77,"atk":120,"def":90,"spa":75,"spd":75,"spe":48}
		abilities: {"0":"Rough Skin","1":"Sheer Force","H":"Mold Breaker"}
	},
	pawniard: {
		num: -473
		species: Pawniard
		types: ["Dark","Steel"]
		baseStats: {"hp":45,"atk":85,"def":70,"spa":40,"spd":40,"spe":60}
		abilities: {"0":"Defiant","1":"Inner Focus","H":"Pressure"}
	},
	bouffalant: {
		num: -475
		species: Bouffalant
		types: ["Normal"]
		baseStats: {"hp":95,"atk":110,"def":95,"spa":68,"spd":68,"spe":55}
		abilities: {"0":"Reckless","1":"Sap Sipper","H":"Soundproof"}
	},
	vullaby: {
		num: -478
		species: Vullaby
		types: ["Dark","Flying"]
		baseStats: {"hp":70,"atk":55,"def":75,"spa":55,"spd":55,"spe":60}
		abilities: {"0":"Big Pecks","1":"Overcoat","H":"Weak Armor"}
	},
	heatmor: {
		num: -480
		species: Heatmor
		types: ["Fire"]
		baseStats: {"hp":85,"atk":97,"def":66,"spa":86,"spd":86,"spe":65}
		abilities: {"0":"Gluttony","1":"Flash Fire","H":"White Smoke"}
	},
	durant: {
		num: -481
		species: Durant
		types: ["Bug","Steel"]
		baseStats: {"hp":58,"atk":109,"def":112,"spa":48,"spd":48,"spe":109}
		abilities: {"0":"Swarm","1":"Hustle","H":"Truant"}
	},
	deino: {
		num: -482
		species: Deino
		types: ["Dark","Dragon"]
		baseStats: {"hp":52,"atk":65,"def":50,"spa":48,"spd":48,"spe":38}
		abilities: {"0":"Hustle"}
	},
	larvesta: {
		num: -485
		species: Larvesta
		types: ["Bug","Fire"]
		baseStats: {"hp":55,"atk":85,"def":55,"spa":53,"spd":53,"spe":60}
		abilities: {"0":"Flame Body","H":"Swarm"}
	},
	chespin: {
		num: -499
		species: Chespin
		types: ["Grass"]
		baseStats: {"hp":56,"atk":61,"def":65,"spa":47,"spd":47,"spe":38}
		abilities: {"0":"Overgrow","H":"Bulletproof"}
	},
	fennekin: {
		num: -502
		species: Fennekin
		types: ["Fire"]
		baseStats: {"hp":40,"atk":45,"def":40,"spa":61,"spd":61,"spe":60}
		abilities: {"0":"Blaze","H":"Magician"}
	},
	froakie: {
		num: -505
		species: Froakie
		types: ["Water"]
		baseStats: {"hp":41,"atk":56,"def":40,"spa":53,"spd":53,"spe":71}
		abilities: {"0":"Torrent","H":"Protean"}
	},
	bunnelby: {
		num: -508
		species: Bunnelby
		types: ["Normal"]
		baseStats: {"hp":38,"atk":36,"def":38,"spa":34,"spd":34,"spe":57}
		abilities: {"0":"Pickup","1":"Cheek Pouch","H":"Huge Power"}
	},
	fletchling: {
		num: -510
		species: Fletchling
		types: ["Normal","Flying"]
		baseStats: {"hp":45,"atk":50,"def":43,"spa":39,"spd":39,"spe":62}
		abilities: {"0":"Big Pecks","H":"Gale Wings"}
	},
	scatterbug: {
		num: -513
		species: Scatterbug
		types: ["Bug"]
		baseStats: {"hp":38,"atk":35,"def":40,"spa":26,"spd":26,"spe":35}
		abilities: {"0":"Shield Dust","1":"Compound Eyes","H":"Friend Guard"}
	},
	litleo: {
		num: -516
		species: Litleo
		types: ["Fire","Normal"]
		baseStats: {"hp":62,"atk":50,"def":58,"spa":64,"spd":64,"spe":72}
		abilities: {"0":"Rivalry","1":"Unnerve","H":"Moxie"}
	},
	flabebe: {
		num: -518
		species: Flabébé
		types: ["Fairy"]
		baseStats: {"hp":44,"atk":38,"def":39,"spa":70,"spd":70,"spe":42}
		abilities: {"0":"Flower Veil","H":"Symbiosis"}
	},
	skiddo: {
		num: -521
		species: Skiddo
		types: ["Grass"]
		baseStats: {"hp":66,"atk":65,"def":48,"spa":60,"spd":60,"spe":52}
		abilities: {"0":"Sap Sipper","H":"Grass Pelt"}
	},
	pancham: {
		num: -523
		species: Pancham
		types: ["Fighting"]
		baseStats: {"hp":67,"atk":82,"def":62,"spa":47,"spd":47,"spe":43}
		abilities: {"0":"Iron Fist","1":"Mold Breaker","H":"Scrappy"}
	},
	furfrou: {
		num: -525
		species: Furfrou
		types: ["Normal"]
		baseStats: {"hp":75,"atk":80,"def":60,"spa":78,"spd":78,"spe":102}
		abilities: {"0":"Fur Coat"}
	},
	espurr: {
		num: -526
		species: Espurr
		types: ["Psychic"]
		baseStats: {"hp":62,"atk":48,"def":54,"spa":62,"spd":62,"spe":68}
		abilities: {"0":"Keen Eye","1":"Infiltrator","H":"Own Tempo"}
	},
	honedge: {
		num: -528
		species: Honedge
		types: ["Steel","Ghost"]
		baseStats: {"hp":45,"atk":80,"def":100,"spa":36,"spd":36,"spe":28}
		abilities: {"0":"No Guard"}
	},
	spritzee: {
		num: -531
		species: Spritzee
		types: ["Fairy"]
		baseStats: {"hp":78,"atk":52,"def":60,"spa":64,"spd":64,"spe":23}
		abilities: {"0":"Healer","H":"Aroma Veil"}
	},
	swirlix: {
		num: -533
		species: Swirlix
		types: ["Fairy"]
		baseStats: {"hp":62,"atk":48,"def":66,"spa":58,"spd":58,"spe":49}
		abilities: {"0":"Sweet Veil","H":"Unburden"}
	},
	inkay: {
		num: -535
		species: Inkay
		types: ["Dark","Psychic"]
		baseStats: {"hp":53,"atk":54,"def":53,"spa":42,"spd":42,"spe":45}
		abilities: {"0":"Contrary","1":"Suction Cups","H":"Infiltrator"}
	},
	binacle: {
		num: -537
		species: Binacle
		types: ["Rock","Water"]
		baseStats: {"hp":42,"atk":52,"def":67,"spa":48,"spd":48,"spe":50}
		abilities: {"0":"Tough Claws","1":"Sniper","H":"Pickpocket"}
	},
	skrelp: {
		num: -539
		species: Skrelp
		types: ["Poison","Water"]
		baseStats: {"hp":50,"atk":60,"def":60,"spa":60,"spd":60,"spe":30}
		abilities: {"0":"Poison Point","1":"Poison Touch","H":"Adaptability"}
	},
	clauncher: {
		num: -541
		species: Clauncher
		types: ["Water"]
		baseStats: {"hp":50,"atk":53,"def":62,"spa":61,"spd":61,"spe":44}
		abilities: {"0":"Mega Launcher"}
	},
	helioptile: {
		num: -543
		species: Helioptile
		types: ["Electric","Normal"]
		baseStats: {"hp":44,"atk":38,"def":33,"spa":52,"spd":52,"spe":70}
		abilities: {"0":"Dry Skin","1":"Sand Veil","H":"Solar Power"}
	},
	tyrunt: {
		num: -545
		species: Tyrunt
		types: ["Rock","Dragon"]
		baseStats: {"hp":58,"atk":89,"def":77,"spa":45,"spd":45,"spe":48}
		abilities: {"0":"Strong Jaw","H":"Sturdy"}
	},
	amaura: {
		num: -547
		species: Amaura
		types: ["Rock","Ice"]
		baseStats: {"hp":77,"atk":59,"def":50,"spa":65,"spd":65,"spe":46}
		abilities: {"0":"Refrigerate","H":"Snow Warning"}
	},
	hawlucha: {
		num: -550
		species: Hawlucha
		types: ["Fighting","Flying"]
		baseStats: {"hp":78,"atk":92,"def":75,"spa":69,"spd":69,"spe":118}
		abilities: {"0":"Limber","1":"Unburden","H":"Mold Breaker"}
	},
	dedenne: {
		num: -551
		species: Dedenne
		types: ["Electric","Fairy"]
		baseStats: {"hp":67,"atk":58,"def":57,"spa":74,"spd":74,"spe":101}
		abilities: {"0":"Cheek Pouch","1":"Pickup","H":"Plus"}
	},
	goomy: {
		num: -553
		species: Goomy
		types: ["Dragon"]
		baseStats: {"hp":45,"atk":50,"def":35,"spa":65,"spd":65,"spe":40}
		abilities: {"0":"Sap Sipper","1":"Hydration","H":"Gooey"}
	},
	klefki: {
		num: -556
		species: Klefki
		types: ["Steel","Fairy"]
		baseStats: {"hp":57,"atk":80,"def":91,"spa":84,"spd":84,"spe":75}
		abilities: {"0":"Prankster","H":"Magician"}
	},
	phantump: {
		num: -557
		species: Phantump
		types: ["Ghost","Grass"]
		baseStats: {"hp":43,"atk":70,"def":48,"spa":55,"spd":55,"spe":38}
		abilities: {"0":"Natural Cure","1":"Frisk","H":"Harvest"}
	},
	pumpkaboo: {
		num: -559
		species: Pumpkaboo
		types: ["Ghost","Grass"]
		baseStats: {"hp":49,"atk":66,"def":70,"spa":50,"spd":50,"spe":51}
		abilities: {"0":"Pickup","1":"Frisk","H":"Insomnia"}
	},
	bergmite: {
		num: -561
		species: Bergmite
		types: ["Ice"]
		baseStats: {"hp":55,"atk":69,"def":85,"spa":34,"spd":34,"spe":28}
		abilities: {"0":"Own Tempo","1":"Ice Body","H":"Sturdy"}
	},
	noibat: {
		num: -563
		species: Noibat
		types: ["Flying","Dragon"]
		baseStats: {"hp":40,"atk":30,"def":35,"spa":43,"spd":43,"spe":55}
		abilities: {"0":"Frisk","1":"Infiltrator","H":"Telepathy"}
	},
	rowlet: {
		num: -571
		species: Rowlet
		types: ["Grass","Flying"]
		baseStats: {"hp":68,"atk":55,"def":55,"spa":50,"spd":50,"spe":42}
		abilities: {"0":"Overgrow","H":"Long Reach"}
	},
	litten: {
		num: -574
		species: Litten
		types: ["Fire"]
		baseStats: {"hp":45,"atk":65,"def":40,"spa":50,"spd":50,"spe":70}
		abilities: {"0":"Blaze","H":"Intimidate"}
	},
	popplio: {
		num: -577
		species: Popplio
		types: ["Water"]
		baseStats: {"hp":50,"atk":54,"def":54,"spa":61,"spd":61,"spe":40}
		abilities: {"0":"Torrent","H":"Liquid Voice"}
	},
	pikipek: {
		num: -580
		species: Pikipek
		types: ["Normal","Flying"]
		baseStats: {"hp":35,"atk":75,"def":30,"spa":30,"spd":30,"spe":65}
		abilities: {"0":"Keen Eye","1":"Skill Link","H":"Pickup"}
	},
	yungoos: {
		num: -583
		species: Yungoos
		types: ["Normal"]
		baseStats: {"hp":48,"atk":70,"def":30,"spa":30,"spd":30,"spe":45}
		abilities: {"0":"Stakeout","1":"Strong Jaw","H":"Adaptability"}
	},
	grubbin: {
		num: -585
		species: Grubbin
		types: ["Bug"]
		baseStats: {"hp":47,"atk":62,"def":45,"spa":50,"spd":50,"spe":46}
		abilities: {"0":"Swarm"}
	},
	crabrawler: {
		num: -588
		species: Crabrawler
		types: ["Fighting"]
		baseStats: {"hp":47,"atk":82,"def":57,"spa":45,"spd":45,"spe":63}
		abilities: {"0":"Hyper Cutter","1":"Iron Fist","H":"Anger Point"}
	},
	oricorio: {
		num: -590
		species: Oricorio
		types: ["Fire","Flying"]
		baseStats: {"hp":75,"atk":70,"def":70,"spa":84,"spd":84,"spe":93}
		abilities: {"0":"Dancer"}
	},
	cutiefly: {
		num: -591
		species: Cutiefly
		types: ["Bug","Fairy"]
		baseStats: {"hp":40,"atk":45,"def":40,"spa":48,"spd":48,"spe":84}
		abilities: {"0":"Honey Gather","1":"Shield Dust","H":"Sweet Veil"}
	},
	rockruff: {
		num: -593
		species: Rockruff
		types: ["Rock"]
		baseStats: {"hp":45,"atk":65,"def":40,"spa":35,"spd":35,"spe":60}
		abilities: {"0":"Keen Eye","1":"Vital Spirit","H":"Steadfast","S":"Own Tempo"}
	},
	wishiwashi: {
		num: -595
		species: Wishiwashi
		types: ["Water"]
		baseStats: {"hp":45,"atk":20,"def":20,"spa":25,"spd":25,"spe":40}
		abilities: {"0":"Schooling"}
	},
	mareanie: {
		num: -596
		species: Mareanie
		types: ["Poison","Water"]
		baseStats: {"hp":50,"atk":53,"def":62,"spa":48,"spd":48,"spe":45}
		abilities: {"0":"Merciless","1":"Limber","H":"Regenerator"}
	},
	mudbray: {
		num: -598
		species: Mudbray
		types: ["Ground"]
		baseStats: {"hp":70,"atk":100,"def":70,"spa":50,"spd":50,"spe":45}
		abilities: {"0":"Own Tempo","1":"Stamina","H":"Inner Focus"}
	},
	dewpider: {
		num: -600
		species: Dewpider
		types: ["Water","Bug"]
		baseStats: {"hp":38,"atk":40,"def":52,"spa":56,"spd":56,"spe":27}
		abilities: {"0":"Water Bubble","H":"Water Absorb"}
	},
	fomantis: {
		num: -602
		species: Fomantis
		types: ["Grass"]
		baseStats: {"hp":40,"atk":55,"def":35,"spa":43,"spd":43,"spe":35}
		abilities: {"0":"Leaf Guard","H":"Contrary"}
	},
	morelull: {
		num: -604
		species: Morelull
		types: ["Grass","Fairy"]
		baseStats: {"hp":40,"atk":35,"def":55,"spa":70,"spd":70,"spe":15}
		abilities: {"0":"Illuminate","1":"Effect Spore","H":"Rain Dish"}
	},
	salandit: {
		num: -606
		species: Salandit
		types: ["Poison","Fire"]
		baseStats: {"hp":48,"atk":44,"def":40,"spa":56,"spd":56,"spe":77}
		abilities: {"0":"Corrosion","H":"Oblivious"}
	},
	stufful: {
		num: -608
		species: Stufful
		types: ["Normal","Fighting"]
		baseStats: {"hp":70,"atk":75,"def":50,"spa":48,"spd":48,"spe":50}
		abilities: {"0":"Fluffy","1":"Klutz","H":"Cute Charm"}
	},
	bounsweet: {
		num: -610
		species: Bounsweet
		types: ["Grass"]
		baseStats: {"hp":42,"atk":30,"def":38,"spa":34,"spd":34,"spe":32}
		abilities: {"0":"Leaf Guard","1":"Oblivious","H":"Sweet Veil"}
	},
	comfey: {
		num: -613
		species: Comfey
		types: ["Fairy"]
		baseStats: {"hp":51,"atk":52,"def":90,"spa":96,"spd":96,"spe":100}
		abilities: {"0":"Flower Veil","1":"Triage","H":"Natural Cure"}
	},
	oranguru: {
		num: -614
		species: Oranguru
		types: ["Normal","Psychic"]
		baseStats: {"hp":90,"atk":60,"def":80,"spa":100,"spd":100,"spe":60}
		abilities: {"0":"Inner Focus","1":"Telepathy","H":"Symbiosis"}
	},
	passimian: {
		num: -615
		species: Passimian
		types: ["Fighting"]
		baseStats: {"hp":100,"atk":120,"def":90,"spa":50,"spd":50,"spe":80}
		abilities: {"0":"Receiver","H":"Defiant"}
	},
	wimpod: {
		num: -616
		species: Wimpod
		types: ["Bug","Water"]
		baseStats: {"hp":25,"atk":35,"def":40,"spa":25,"spd":25,"spe":80}
		abilities: {"0":"Wimp Out"}
	},
	sandygast: {
		num: -618
		species: Sandygast
		types: ["Ghost","Ground"]
		baseStats: {"hp":55,"atk":55,"def":80,"spa":58,"spd":58,"spe":15}
		abilities: {"0":"Water Compaction","H":"Sand Veil"}
	},
	pyukumuku: {
		num: -620
		species: Pyukumuku
		types: ["Water"]
		baseStats: {"hp":55,"atk":60,"def":130,"spa":80,"spd":80,"spe":5}
		abilities: {"0":"Innards Out","H":"Unaware"}
	},
	komala: {
		num: -624
		species: Komala
		types: ["Normal"]
		baseStats: {"hp":65,"atk":115,"def":65,"spa":85,"spd":85,"spe":65}
		abilities: {"0":"Comatose"}
	},
	turtonator: {
		num: -625
		species: Turtonator
		types: ["Fire","Dragon"]
		baseStats: {"hp":60,"atk":78,"def":135,"spa":88,"spd":88,"spe":36}
		abilities: {"0":"Shell Armor"}
	},
	togedemaru: {
		num: -626
		species: Togedemaru
		types: ["Electric","Steel"]
		baseStats: {"hp":65,"atk":98,"def":63,"spa":57,"spd":57,"spe":96}
		abilities: {"0":"Iron Barbs","1":"Lightning Rod","H":"Sturdy"}
	},
	mimikyu: {
		num: -627
		species: Mimikyu
		types: ["Ghost","Fairy"]
		baseStats: {"hp":55,"atk":90,"def":80,"spa":78,"spd":78,"spe":96}
		abilities: {"0":"Disguise"}
	},
	bruxish: {
		num: -628
		species: Bruxish
		types: ["Water","Psychic"]
		baseStats: {"hp":68,"atk":105,"def":70,"spa":70,"spd":70,"spe":92}
		abilities: {"0":"Dazzling","1":"Strong Jaw","H":"Wonder Skin"}
	},
	drampa: {
		num: -629
		species: Drampa
		types: ["Normal","Dragon"]
		baseStats: {"hp":78,"atk":60,"def":85,"spa":113,"spd":113,"spe":36}
		abilities: {"0":"Berserk","1":"Sap Sipper","H":"Cloud Nine"}
	},
	jangmoo: {
		num: -631
		species: Jangmo-o
		types: ["Dragon"]
		baseStats: {"hp":45,"atk":55,"def":65,"spa":45,"spd":45,"spe":45}
		abilities: {"0":"Bulletproof","1":"Soundproof","H":"Overcoat"}
	},
	grookey: {
		num: -659
		species: Grookey
		types: ["Grass"]
		baseStats: {"hp":50,"atk":65,"def":50,"spa":40,"spd":40,"spe":65}
		abilities: {"0":"Overgrow","H":"Grassy Surge"}
	},
	scorbunny: {
		num: -662
		species: Scorbunny
		types: ["Fire"]
		baseStats: {"hp":50,"atk":71,"def":40,"spa":40,"spd":40,"spe":69}
		abilities: {"0":"Blaze","H":"Libero"}
	},
	sobble: {
		num: -665
		species: Sobble
		types: ["Water"]
		baseStats: {"hp":50,"atk":40,"def":40,"spa":55,"spd":55,"spe":70}
		abilities: {"0":"Torrent","H":"Sniper"}
	},
	skwovet: {
		num: -668
		species: Skwovet
		types: ["Normal"]
		baseStats: {"hp":70,"atk":55,"def":55,"spa":35,"spd":35,"spe":25}
		abilities: {"0":"Cheek Pouch","H":"Gluttony"}
	},
	rookidee: {
		num: -670
		species: Rookidee
		types: ["Flying"]
		baseStats: {"hp":38,"atk":47,"def":35,"spa":34,"spd":34,"spe":57}
		abilities: {"0":"Keen Eye","1":"Unnerve","H":"Big Pecks"}
	},
	blipbug: {
		num: -673
		species: Blipbug
		types: ["Bug"]
		baseStats: {"hp":25,"atk":20,"def":20,"spa":35,"spd":35,"spe":45}
		abilities: {"0":"Swarm","1":"Compound Eyes","H":"Telepathy"}
	},
	nickit: {
		num: -676
		species: Nickit
		types: ["Dark"]
		baseStats: {"hp":40,"atk":28,"def":28,"spa":50,"spd":50,"spe":50}
		abilities: {"0":"Run Away","1":"Unburden","H":"Stakeout"}
	},
	gossifleur: {
		num: -678
		species: Gossifleur
		types: ["Grass"]
		baseStats: {"hp":40,"atk":40,"def":60,"spa":50,"spd":50,"spe":10}
		abilities: {"0":"Cotton Down","1":"Regenerator","H":"Effect Spore"}
	},
	wooloo: {
		num: -680
		species: Wooloo
		types: ["Normal"]
		baseStats: {"hp":42,"atk":40,"def":55,"spa":43,"spd":43,"spe":48}
		abilities: {"0":"Fluffy","1":"Run Away","H":"Bulletproof"}
	},
	chewtle: {
		num: -682
		species: Chewtle
		types: ["Water"]
		baseStats: {"hp":50,"atk":64,"def":50,"spa":38,"spd":38,"spe":44}
		abilities: {"0":"Strong Jaw","1":"Shell Armor","H":"Swift Swim"}
	},
	yamper: {
		num: -684
		species: Yamper
		types: ["Electric"]
		baseStats: {"hp":59,"atk":45,"def":50,"spa":45,"spd":45,"spe":26}
		abilities: {"0":"Ball Fetch","H":"Rattled"}
	},
	rolycoly: {
		num: -686
		species: Rolycoly
		types: ["Rock"]
		baseStats: {"hp":30,"atk":40,"def":50,"spa":45,"spd":45,"spe":30}
		abilities: {"0":"Steam Engine","1":"Heatproof","H":"Flash Fire"}
	},
	applin: {
		num: -689
		species: Applin
		types: ["Grass","Dragon"]
		baseStats: {"hp":40,"atk":40,"def":80,"spa":40,"spd":40,"spe":20}
		abilities: {"0":"Ripen","1":"Gluttony","H":"Bulletproof"}
	},
	silicobra: {
		num: -692
		species: Silicobra
		types: ["Ground"]
		baseStats: {"hp":52,"atk":57,"def":75,"spa":43,"spd":43,"spe":46}
		abilities: {"0":"Sand Spit","1":"Shed Skin","H":"Sand Veil"}
	},
	cramorant: {
		num: -694
		species: Cramorant
		types: ["Flying","Water"]
		baseStats: {"hp":70,"atk":85,"def":55,"spa":90,"spd":90,"spe":85}
		abilities: {"0":"Gulp Missile"}
	},
	arrokuda: {
		num: -695
		species: Arrokuda
		types: ["Water"]
		baseStats: {"hp":41,"atk":63,"def":40,"spa":35,"spd":35,"spe":66}
		abilities: {"0":"Swift Swim","H":"Propeller Tail"}
	},
	toxel: {
		num: -697
		species: Toxel
		types: ["Electric","Poison"]
		baseStats: {"hp":40,"atk":38,"def":35,"spa":45,"spd":45,"spe":40}
		abilities: {"0":"Rattled","1":"Static","H":"Klutz"}
	},
	sizzlipede: {
		num: -699
		species: Sizzlipede
		types: ["Fire","Bug"]
		baseStats: {"hp":50,"atk":65,"def":45,"spa":50,"spd":50,"spe":45}
		abilities: {"0":"Flash Fire","1":"White Smoke","H":"Flame Body"}
	},
	clobbopus: {
		num: -701
		species: Clobbopus
		types: ["Fighting"]
		baseStats: {"hp":50,"atk":68,"def":60,"spa":50,"spd":50,"spe":32}
		abilities: {"0":"Limber","H":"Technician"}
	},
	hatenna: {
		num: -705
		species: Hatenna
		types: ["Psychic"]
		baseStats: {"hp":42,"atk":30,"def":45,"spa":55,"spd":55,"spe":39}
		abilities: {"0":"Healer","1":"Anticipation","H":"Magic Bounce"}
	},
	milcery: {
		num: -717
		species: Milcery
		types: ["Fairy"]
		baseStats: {"hp":45,"atk":40,"def":40,"spa":56,"spd":56,"spe":34}
		abilities: {"0":"Sweet Veil","H":"Aroma Veil"}
	},
	pincurchin: {
		num: -720
		species: Pincurchin
		types: ["Electric"]
		baseStats: {"hp":48,"atk":101,"def":95,"spa":88,"spd":88,"spe":15}
		abilities: {"0":"Lightning Rod","H":"Electric Surge"}
	},
	snom: {
		num: -721
		species: Snom
		types: ["Ice","Bug"]
		baseStats: {"hp":30,"atk":25,"def":35,"spa":38,"spd":38,"spe":20}
		abilities: {"0":"Shield Dust","H":"Ice Scales"}
	},
	stonjourner: {
		num: -723
		species: Stonjourner
		types: ["Rock"]
		baseStats: {"hp":100,"atk":125,"def":135,"spa":20,"spd":20,"spe":70}
		abilities: {"0":"Power Spot"}
	},
	eiscue: {
		num: -724
		species: Eiscue
		types: ["Ice"]
		baseStats: {"hp":75,"atk":80,"def":110,"spa":78,"spd":78,"spe":50}
		abilities: {"0":"Ice Face"}
	},
	indeedee: {
		num: -725
		species: Indeedee
		types: ["Psychic","Normal"]
		baseStats: {"hp":60,"atk":65,"def":55,"spa":100,"spd":100,"spe":95}
		abilities: {"0":"Inner Focus","1":"Synchronize","H":"Psychic Surge"}
	},
	indeedeef: {
		num: -725
		species: Indeedee-F
		types: ["Psychic","Normal"]
		baseStats: {"hp":70,"atk":55,"def":65,"spa":100,"spd":100,"spe":85}
		abilities: {"0":"Own Tempo","1":"Synchronize","H":"Psychic Surge"}
	},
	morpeko: {
		num: -726
		species: Morpeko
		types: ["Electric","Dark"]
		baseStats: {"hp":58,"atk":95,"def":58,"spa":64,"spd":64,"spe":97}
		abilities: {"0":"Hunger Switch"}
	},
	cufant: {
		num: -727
		species: Cufant
		types: ["Steel"]
		baseStats: {"hp":72,"atk":80,"def":49,"spa":45,"spd":45,"spe":40}
		abilities: {"0":"Sheer Force","H":"Heavy Metal"}
	},
	duraludon: {
		num: -733
		species: Duraludon
		types: ["Steel","Dragon"]
		baseStats: {"hp":70,"atk":95,"def":115,"spa":85,"spd":85,"spe":85}
		abilities: {"0":"Light Metal","1":"Heavy Metal","H":"Stalwart"}
	},
	dreepy: {
		num: -734
		species: Dreepy
		types: ["Dragon","Ghost"]
		baseStats: {"hp":28,"atk":60,"def":30,"spa":35,"spd":35,"spe":82}
		abilities: {"0":"Clear Body","1":"Infiltrator","H":"Cursed Body"}
	},
};
