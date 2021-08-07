<template>
  <div class="md:px-32 py-8 w-full">
    <div class="shadow overflow-hidden rounded border-b border-gray-200">
      <table class="min-w-full bg-white">
        <thead class="bg-gray-800 text-white">
          <tr>
            <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">id</th>
            <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
              Descripcion
            </th>
            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
             Porcentaje
            </th>
            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
             Fecha Inicio
            </th>
             <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
             Fecha Fin
            </th>
          </tr>
        </thead>
        <tbody class="text-gray-700" v-for="promocion in promociones" :key="promocion.id">
          <tr>
            <td class="w-1/3 text-left py-3 px-4">
              {{ promocion.id }}
            </td>
            <td class="w-1/3 text-left py-3 px-4">
              {{ promocion.descripcion }}
            </td>
            <td class="w-1/3 text-left py-3 px-4">
              {{ promocion.porcentaje }}
            </td>
            <td class="w-1/3 text-left py-3 px-4">
              {{ promocion.fecha_inicio }}
            </td>
            <td class="w-1/3 text-left py-3 px-4">
              {{ promocion.fecha_fin }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      promociones: [],
    };
  },
  created: function () {
    this.consultar();
  },
  methods: {
    consultar() {
      fetch("http://127.0.0.1:9000/promocion/api/all")
        .then((response) => response.json())
        .then((data) => {
          this.promociones = [];
          if (Object.keys(data).length > 0) {
            this.promociones = data;
          }
        })
        .catch(console.log);
    },
  },
};
</script>
