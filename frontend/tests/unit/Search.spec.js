import Vuex from 'vuex';
import { createLocalVue, mount } from '@vue/test-utils';
import Search from '@/components/Search'

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Keyword Search", () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store();
    store.dispatch = jest.fn();
  });

  afterEach(() => { });

  it("Trigger an action on button click", async () => {
    const wrapper = mount(Search, {
      store,
      localVue
    });
    // const button = wrapper.find('button')
    // await button.trigger('click')
    await wrapper.find('#search').trigger("click");
    await wrapper.vm.$nextTick();
    expect(store.dispatch).toHaveBeenCalledWith("onSearchTag");
  })
})