<template>
  <div>
    <!--Nav-->
    <nav class="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
      <div class="flex flex-wrap items-center">
        <div class="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
          <a href="#">
            <span class="text-xl pl-2"><i class="em em-grinning"></i></span>
          </a>
        </div>
      </div>
    </nav>
    <div class="flex flex-col md:flex-row">
      <div
        class="bg-gray-800 shadow-xl h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48"
      >
        <div
          class="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between"
        >
          <ul
            class="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left"
          >
            
            <li class="mr-3 flex-1">
              <router-link to="/medicamento" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                <i class="fa fa-envelope pr-0 md:pr-3"></i>                
                <span
                  class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block"
                  >Medicamento</span
                >
                </router-link>
            </li>
            <li class="mr-3 flex-1">
              <router-link to="/facturacion" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                <i class="fa fa-envelope pr-0 md:pr-3"></i>                
                <span
                  class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block"
                  >Facturación</span
                >
                </router-link>
            </li>
            <li class="mr-3 flex-1">              
              <router-link to="/promocion" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                <i class="fa fa-envelope pr-0 md:pr-3"></i>
                <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Promoción</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
        <Listar/>
      </div>
    </div>
  </div>
</template>

<script>
import Listar from './Listar.vue'
export default {
  name: 'app',
  components: {
    Listar
  }
}
</script>
