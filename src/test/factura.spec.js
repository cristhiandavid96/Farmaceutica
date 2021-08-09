import { mount } from '@vue/test-utils'
import Crear from '../pages/Facturacion/Crear.vue';


describe('Task component unit test', () => {

    test('is VUE instance', () => {
        const wrapper = mount(Crear, {
            propsData: {
                promocion: {
                    pago_total: "30000",
                    fecha_crear: "2021-04-03"
                }
            }
        })
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

});
