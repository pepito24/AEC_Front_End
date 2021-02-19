import { shallowMount } from '@vue/test-utils'
import Foo from './Foo.vue'

describe('Foo', () => {
  it('restitue un message et répond correctement à la saisie de l\'utilisateur', () => {
    const wrapper = shallowMount(Foo, {
      data() {
        return {
          message: 'Hello World',
          username: ''
        }
      }
    })

    // vérifie que `message` est restitué
    expect(wrapper.find('.message').text()).toEqual('Hello World')

    // vérifie que `error` est restituée
    expect(wrapper.find('.error').exists()).toBeTruthy()

    // met à jour `username` et vérifie que `error` n'est plus restituée
    wrapper.setData({ username: 'Lachlan' })
    expect(wrapper.find('.error').exists()).toBeFalsy()
  })
})
