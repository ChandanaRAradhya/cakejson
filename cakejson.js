function  resturant() {
        var fooditem = [{"name":"Open this select menu"},{
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "ppu": 0.55,
        "batters": {
            "batter": [{
                    "id": "1001",
                    "type": "Regular"
                },
                {
                    "id": "1002",
                    "type": "Chocolate"
                },
                {
                    "id": "1003",
                    "type": "Blueberry"
                },
                {
                    "id": "1004",
                    "type": "Devil's Food"
                }
            ]
        },
        "topping": [{
                "id": "5001",
                "type": "None"
            },
            {
                "id": "5002",
                "type": "Glazed"
            },
            {
                "id": "5005",
                "type": "Sugar"
            },
            {
                "id": "5007",
                "type": "Powdered Sugar"
            },
            {
                "id": "5006",
                "type": "Chocolate with Sprinkles"
            },
            {
                "id": "5003",
                "type": "Chocolate"
            },
            {
                "id": "5004",
                "type": "Maple"
            }
        ]
       },
        {
        "id": "0002",
        "type": "donut",
        "name": "Raised",
        "ppu": 0.5558,
        "batters": {
            "batter": [{
                "id": "1001",
                "type": "Regular"
            }]
        },
        "topping": [{
                "id": "5001",
                "type": "None"
            },
            {
                "id": "5002",
                "type": "Glazed"
            },
            {
                "id": "5005",
                "type": "Sugar"
            },
            {
                "id": "5003",
                "type": "Chocolate"
            },
            {
                "id": "5004",
                "type": "Maple"
            }
        ]
    }, {
        "id": "0003",
        "type": "donut",
        "name": "Old Fashioned",
        "ppu": 0.55,
        "batters": {
            "batter": [{
                    "id": "1001",
                    "type": "Regular"
                },
                {
                    "id": "1002",
                    "type": "Chocolate"
                }
            ]
        },
        "topping": [{
                "id": "5001",
                "type": "None"
            },
            {
                "id": "5002",
                "type": "Glazed"
            },
            {
                "id": "5003",
                "type": "Chocolate"
            },
            {
                "id": "5004",
                "type": "Maple"
            }
        ]
    }
    ]
        var option = '';
        var batters = '';
        var toppoings = '';
        var len = fooditem.length;
        var selection = document.getElementById('fooditems');
        var name = document.getElementById('name');
        var ppu = document.getElementById('ppu');
        var batter= document.getElementById('Batters');
        var topping = document.getElementById('toppings');
         // var selected =document.getElementById('fooditems').value;
       for(var i =0 ;i<len ; i++)
       {
         option +=  '<option value="'+ fooditem[i].name + '">' + fooditem[i].name + '</option>';
      
       }      
       document.getElementById('fooditems').innerHTML = option;
       
       selection.addEventListener("change", function() {
          alert(selection.value);
          for(var j =0 ;j<len ; j++){
            if(selection.value == fooditem[j].name){
               name.value = fooditem[j].name;
               ppu.value = fooditem[j].ppu;
               batleng = fooditem[j].batters.batter.length
                for (var k =0; k<batleng; k++){
                    Batters +=  '<option value="'+ fooditem[j].batters.batter[k].type + '">' + fooditem[j].batters.batter[k].type + '</option>';
                }
                batter.innerHTML = Batters;
                topleng = fooditem[j].topping.length
                  for(var l =0 ; l<topleng; l++){
                     toppoings +=  '<option value="'+ fooditem[j].topping[l].type + '">' + fooditem[j].topping[l].type + '</option>';
                  }
                  console.log(toppoings)
                  topping.innerHTML = toppoings

             }

            }

        });
         
      }
     window.onload = resturant();
        




  // selection.addEventListener("change", function() {
  //          console.log(selected)
  //        for(var j = 0; j<len ; j++){
  //           if(selected = fooditem[j].name){
  //           }
  //        }
  //       });  