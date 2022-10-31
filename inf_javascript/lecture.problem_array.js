let animals = [
	"Aardvark",
	"Albatross",
	"Alligator",
	"Alpaca",
	"Ant",
	"Ape",
	"Armadillo",
	"Donkey",
	"Baboon",
	"Badger",
	"Barracuda",
	"Bat",
	"Bear",
	"Beaver",
	"Bee",
	"Bison",
	"Cat",
	"Caterpillar",
	"Cattle",
	"Chamois",
	"Cheetah",
	"Chicken",
	"Chimpanzee",
	"Chinchilla",
	"Chough",
	"Clam",
	"Cobra",
	"Cockroach",
	"Cod",
	"Cormorant",
	"Dugong",
	"Dunlin",
	"Eagle",
	"Echidna",
	"Eel",
	"Eland",
	"Elephant",
	"Elk",
	"Emu",
	"Falcon",
	"Ferret",
	"Finch",
	"Fish",
	"Flamingo",
	"Fly",
	"Fox",
	"Frog",
	"Gaur",
	"Gazelle",
	"Gerbil",
	"Giraffe",
	"Grasshopper",
	"Heron",
	"Herring",
	"Hippopotamus",
	"Hornet",
	"Horse",
	"Kangaroo",
	"Kingfisher",
	"Koala",
	"Kookabura",
	"Moose",
	"Narwhal",
	"Newt",
	"Nightingale",
	"Octopus",
	"Okapi",
	"Opossum",
	"Quail",
	"Quelea",
	"Quetzal",
	"Rabbit",
	"Raccoon",
	"Rail",
	"Ram",
	"Rat",
	"Raven",
	"Red deer",
	"Sandpiper",
	"Sardine",
	"Sparrow",
	"Spider",
	"Spoonbill",
	"Squid",
	"Squirrel",
	"Starling",
	"Stingray",
	"Tiger",
	"Toad",
	"Whale",
	"Wildcat",
	"Wolf",
	"Worm",
	"Wren",
	"Yak",
	"Zebra",
];
//1 어레이 마지막 아이템 "Zebra"제거하기
//pop() : 맨마지막 아이템을 뺌
animals.pop();
console.log(animals)

//주어진 어레이에 "Dog"추가하기
animals.push("Dog")
console.log(animals)

//주어진 어레이에 "Mosquito","Mouse","Mule"	추가하기
animals.push("Mosquito","Mouse","Mule")
console.log(animals)

//해당 어레이에 Human이 있는가?
console.log(animals.includes("Human"))
// 정담 없음

//해당 어레이에 Cat 이 있는가?
console.log(animals.includes("Cat"))
// 정답 있음

//'"Red deer" -> "Deer"
console.log(animals.indexOf("Red deer"))
console.log(animals[77])
animals[77] = "Deer"
console.log(animals[77])

//"Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오
console.log(animals.indexOf("Spider"))
animals.splice(81,3)
console.log(animals[81])

//Tiger 이후의  값을 제거하시오
// animals.splice(animals.indexOf("Tiger"))
console.log(animals.indexOf("Tiger"))
console.log(animals[84])
console.log(animals.indexOf("Mule"))
animals.splice(84,12)
console.log(animals)

//Baboon 부터 Bison 까지 가져와 새로운 어레이에 저장하시오
console.log(animals.indexOf("Baboon"))
console.log(animals.indexOf("Bison"))
let animalsB = animals.slice(8,16)
console.log(animalsB)
// 다른방법으로도 해보겠습니다.
let animals_B = animals.slice(animals.indexOf("Baboon"),animals.indexOf("Bison"))
console.log(animals_B)






