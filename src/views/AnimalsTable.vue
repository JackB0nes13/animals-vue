<template>
  <div id="animals">
      
      <axios></axios>
       <table style="width:25%">
            <tr id=headers>
            <td> Name </td> 
            </tr>
            <tr id = AnimalLocation>
            </tr>
        </table>

    </div>
</template>

<script >
// @ is an alias to /src

import Axios from '@/components/AnimalsTableLoader.js'

export default {
    components: {
        'axios': Axios,

    }
};


</script>
