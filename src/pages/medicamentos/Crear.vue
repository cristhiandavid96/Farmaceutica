<template>
  <div>
    <div class="md:px-32 py-8 w-full">
      <div class="shadow overflow-hidden rounded border-b border-gray-200">
        <form v-on:submit.prevent="addRows" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
                <span v-if="!medicamento.nombre" style="color:red">Requerido*</span>
                <input v-model="medicamento.nombre" type="text" name="nombre" id="nombre" autocomplete="family-name" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label for="precio" class="block text-sm font-medium text-gray-700">Precio</label>
                <span v-if="!medicamento.precio" style="color:red">Requerido*</span>
                <input   v-model="medicamento.precio" type="number" name="precio" id="precio" autocomplete="family-name" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label for="ubicacion" class="block text-sm font-medium text-gray-700">Ubicacion</label>
                <span v-if="!medicamento.ubicacion" style="color:red">Requerido*</span>
                <input   v-model="medicamento.ubicacion" type="text" name="ubicacion" id="ubicacion" autocomplete="family-name" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
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
      medicamento:{}
    }
  },
  methods:{
    addRows(){
      if(!this.medicamento.precio && !this.medicamento.precio && !this.medicamento.nombre){
        return false;
      }
      var data = {
      ubicacion:this.medicamento.ubicacion,
      precio:this.medicamento.precio,
      nombre:this.medicamento.nombre
      }

      fetch("http://127.0.0.1:9000/medicamento/api/save",{
        method:"POST",
        body:JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((dataResponse) => {
          window.location.href = "medicamento"
        })
        .catch(console.log);
    }
  }

}
</script>
