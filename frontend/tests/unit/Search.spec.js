import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Search from '@/components/Search';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Search.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      getFeedsByTag: jest.fn(),
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('calls store action "getFeedsByTag" when button is clicked', () => {
    const wrapper = shallowMount(Search, { store, localVue });
    wrapper.find('button').trigger('click');
    expect(actions.getFeedsByTag).toHaveBeenCalled();
  })
})