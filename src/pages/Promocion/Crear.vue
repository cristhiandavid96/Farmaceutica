<template>
  <div>
    <div class="md:px-32 py-8 w-full">
      <div class="shadow overflow-hidden rounded border-b border-gray-200">
        <form v-on:submit.prevent="addRows" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="descripcion" class="block text-sm font-medium text-gray-700">Descripcion</label>
                <span v-if="!promocion.descripcion" style="color:red">Requerido*</span>
                <input v-model="promocion.descripcion" type="text" name="descripcion" id="descripcion" autocomplete="given-name" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label for="procentaje" class="block text-sm font-medium text-gray-700">Porcentaje</label>
                <span v-if="!promocion.porcentaje" style="color:red">Requerido*</span>
                <input v-model="promocion.porcentaje" type="number" name="procentaje" id="procentaje" autocomplete="family-name" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label for="fecha_inicio" class="block text-sm font-medium text-gray-700">Fecha Inicio</label>
                <span v-if="!promocion.fecha_inicio" style="color:red">Requerido*</span>
                <input type="text" v-model="promocion.fecha_inicio" placeholder="año/mes/dia" name="fecha_inicio" id="fecha_inicio" autocomplete="family-name" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              </div>
              <div class="col-span-6 sm:col-span-3">
                <span v-if="!promocion.fecha_fin" style="color:red">Requerido*</span>
                <label for="fecha_fin" class="block text-sm font-medium text-gray-700">Fecha Fin</label>
                <input  placeholder="año/mes/dia" v-model="promocion.fecha_fin" type="text" name="fecha_fin" id="fecha_fin" autocomplete="family-name" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Guardar
            </button>
          </div>
        </div>
      </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return {
      promocion:{}
    }
  },
  methods:{
    addRows(){
      if(!this.promocion.fecha_fin && !this.promocion.porcentaje &&  !this.promocion.descripcion && !this.promocion.fecha_inicio ){
        return false;
      }
      var data = {
      fecha_fin:this.promocion.fecha_fin,
      porcentaje:this.promocion.porcentaje,
      descripcion:this.promocion.descripcion,
      fecha_inicio:this.promocion.fecha_inicio
      }

      fetch("http://127.0.0.1:9000/promocion/api/save",{
        method:"POST",
        body:JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((dataResponse) => {
          window.location.href = "promocion"
        })
        .catch(console.log);
    }
  }

}
</script>
