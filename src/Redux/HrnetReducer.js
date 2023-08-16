import { compose, createStore } from "redux";

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const initialState = {
  employees: [
    {
      firstName: "Amabel",
      lastName: "Zoephel",
      street: "75291 Chive Way",
      city: "Mont-de-Marsan",
      zipCode: "40025 CEDEX",
      birthDate: "8/23/1976",
      startDate: "8/21/2022",
      department: "Human Resources",
      state: "Aquitaine",
    },
    {
      firstName: "Celesta",
      lastName: "Tellett",
      street: "9 Bluestem Pass",
      city: "Marseille",
      zipCode: "13393 CEDEX 13",
      birthDate: "8/23/1971",
      startDate: "7/4/2023",
      department: "Human Resources",
      state: "Provence-Alpes-Côte d'Azur",
    },
    {
      firstName: "Laina",
      lastName: "Cordie",
      street: "75 Manitowish Point",
      city: "Floirac",
      zipCode: "33274 CEDEX",
      birthDate: "12/2/1992",
      startDate: "8/6/2023",
      department: "Legal",
      state: "Aquitaine",
    },
    {
      firstName: "Pen",
      lastName: "Sleeford",
      street: "74371 Summit Place",
      city: "Nanterre",
      zipCode: "92742 CEDEX",
      birthDate: "12/21/1993",
      startDate: "12/2/2022",
      department: "Legal",
      state: "Île-de-France",
    },
    {
      firstName: "Marcus",
      lastName: "Gommes",
      street: "194 Colorado Plaza",
      city: "Rennes",
      zipCode: "35047 CEDEX 9",
      birthDate: "2/14/1995",
      startDate: "2/23/2023",
      department: "Marketing",
      state: "Bretagne",
    },
    {
      firstName: "Cesar",
      lastName: "Dafforne",
      street: "477 Pawling Crossing",
      city: "Bergerac",
      zipCode: "24111 CEDEX",
      birthDate: "1/18/1960",
      startDate: "11/11/2022",
      department: "Engineering",
      state: "Aquitaine",
    },
    {
      firstName: "Ree",
      lastName: "Ivanyukov",
      street: "492 Warrior Lane",
      city: "Bobigny",
      zipCode: "93737 CEDEX 9",
      birthDate: "6/2/1975",
      startDate: "6/19/2023",
      department: "Human Resources",
      state: "Île-de-France",
    },
    {
      firstName: "Skip",
      lastName: "Ortas",
      street: "35 Russell Point",
      city: "Bobigny",
      zipCode: "93909 CEDEX 9",
      birthDate: "4/7/1968",
      startDate: "6/19/2023",
      department: "Engineering",
      state: "Île-de-France",
    },
    {
      firstName: "Salli",
      lastName: "Langcastle",
      street: "80128 Ronald Regan Center",
      city: "Limoges",
      zipCode: "87030 CEDEX 1",
      birthDate: "10/17/2002",
      startDate: "8/5/2023",
      department: "Marketing",
      state: "Limousin",
    },
    {
      firstName: "Jennilee",
      lastName: "Pilley",
      street: "21 Susan Plaza",
      city: "Villeneuve-lès-Avignon",
      zipCode: "30404 CEDEX",
      birthDate: "6/14/1993",
      startDate: "1/22/2023",
      department: "Marketing",
      state: "Languedoc-Roussillon",
    },
    {
      firstName: "Mar",
      lastName: "Puffett",
      street: "2 Morning Drive",
      city: "Rungis",
      zipCode: "94636 CEDEX 1",
      birthDate: "11/10/1964",
      startDate: "9/2/2022",
      department: "Legal",
      state: "Île-de-France",
    },
    {
      firstName: "Tasia",
      lastName: "Jeayes",
      street: "182 Cambridge Park",
      city: "Wissembourg",
      zipCode: "67165 CEDEX",
      birthDate: "8/11/1965",
      startDate: "11/26/2022",
      department: "Human Resources",
      state: "Alsace",
    },
    {
      firstName: "Pooh",
      lastName: "Pucknell",
      street: "50 Hudson Junction",
      city: "Bondy",
      zipCode: "93144 CEDEX",
      birthDate: "9/25/1992",
      startDate: "5/31/2023",
      department: "Engineering",
      state: "Île-de-France",
    },
    {
      firstName: "Darlleen",
      lastName: "Alywen",
      street: "434 Onsgard Street",
      city: "Bordeaux",
      zipCode: "33801 CEDEX",
      birthDate: "2/6/2006",
      startDate: "10/11/2022",
      department: "Legal",
      state: "Aquitaine",
    },
    {
      firstName: "Orv",
      lastName: "Noot",
      street: "0 Hintze Place",
      city: "Rennes",
      zipCode: "35022 CEDEX 2",
      birthDate: "5/29/1976",
      startDate: "12/6/2022",
      department: "Engineering",
      state: "Bretagne",
    },
    {
      firstName: "Dewey",
      lastName: "Bartczak",
      street: "67 Southridge Pass",
      city: "Caen",
      zipCode: "14040 CEDEX 4",
      birthDate: "12/18/1997",
      startDate: "9/10/2022",
      department: "Human Resources",
      state: "Basse-Normandie",
    },
    {
      firstName: "Linoel",
      lastName: "Jiggins",
      street: "02 Glacier Hill Pass",
      city: "Sarrebourg",
      zipCode: "57404 CEDEX",
      birthDate: "7/22/1995",
      startDate: "9/15/2022",
      department: "Engineering",
      state: "Lorraine",
    },
    {
      firstName: "Livy",
      lastName: "Stitson",
      street: "36 Hanson Lane",
      city: "Sartrouville",
      zipCode: "78504 CEDEX",
      birthDate: "11/20/1971",
      startDate: "1/11/2023",
      department: "Sales",
      state: "Île-de-France",
    },
    {
      firstName: "Merilyn",
      lastName: "Stuck",
      street: "064 Fair Oaks Pass",
      city: "Grenoble",
      zipCode: "38014 CEDEX 1",
      birthDate: "7/28/1984",
      startDate: "4/15/2023",
      department: "Marketing",
      state: "Rhône-Alpes",
    },
    {
      firstName: "Tracy",
      lastName: "Poytres",
      street: "16 American Way",
      city: "Aix-en-Provence",
      zipCode: "13858 CEDEX 3",
      birthDate: "12/6/1978",
      startDate: "5/23/2023",
      department: "Marketing",
      state: "Provence-Alpes-Côte d'Azur",
    },
    {
      firstName: "Roseanne",
      lastName: "Boodle",
      street: "9065 Dahle Junction",
      city: "Vienne",
      zipCode: "38219 CEDEX",
      birthDate: "11/25/2000",
      startDate: "3/13/2023",
      department: "Human Resources",
      state: "Rhône-Alpes",
    },
    {
      firstName: "Dottie",
      lastName: "Chapleo",
      street: "40 Corry Park",
      city: "Saint-Lô",
      zipCode: "50009 CEDEX",
      birthDate: "7/8/1974",
      startDate: "12/11/2022",
      department: "Sales",
      state: "Basse-Normandie",
    },
    {
      firstName: "Madlin",
      lastName: "Beautyman",
      street: "2303 Kingsford Avenue",
      city: "Paris 07",
      zipCode: "75321 CEDEX 07",
      birthDate: "7/19/1998",
      startDate: "12/1/2022",
      department: "Legal",
      state: "Île-de-France",
    },
    {
      firstName: "Myrle",
      lastName: "Frawley",
      street: "2832 Warbler Court",
      city: "Laon",
      zipCode: "02004 CEDEX",
      birthDate: "4/4/1988",
      startDate: "3/3/2023",
      department: "Sales",
      state: "Picardie",
    },
    {
      firstName: "Powell",
      lastName: "Flintuff",
      street: "6 Steensland Street",
      city: "Lens",
      zipCode: "62335 CEDEX",
      birthDate: "4/23/2010",
      startDate: "3/8/2023",
      department: "Human Resources",
      state: "Nord-Pas-de-Calais",
    },
    {
      firstName: "Fredericka",
      lastName: "Yankin",
      street: "5 Fulton Pass",
      city: "Marseille",
      zipCode: "13907 CEDEX 20",
      birthDate: "1/15/1969",
      startDate: "11/2/2022",
      department: "Human Resources",
      state: "Provence-Alpes-Côte d'Azur",
    },
    {
      firstName: "Vonni",
      lastName: "Crutchfield",
      street: "277 Huxley Circle",
      city: "Bourg-en-Bresse",
      zipCode: "01069 CEDEX 9",
      birthDate: "1/13/1991",
      startDate: "7/2/2023",
      department: "Legal",
      state: "Rhône-Alpes",
    },
    {
      firstName: "Lutero",
      lastName: "Almond",
      street: "09 Valley Edge Drive",
      city: "Marne-la-Vallée",
      zipCode: "77453 CEDEX 2",
      birthDate: "2/10/1965",
      startDate: "10/13/2022",
      department: "Legal",
      state: "Île-de-France",
    },
    {
      firstName: "Duane",
      lastName: "Alleyne",
      street: "1 Nova Way",
      city: "Croissy-sur-Seine",
      zipCode: "78294 CEDEX",
      birthDate: "9/21/1986",
      startDate: "12/2/2022",
      department: "Engineering",
      state: "Île-de-France",
    },
    {
      firstName: "Chery",
      lastName: "Tomaszkiewicz",
      street: "10544 Maple Lane",
      city: "Brive-la-Gaillarde",
      zipCode: "19117 CEDEX",
      birthDate: "5/31/2002",
      startDate: "11/3/2022",
      department: "Sales",
      state: "Limousin",
    },
    {
      firstName: "Darbee",
      lastName: "Rysdale",
      street: "79608 Heffernan Alley",
      city: "Le Mans",
      zipCode: "72015 CEDEX 2",
      birthDate: "1/26/2007",
      startDate: "11/26/2022",
      department: "Marketing",
      state: "Pays de la Loire",
    },
    {
      firstName: "Base",
      lastName: "Pinchon",
      street: "1161 Havey Circle",
      city: "Marignane",
      zipCode: "13729 CEDEX",
      birthDate: "8/14/1974",
      startDate: "5/17/2023",
      department: "Legal",
      state: "Provence-Alpes-Côte d'Azur",
    },
    {
      firstName: "Franny",
      lastName: "Care",
      street: "82 Vera Crossing",
      city: "Saint-Marcellin",
      zipCode: "38164 CEDEX",
      birthDate: "1/11/2008",
      startDate: "2/16/2023",
      department: "Human Resources",
      state: "Rhône-Alpes",
    },
    {
      firstName: "Alanson",
      lastName: "Segebrecht",
      street: "1 Columbus Pass",
      city: "Gif-sur-Yvette",
      zipCode: "91199 CEDEX",
      birthDate: "8/7/1965",
      startDate: "6/23/2023",
      department: "Human Resources",
      state: "Île-de-France",
    },
    {
      firstName: "Ali",
      lastName: "Lafflina",
      street: "993 Iowa Junction",
      city: "Metz",
      zipCode: "57032 CEDEX 01",
      birthDate: "6/3/2001",
      startDate: "2/28/2023",
      department: "Sales",
      state: "Lorraine",
    },
    {
      firstName: "Franz",
      lastName: "D'Abbot-Doyle",
      street: "481 Merchant Plaza",
      city: "Rennes",
      zipCode: "35009 CEDEX",
      birthDate: "8/8/1967",
      startDate: "12/15/2022",
      department: "Human Resources",
      state: "Bretagne",
    },
    {
      firstName: "Owen",
      lastName: "Vanyushkin",
      street: "8 Westport Trail",
      city: "Tourcoing",
      zipCode: "59339 CEDEX",
      birthDate: "7/13/2005",
      startDate: "12/28/2022",
      department: "Sales",
      state: "Nord-Pas-de-Calais",
    },
    {
      firstName: "Ophelia",
      lastName: "Vanyushin",
      street: "83 Brentwood Way",
      city: "Évreux",
      zipCode: "27095 CEDEX 9",
      birthDate: "9/19/1966",
      startDate: "5/6/2023",
      department: "Sales",
      state: "Haute-Normandie",
    },
    {
      firstName: "Matthaeus",
      lastName: "Stewartson",
      street: "0096 Thierer Trail",
      city: "Baume-les-Dames",
      zipCode: "25117 CEDEX",
      birthDate: "1/30/1973",
      startDate: "1/7/2023",
      department: "Sales",
      state: "Franche-Comté",
    },
    {
      firstName: "Naoma",
      lastName: "Heater",
      street: "98 Toban Pass",
      city: "Mâcon",
      zipCode: "71009 CEDEX",
      birthDate: "2/12/1974",
      startDate: "1/20/2023",
      department: "Sales",
      state: "Bourgogne",
    },
    {
      firstName: "Latisha",
      lastName: "O'Neal",
      street: "79546 Elgar Terrace",
      city: "Perpignan",
      zipCode: "66050 CEDEX",
      birthDate: "4/18/2009",
      startDate: "7/2/2023",
      department: "Marketing",
      state: "Languedoc-Roussillon",
    },
    {
      firstName: "Brinna",
      lastName: "Leban",
      street: "785 Del Mar Avenue",
      city: "Digne-les-Bains",
      zipCode: "04004 CEDEX",
      birthDate: "11/4/2009",
      startDate: "12/28/2022",
      department: "Legal",
      state: "Provence-Alpes-Côte d'Azur",
    },
    {
      firstName: "Talbot",
      lastName: "Stive",
      street: "996 Waywood Way",
      city: "Béziers",
      zipCode: "34513 CEDEX",
      birthDate: "6/6/1964",
      startDate: "7/22/2023",
      department: "Marketing",
      state: "Languedoc-Roussillon",
    },
    {
      firstName: "Shelley",
      lastName: "Ellyatt",
      street: "0 Portage Pass",
      city: "Grenoble",
      zipCode: "38066 CEDEX 2",
      birthDate: "8/19/1965",
      startDate: "8/6/2023",
      department: "Marketing",
      state: "Rhône-Alpes",
    },
    {
      firstName: "Mordy",
      lastName: "Rosina",
      street: "4836 Mesta Avenue",
      city: "Bordeaux",
      zipCode: "33911 CEDEX 9",
      birthDate: "8/23/1975",
      startDate: "7/14/2023",
      department: "Marketing",
      state: "Aquitaine",
    },
    {
      firstName: "Corny",
      lastName: "Atthow",
      street: "74 Bluejay Way",
      city: "Courtaboeuf",
      zipCode: "91948 CEDEX",
      birthDate: "8/11/1990",
      startDate: "5/29/2023",
      department: "Human Resources",
      state: "Île-de-France",
    },
    {
      firstName: "Lennard",
      lastName: "Hyett",
      street: "932 Dahle Avenue",
      city: "Évry",
      zipCode: "91982 CEDEX 9",
      birthDate: "11/30/1961",
      startDate: "4/13/2023",
      department: "Human Resources",
      state: "Île-de-France",
    },
    {
      firstName: "Farlay",
      lastName: "Coyett",
      street: "9443 Corscot Court",
      city: "La Rochelle",
      zipCode: "17073 CEDEX 9",
      birthDate: "8/18/1962",
      startDate: "8/21/2022",
      department: "Legal",
      state: "Poitou-Charentes",
    },
    {
      firstName: "Buck",
      lastName: "Foli",
      street: "5015 Clove Trail",
      city: "Rennes",
      zipCode: "35087 CEDEX",
      birthDate: "12/30/1978",
      startDate: "7/7/2023",
      department: "Engineering",
      state: "Bretagne",
    },
    {
      firstName: "Dolores",
      lastName: "Terren",
      street: "1757 Jenifer Crossing",
      city: "Ajaccio",
      zipCode: "20174 CEDEX 1",
      birthDate: "8/4/1969",
      startDate: "9/10/2022",
      department: "Engineering",
      state: "Corse",
    },
    {
      firstName: "Towny",
      lastName: "Minards",
      street: "87 Maywood Drive",
      city: "Le Cannet",
      zipCode: "06116 CEDEX",
      birthDate: "5/23/2009",
      startDate: "9/5/2022",
      department: "Sales",
      state: "Provence-Alpes-Côte d'Azur",
    },
    {
      firstName: "Blakeley",
      lastName: "Blondelle",
      street: "46411 Butternut Parkway",
      city: "Lyon",
      zipCode: "69286 CEDEX 02",
      birthDate: "12/22/2004",
      startDate: "10/26/2022",
      department: "Sales",
      state: "Rhône-Alpes",
    },
    {
      firstName: "Justen",
      lastName: "Ephgrave",
      street: "1877 Norway Maple Terrace",
      city: "La Garenne-Colombes",
      zipCode: "92959 CEDEX",
      birthDate: "3/24/1974",
      startDate: "12/14/2022",
      department: "Human Resources",
      state: "Île-de-France",
    },
    {
      firstName: "Cedric",
      lastName: "Walklett",
      street: "860 Hoepker Point",
      city: "Gennevilliers",
      zipCode: "92622 CEDEX",
      birthDate: "9/6/2003",
      startDate: "6/30/2023",
      department: "Sales",
      state: "Île-de-France",
    },
    {
      firstName: "Valentine",
      lastName: "Plumer",
      street: "927 Pankratz Hill",
      city: "Cergy-Pontoise",
      zipCode: "95072 CEDEX 1",
      birthDate: "7/29/1971",
      startDate: "3/2/2023",
      department: "Engineering",
      state: "Île-de-France",
    },
    {
      firstName: "Lyell",
      lastName: "Crownshaw",
      street: "37 Superior Avenue",
      city: "Bordeaux",
      zipCode: "33100",
      birthDate: "12/22/1992",
      startDate: "3/5/2023",
      department: "Marketing",
      state: "Aquitaine",
    },
    {
      firstName: "Nichole",
      lastName: "Dougan",
      street: "257 Arizona Road",
      city: "Lille",
      zipCode: "59007 CEDEX",
      birthDate: "8/17/1989",
      startDate: "5/16/2023",
      department: "Marketing",
      state: "Nord-Pas-de-Calais",
    },
    {
      firstName: "Trista",
      lastName: "Arnaud",
      street: "3733 Caliangt Junction",
      city: "Sophia Antipolis",
      zipCode: "06905 CEDEX",
      birthDate: "2/5/1965",
      startDate: "11/29/2022",
      department: "Marketing",
      state: "Provence-Alpes-Côte d'Azur",
    },
    {
      firstName: "Mile",
      lastName: "Runnalls",
      street: "089 Gale Hill",
      city: "Meaux",
      zipCode: "77109 CEDEX",
      birthDate: "4/2/1990",
      startDate: "9/1/2022",
      department: "Legal",
      state: "Île-de-France",
    },
    {
      firstName: "Lissa",
      lastName: "Duncombe",
      street: "925 Lakewood Gardens Plaza",
      city: "Massy",
      zipCode: "91309 CEDEX",
      birthDate: "8/10/1990",
      startDate: "8/19/2022",
      department: "Marketing",
      state: "Île-de-France",
    },
    {
      firstName: "Kerri",
      lastName: "Glazier",
      street: "1 Fremont Road",
      city: "Wasquehal",
      zipCode: "59449 CEDEX",
      birthDate: "10/12/1961",
      startDate: "3/17/2023",
      department: "Marketing",
      state: "Nord-Pas-de-Calais",
    },
    {
      firstName: "Arnie",
      lastName: "Corrigan",
      street: "1 Meadow Ridge Way",
      city: "Marseille",
      zipCode: "13232 CEDEX 01",
      birthDate: "2/9/1972",
      startDate: "9/14/2022",
      department: "Engineering",
      state: "Provence-Alpes-Côte d'Azur",
    },
    {
      firstName: "Bunni",
      lastName: "Pape",
      street: "21340 Summit Terrace",
      city: "Lens",
      zipCode: "62304 CEDEX",
      birthDate: "6/21/1961",
      startDate: "1/6/2023",
      department: "Human Resources",
      state: "Nord-Pas-de-Calais",
    },
    {
      firstName: "Michail",
      lastName: "Bogace",
      street: "201 Carberry Center",
      city: "Nemours",
      zipCode: "77794 CEDEX",
      birthDate: "6/29/1961",
      startDate: "7/23/2023",
      department: "Human Resources",
      state: "Île-de-France",
    },
    {
      firstName: "Vonny",
      lastName: "Fairchild",
      street: "288 Milwaukee Circle",
      city: "Annonay",
      zipCode: "07104 CEDEX",
      birthDate: "7/15/1968",
      startDate: "5/11/2023",
      department: "Sales",
      state: "Rhône-Alpes",
    },
    {
      firstName: "Craggie",
      lastName: "Wiggin",
      street: "715 Hermina Place",
      city: "Noisy-le-Grand",
      zipCode: "93164 CEDEX",
      birthDate: "8/12/1986",
      startDate: "9/15/2022",
      department: "Sales",
      state: "Île-de-France",
    },
    {
      firstName: "Manya",
      lastName: "Slimm",
      street: "7135 Lukken Center",
      city: "Illkirch-Graffenstaden",
      zipCode: "67404 CEDEX",
      birthDate: "6/10/1995",
      startDate: "3/26/2023",
      department: "Marketing",
      state: "Alsace",
    },
    {
      firstName: "Jaquith",
      lastName: "Bonnaire",
      street: "8794 Clyde Gallagher Hill",
      city: "Pau",
      zipCode: "64004 CEDEX",
      birthDate: "5/16/1977",
      startDate: "3/28/2023",
      department: "Human Resources",
      state: "Aquitaine",
    },
    {
      firstName: "Camila",
      lastName: "Pilkinton",
      street: "9207 Union Lane",
      city: "Digne-les-Bains",
      zipCode: "04004 CEDEX",
      birthDate: "4/27/1971",
      startDate: "8/27/2022",
      department: "Engineering",
      state: "Provence-Alpes-Côte d'Azur",
    },
    {
      firstName: "Zak",
      lastName: "Bowmer",
      street: "1 Graedel Terrace",
      city: "Rouen",
      zipCode: "76926 CEDEX 9",
      birthDate: "1/15/1988",
      startDate: "3/12/2023",
      department: "Human Resources",
      state: "Haute-Normandie",
    },
    {
      firstName: "Carine",
      lastName: "Smallthwaite",
      street: "513 Reinke Plaza",
      city: "Lille",
      zipCode: "59034 CEDEX",
      birthDate: "5/4/2003",
      startDate: "10/25/2022",
      department: "Engineering",
      state: "Nord-Pas-de-Calais",
    },
    {
      firstName: "Reginald",
      lastName: "Alison",
      street: "5042 Buhler Street",
      city: "Sélestat",
      zipCode: "67609 CEDEX",
      birthDate: "12/18/1992",
      startDate: "2/14/2023",
      department: "Sales",
      state: "Alsace",
    },
    {
      firstName: "Nealy",
      lastName: "Harling",
      street: "12 Village Green Hill",
      city: "Lyon",
      zipCode: "69367 CEDEX 07",
      birthDate: "11/26/2003",
      startDate: "5/1/2023",
      department: "Sales",
      state: "Rhône-Alpes",
    },
    {
      firstName: "Raeann",
      lastName: "Baudacci",
      street: "56134 Barnett Alley",
      city: "Annecy-le-Vieux",
      zipCode: "74944 CEDEX",
      birthDate: "11/29/1962",
      startDate: "5/17/2023",
      department: "Sales",
      state: "Rhône-Alpes",
    },
    {
      firstName: "Steffi",
      lastName: "Applewhite",
      street: "0364 Barnett Park",
      city: "La Rochelle",
      zipCode: "17014 CEDEX 1",
      birthDate: "12/18/2009",
      startDate: "11/16/2022",
      department: "Engineering",
      state: "Poitou-Charentes",
    },
    {
      firstName: "Chastity",
      lastName: "Hazael",
      street: "63 Northwestern Park",
      city: "Bobigny",
      zipCode: "93909 CEDEX 9",
      birthDate: "11/16/1999",
      startDate: "1/6/2023",
      department: "Marketing",
      state: "Île-de-France",
    },
    {
      firstName: "Almira",
      lastName: "Banck",
      street: "56 Harper Pass",
      city: "Saint-Quentin",
      zipCode: "02104 CEDEX",
      birthDate: "7/2/1962",
      startDate: "9/2/2022",
      department: "Sales",
      state: "Picardie",
    },
    {
      firstName: "Harli",
      lastName: "Chennells",
      street: "568 David Avenue",
      city: "Marseille",
      zipCode: "13348 CEDEX 20",
      birthDate: "6/8/1962",
      startDate: "11/27/2022",
      department: "Marketing",
      state: "Provence-Alpes-Côte d'Azur",
    },
    {
      firstName: "Land",
      lastName: "Larrad",
      street: "0 Mcguire Crossing",
      city: "Toulon",
      zipCode: "83060 CEDEX",
      birthDate: "12/8/1971",
      startDate: "1/27/2023",
      department: "Human Resources",
      state: "Provence-Alpes-Côte d'Azur",
    },
    {
      firstName: "Eddi",
      lastName: "Pollie",
      street: "707 Holy Cross Plaza",
      city: "Bourg-en-Bresse",
      zipCode: "01009 CEDEX",
      birthDate: "4/22/1998",
      startDate: "11/4/2022",
      department: "Sales",
      state: "Rhône-Alpes",
    },
    {
      firstName: "Nancey",
      lastName: "Garfit",
      street: "22 Banding Road",
      city: "Cesson-Sévigné",
      zipCode: "35513 CEDEX",
      birthDate: "9/29/1974",
      startDate: "11/6/2022",
      department: "Engineering",
      state: "Bretagne",
    },
    {
      firstName: "Burke",
      lastName: "Mattioni",
      street: "87099 Twin Pines Hill",
      city: "Annecy-le-Vieux",
      zipCode: "74944 CEDEX",
      birthDate: "3/3/1983",
      startDate: "10/12/2022",
      department: "Legal",
      state: "Rhône-Alpes",
    },
    {
      firstName: "Avrom",
      lastName: "Hallum",
      street: "904 Redwing Street",
      city: "Levallois-Perret",
      zipCode: "92592 CEDEX",
      birthDate: "2/11/1994",
      startDate: "5/20/2023",
      department: "Human Resources",
      state: "Île-de-France",
    },
    {
      firstName: "Godwin",
      lastName: "Mockes",
      street: "250 Quincy Place",
      city: "Romans-sur-Isère",
      zipCode: "26109 CEDEX",
      birthDate: "3/31/1998",
      startDate: "1/21/2023",
      department: "Marketing",
      state: "Rhône-Alpes",
    },
    {
      firstName: "Arlen",
      lastName: "Mylchreest",
      street: "9707 Moulton Plaza",
      city: "Rennes",
      zipCode: "35102 CEDEX 3",
      birthDate: "11/8/1969",
      startDate: "6/14/2023",
      department: "Sales",
      state: "Bretagne",
    },
    {
      firstName: "Gayleen",
      lastName: "Ivel",
      street: "67 Hanover Hill",
      city: "Massy",
      zipCode: "91881 CEDEX",
      birthDate: "10/4/2006",
      startDate: "1/7/2023",
      department: "Engineering",
      state: "Île-de-France",
    },
    {
      firstName: "Frederich",
      lastName: "Deacon",
      street: "46 Forster Alley",
      city: "Reims",
      zipCode: "51571 CEDEX 2",
      birthDate: "10/13/1990",
      startDate: "2/12/2023",
      department: "Engineering",
      state: "Champagne-Ardenne",
    },
    {
      firstName: "Mirilla",
      lastName: "Strangward",
      street: "36648 Acker Court",
      city: "Béthune",
      zipCode: "62411 CEDEX",
      birthDate: "1/24/1994",
      startDate: "11/24/2022",
      department: "Legal",
      state: "Nord-Pas-de-Calais",
    },
    {
      firstName: "Sigvard",
      lastName: "Fransemai",
      street: "56830 Pierstorff Lane",
      city: "Rungis",
      zipCode: "94598 CEDEX 2",
      birthDate: "6/17/1999",
      startDate: "1/17/2023",
      department: "Human Resources",
      state: "Île-de-France",
    },
    {
      firstName: "Abbe",
      lastName: "Bartolacci",
      street: "26 Clyde Gallagher Way",
      city: "Niort",
      zipCode: "79004 CEDEX",
      birthDate: "4/19/1973",
      startDate: "3/31/2023",
      department: "Sales",
      state: "Poitou-Charentes",
    },
    {
      firstName: "Caron",
      lastName: "Patey",
      street: "0819 Manley Point",
      city: "Saint-Égrève",
      zipCode: "38524 CEDEX",
      birthDate: "2/25/1971",
      startDate: "5/27/2023",
      department: "Sales",
      state: "Rhône-Alpes",
    },
    {
      firstName: "Katina",
      lastName: "Kimm",
      street: "2 Talmadge Park",
      city: "Aulnay-sous-Bois",
      zipCode: "93616 CEDEX",
      birthDate: "5/24/1980",
      startDate: "7/20/2023",
      department: "Engineering",
      state: "Île-de-France",
    },
    {
      firstName: "Emogene",
      lastName: "Hitscher",
      street: "1 Scoville Crossing",
      city: "Nice",
      zipCode: "06281 CEDEX 3",
      birthDate: "3/5/1962",
      startDate: "7/6/2023",
      department: "Engineering",
      state: "Provence-Alpes-Côte d'Azur",
    },
    {
      firstName: "Janifer",
      lastName: "Rhodus",
      street: "9991 Harbort Place",
      city: "La Rochelle",
      zipCode: "17029 CEDEX 1",
      birthDate: "12/29/1992",
      startDate: "10/1/2022",
      department: "Sales",
      state: "Poitou-Charentes",
    },
    {
      firstName: "Dianne",
      lastName: "Jillins",
      street: "94 Sheridan Park",
      city: "Douarnenez",
      zipCode: "29174 CEDEX",
      birthDate: "2/2/1993",
      startDate: "3/27/2023",
      department: "Marketing",
      state: "Bretagne",
    },
    {
      firstName: "Leanor",
      lastName: "Hampson",
      street: "95449 Loomis Court",
      city: "Morez",
      zipCode: "39409 CEDEX",
      birthDate: "5/26/2003",
      startDate: "5/5/2023",
      department: "Marketing",
      state: "Franche-Comté",
    },
    {
      firstName: "Nickolaus",
      lastName: "Deluca",
      street: "5 Pepper Wood Way",
      city: "Gap",
      zipCode: "05004 CEDEX",
      birthDate: "1/25/1967",
      startDate: "5/2/2023",
      department: "Marketing",
      state: "Provence-Alpes-Côte d'Azur",
    },
    {
      firstName: "Joya",
      lastName: "Goodere",
      street: "6 Spaight Street",
      city: "Cahors",
      zipCode: "46004 CEDEX 9",
      birthDate: "3/16/1976",
      startDate: "6/19/2023",
      department: "Sales",
      state: "Midi-Pyrénées",
    },
    {
      firstName: "Emeline",
      lastName: "Winfrey",
      street: "2 La Follette Way",
      city: "Clermont-Ferrand",
      zipCode: "63964 CEDEX 9",
      birthDate: "6/15/2005",
      startDate: "2/12/2023",
      department: "Sales",
      state: "Auvergne",
    },
    {
      firstName: "Idell",
      lastName: "Pigrome",
      street: "0 Crownhardt Pass",
      city: "Cergy-Pontoise",
      zipCode: "95061 CEDEX 1",
      birthDate: "11/1/1998",
      startDate: "11/17/2022",
      department: "Sales",
      state: "Île-de-France",
    },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "AJOUTER_EMPLOYEE":
      return { ...state, employees: [...state.employees, action.employee] };
    default:
      return state;
  }
}

export const store = createStore(reducer, compose(ReactReduxDevTools));
