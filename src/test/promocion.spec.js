import { mount } from '@vue/test-utils'
import Crear from '../pages/Promocion/Crear.vue';


describe('Task component unit test', () => {

    test('is VUE instance', () => {
        const wrapper = mount(Crear, {
            propsData: {
                promocion: {
                    fecha_fin: "2021-04-03",
                    fecha_inicio: "2021-04-03",
                    porcentaje: "10",
                    descripcion: "test"
                }
            }
        })
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

});
