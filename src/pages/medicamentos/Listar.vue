<template>
  <div class="md:px-32 py-8 w-full">
    <div class="shadow overflow-hidden rounded border-b border-gray-200">
      <table class="min-w-full bg-white">
        <thead class="bg-gray-800 text-white">
          <tr>
            <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">id</th>
            <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
              nombre
            </th>
            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
             precio
            </th>
            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
             ubicacion
            </th>
          </tr>
        </thead>
        <tbody class="text-gray-700" v-for="medicamento in medicamentos" :key="medicamento.id">
          <tr>
            <td class="w-1/3 text-left py-3 px-4">
              {{ medicamento.id }}
            </td>
            <td class="w-1/3 text-left py-3 px-4">
              {{ medicamento.nombre }}
            </td>
            <td class="w-1/3 text-left py-3 px-4">
              {{ medicamento.precio }}
            </td>
            <td class="w-1/3 text-left py-3 px-4">
              {{ medicamento.ubicacion }}
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
      medicamentos: [],
    };
  },
  created: function () {
    this.consultar();
  },
  methods: {
    consultar() {
      fetch("http://127.0.0.1:9000/medicamento/api/all")
        .then((response) => response.json())
        .then((data) => {
          this.medicamentos = [];
          if (Object.keys(data).length > 0) {
            this.medicamentos = data;
          }
        })
        .catch(console.log);
    },
  },
};
</script>
