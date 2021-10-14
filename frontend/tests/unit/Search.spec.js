import Vuex from 'vuex';
import { createLocalVue, mount } from '@vue/test-utils';
import Search from '@/components/Search.vue';

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
    const component = mount(Search, {
      store,
      localVue
    });
    component.find("button").trigger("click");
    await component.vm.$nextTick();
    expect(store.dispatch).toHaveBeenCalledWith("onSearchTag");
  })
})