
import axios from 'axios';

    



export default { 
 
    
    data() { 
        return { 
            jsonData : {},
            name : "",
            class : "",
            conservation_Status: "",
            latin_Name: "",
        
        }
    },
    methods : { 
        
        async fetchApi(){ 
            let getLocation = function(href) {
                let url = document.createElement("a");
                url.href = href;
                return url;
            };

            let neededPart = getLocation(window.location.href).pathname.split("/").pop()
            let API = ("http://127.0.0.1:8000/animals/get/" + neededPart);

            await axios.get(API)
            .then((response) => { 
                    this.jsonData = JSON.parse(response.data.replaceAll('&quot;','"').replaceAll('<body>','').replaceAll('</body>',''));

                    let DataPlacement = document.getElementById('AnimalLocation');
                    DataPlacement.insertAdjacentHTML('beforeBegin',  `<td> Name:${this.name = this.jsonData.name}</td> `);
                    DataPlacement.insertAdjacentHTML('beforeBegin',  `<td> Class:${this.class = this.jsonData.class}</td> `);
                    DataPlacement.insertAdjacentHTML('beforeBegin',  `<td> Conservation Status:${this.conservation_Status = this.jsonData.conservation_status}</td> `);
                    DataPlacement.insertAdjacentHTML('beforeBegin',  `<td> Latin Name:${this.latin_Name = this.jsonData.latin_name}</td> `);
        })
        .catch((error)=>{
            console.log(error)
        })
        
        }
    },

    mounted() { 
        this.fetchApi()
    },

  }