<template>
  <div id="animal">
      <axios></axios>
       <table style="width:25%">
            <tr id=headers>
            <td> Animal Info </td> 
            </tr>
            <tr id = AnimalLocation>
            </tr>
        </table>
    </div>
</template>

<script >
// @ is an alias to /src

import Axios from '@/components/IndividualAnimalLoader.js'

export default {
    components: {
        'axios': Axios,

    }
};


</script>
