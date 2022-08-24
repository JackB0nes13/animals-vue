
import axios from 'axios';

    



export default { 
 
    
    data() { 
        return { 
            length : {},
            animalData : {},
            JsonData : {},
        
        }
    },
    methods : { 
     
        

        async fetchApi(){ 

            let API = (`http://127.0.0.1:8000`);
            console.log("here1");
            await axios.get(API)
            .then((response) => { 
                this.JsonData = JSON.parse(response.data.replaceAll('&quot;','"').replaceAll('<body>','').replaceAll('</body>',''));
                for (let i = 0; i < this.JsonData.length; i++) {
                this.animalData[i] = this.JsonData[i];
                console.log("here2");
                let v = document.getElementById('AnimalLocation');
                let data = this.animalData[i].name;
                let data2 = this.animalData[i].id;
                    console.log("here3");
               v.insertAdjacentHTML('beforeBegin',  `<td> <a  href="http://192.168.1.16:8080/animal/${data2}" >${data}</a></td> `);
 
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