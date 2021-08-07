<template>
  <div class="md:px-32 py-8 w-full">
    <div class="shadow overflow-hidden rounded border-b border-gray-200">
      <table class="min-w-full bg-white">
        <thead class="bg-gray-800 text-white">
          <tr>
            <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">id</th>
            <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
              pago
            </th>
            <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
              fecha creacion
            </th>
          </tr>
        </thead>
        <tbody class="text-gray-700" v-for="factura in facturas" :key="factura.id">
          <tr>
            <td class="w-1/3 text-left py-3 px-4">
              {{ factura.id }}
            </td>
            <td class="w-1/3 text-left py-3 px-4">
              {{ factura.pago_total }}
            </td>
            <td class="w-1/3 text-left py-3 px-4">
              {{ factura.fecha_crear }}
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
      facturas: [],
    };
  },
  created: function () {
    this.consultar();
  },
  methods: {
    consultar() {
      fetch("http://127.0.0.1:9000/factura/api/all")
        .then((response) => response.json())
        .then((data) => {
          this.facturas = [];
          if (Object.keys(data).length > 0) {
            this.facturas = data;
          }
        })
        .catch(console.log);
    },
  },
};
</script>
