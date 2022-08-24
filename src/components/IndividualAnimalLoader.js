
import axios from 'axios';

    



export default { 
 
    
    data() { 
        return { 
            length : {},
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

            let CurrentURL = getLocation(window.location.href).pathname;
            let neededpart = CurrentURL.split("/").pop()
            let API = ("http://127.0.0.1:8000/animals/get/" + neededpart);

            await axios.get(API)
            .then((response) => { 
                this.jsonData = JSON.parse(response.data.replaceAll('&quot;','"').replaceAll('<body>','').replaceAll('</body>',''));
                for (let i = 0; i < 1; i++) {
                    console.log(this.jsonData)
                    this.name = this.jsonData.name;
                    this.class = this.jsonData.class;
                    this.conservation_Status = this.jsonData.conservation_status;
                    this.latin_Name = this.jsonData.latin_name;

                    let v = document.getElementById('AnimalLocation');
                    v.insertAdjacentHTML('beforeBegin',  `<td> Name:${this.name}</td> `);
                    v.insertAdjacentHTML('beforeBegin',  `<td> Class:${this.class}</td> `);
                    v.insertAdjacentHTML('beforeBegin',  `<td> Conservation Status:${this.conservation_Status}</td> `);
                    v.insertAdjacentHTML('beforeBegin',  `<td> Latin Name:${this.latin_Name}</td> `);
                }
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