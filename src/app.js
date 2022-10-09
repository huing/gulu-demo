import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";
import chai from "chai";
import spies from "chai-spies";

Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);

new Vue({
  el: "#app",
  data: {
    loading1: false,
  },
});
const expect = chai.expect;
chai.use(spies);
{
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: {
      icon: "settings",
    },
  });
  button.$mount();
  let useElement = button.$el.querySelector("use");
  expect(useElement.getAttribute("xlink:href")).to.eq("#icon-settings");
  button.$el.remove();
  button.$destroy();
}

{
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: {
      icon: "settings",
      loading: true,
    },
  });
  button.$mount();
  let useElement = button.$el.querySelector("use");
  expect(useElement.getAttribute("xlink:href")).to.eq("#icon-loading");
  button.$el.remove();
  button.$destroy();
}

{
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: {
      icon: "settings",
    },
  });
  button.$mount(div);
  let svg = button.$el.querySelector("svg");
  let { order } = window.getComputedStyle(svg);
  expect(order).to.eq("1");
  button.$el.remove();
  button.$destroy();
}

{
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: {
      icon: "settings",
      iconPosition: "right",
    },
  });
  button.$mount(div);
  let svg = button.$el.querySelector("svg");
  let { order } = window.getComputedStyle(svg);
  expect(order).to.eq("2");
  button.$el.remove();
  button.$destroy();
}

{
  const Constructor = Vue.extend(Button);
  const gButton = new Constructor({
    propsData: {
      icon: "settings",
    },
  });
  gButton.$mount();
  let spy = chai.spy(function () {});
  gButton.$on("click", spy);
  // gButton.$on("click", function () {
  //   console.log(1);
  // });
  gButton.$el.click();
  expect(spy).to.have.been.called();
  gButton.$el.remove();
  gButton.$destroy();
}
