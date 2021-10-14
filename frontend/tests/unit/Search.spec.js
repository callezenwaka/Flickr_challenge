import { mount } from '@vue/test-utils';
import Keyword from '@components/Keyword.vue';

describe("Keyword Search", () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store();
    store.dispatch = jest.fn();
  });

  afterEach(() => { });

  it("Trigger an action on button click", async () => {
    const component = mount(Keyword);
    component.find(button).trigger("click");
    await component.vm.$nextTick();
    expect(store.dispatch).toHaveBeenCalledWith("onSearchTag");
  })
})