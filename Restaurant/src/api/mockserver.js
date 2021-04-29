import { createServer, Model } from 'miragejs';



const data= [
  {
    "menuNumber": 1,
    "name": "Simple Pizza",
    "size": ["children", "adult", "large", "extra large"],
    "topic":[
      "extra cheese",
      "extra bacon",
      "extra sweetcorn",
      "side vegetable bowl"
       ],
    "drinks": [ "Cola", "Fanta", "Water"],
    "rate": 7.3,
    "price":1000
  },
  {
    "menuNumber": 2,
    "name": "Extra Pizza",
    "size": ["children", "adult", "large", "extra large"],
    "topic":[
      "extra cheese",
      "extra bacon",
      "extra sweetcorn",
      "side vegetable bowl",
       ],
    "drinks": [ "Cola", "Fanta", "Water"],
    "rate": 8.3,
    "price":1200
  },
  {
    "menuNumber": 3,
    "name": "Mamma Best Pizza",
    "size": ["children", "adult", "large", "extra large"],
    "topic":[
      "extra cheese",
      "extra bacon",
      "extra sweetcorn",
      " extra pinapple",
      "side vegetable bowl"
       ],
    "drinks": [ "Cola", "Fanta", "Water"],
    "rate": 6.9,
    "price":1400
  },
  {
    "menuNumber": 4,
    "name": "Mexico Pizza",
    "size": ["children", "adult", "large", "extra large"],
    "topic":[
      "extra cheese",
      "extra bacon",
      "extra sweetcorn",
      "extra hot pepper",
      "side vegetable bowl"
       ],
    "drinks": [ "Cola", "Fanta", "Water"],
    "rate": 9.9,
    "price":1300
  },
  {
    "menuNumber": 5,
    "name": "Meat Pizza",
    "size": ["children", "adult", "large", "extra large"],
    "topic":[
      "extra cheese",
      "extra bacon",
      "extra pork",
      "extra beef",
      "side vegetable bowl"
       ],
    "drinks": [ "Cola", "Fanta", "Water"],
    "rate": 8.8,
    "price":1600
  },
  {
    "menuNumber": 6,
    "name": "Vegi Pizza",
    "size": ["children", "adult", "large", "extra large"],
    "topic":[
      "extra cheese",
      "extra mushroom",
      "extra sweetcorn",
      "extra modzarella",
      "side vegetable bowl"
       ],
    "drinks": [ "Cola", "Fanta", "Water", "Spring Water"],
    "rate": 8.5,
    "price":1500
  },
]

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,
    models: {
      client: Model,
    },
    seeds(server) { },
    routes() {
      this.namespace = '/api/';        
      this.timing = 2000

      this.get('data', (schema, request) => {               // /api/ + movies url-rol kell fetchelni
      
        return data
      });

  this.get('filterData', (schema, request) => {                           // api/clients?search=[keresendo szoveg]&nev=otto
        const search = request.queryParams.search
        const clientName= request.queryParams.nev   // ===otto
        return data.filter(client => client.name.includes(search))
      });



this.post('/save', (schema, request) => {                                 // POST method to api/pets
        let { name, isVaccinated } = JSON.parse(request.requestBody);
        data.forEach(c => {
          c.pets.forEach(p => {
            if (p.name === name) p.isVaccinated = isVaccinated
          })
        })
        return { success: true }
      });

      
    },
  });
  return server;
}
