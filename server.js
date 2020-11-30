var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
;
var owners = [
    {
        id: 1,
        name: "Adam",
        pets: [
            {
                id: 1,
                name: "Vera",
                type: "Dog"
            },
            {
                id: 2,
                name: "Felix",
                type: "Cat"
            }
        ]
    },
    {
        id: 2,
        name: "Kamilah",
        pets: [
            {
                id: 1,
                name: "Doug",
                type: "Dog"
            }
        ]
    }
];


// GET /api/owners
app.get('/owners', (req, res) => {
    res.status(200).send(owners);
})

// GET /api/owners/:id
app.get('/owners/:id', (req, res) => {
    const id = req.params.id;
   
    let owner = owners.find((currentOwner) => {
        return currentOwner.id == id;
    })

    res.status(200).send(owner);
})

// POST /api/owners
app.post('/owners', (req, res) => {
    var newId = owners.length;
    
    owners.push({
        id: (++newId),
        name: req.body.name,          
    })
    res.status(200).send(owners);
})

// PUT /api/owners/:id
app.put('/owners/:id', (req, res) => {
const id = req.params.id;

let owner = owners.find((currentOwner) => {
    return currentOwner.id == id; 
})

owner.name = req.body.name; 
res.status(200).send(owner);

})


// DELETE /api/owners/:id
app.delete('/owners/:id', (req, res) => {
    const id = req.params.id;

    let owner = owners.find((currentOwner) => {
        return currentOwner.id === Number(id)
    });

    let ownerIndex = owners.findIndex((o) => {
        return o === owner;
    })

    if (ownerIndex > -1) {
        owners.splice(ownerIndex, 1);
    }
    res.status(200).send(owners);


})

// GET /api/owners/:id/pets
app.get('/owners/:id/pets', (req, res) => {
    const id = req.params.id;

    let owner = owners.find((currentOwner) => {
        return currentOwner.id === Number(id);
    })
    res.status(200).send(owner.pets);
})

// GET /api/owners/:id/pets/:petId
app.get('/owners/:id/pets/:petId', (req, res) => {
    const id = req.params.id;
    const petId = req.params.petId;
    
    let owner = owners.find((currentOwner) => {
        return currentOwner.id === Number(id);
    })
    
    let pet = owner.pets.find((currentPet) => {
        return currentPet.id === Number(petId);
    })
    
    res.status(200).send(pet);
})

// POST /api/owners/:id/pets
app.post('/owners/:id/pets', (req, res) => {
    const id = req.params.id;
   
    let owner = owners.find((currentOwner) => {
        return currentOwner.id == id;
    })
    
    let petId = owner.pets.length;
    
    owner.pets.push({
        id: (++petId),
        name: req.body.name,
        type: req.body.type,          
    })
    res.status(200).send(owner);
})

// PUT /api/owners/:id/pets/:petId
app.put('/owners/:id/pets/:petId', (req, res) => {
    const id = req.params.id;
    const petId = req.params.petId;

    let owner = owners.find((currentOwner) => {
        return currentOwner.id === Number(id);
    })
    
    let pet = owner.pets.find((currentPet) => {
        return currentPet.id === Number(petId);
    })

    pet.name = req.body.name;
    pet.type = req.body.type;

    res.status(200).send(pet);

})

// DELETE /api/owners/:id/pets/:petId
app.delete('/owners/:id/pets/:petId', (req, res) => {
    const id = req.params.id;
    const petId = req.params.petId;

    let owner = owners.find((currentOwner) => {
        return currentOwner.id === Number(id);
    })
    
    let pet = owner.pets.find((currentPet) => {
        return currentPet.id === Number(petId);
    })
    
    let petIndex = owner.pets.findIndex((o) => {
        return o === pet;
    })

    if (petIndex > -1) {
        owner.pets.splice(petIndex, 1);
    }
    res.status(200).send(owner);
})


app.listen(3001, function(){
    console.log('Pets API is now listening on port 3001...');
})