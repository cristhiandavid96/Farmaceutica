import { mount } from '@vue/test-utils'
import Crear from '../pages/medicamentos/Crear.vue';


describe('Task component unit test', () => {

    test('is VUE instance', () => {
        const wrapper = mount(Crear, {
            propsData: {
                medicamento: {
                    ubicacion: "test 2",
                    precio: "2000",
                    nombre: "test medicamento",
                }
            }
        })
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

});
