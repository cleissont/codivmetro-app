import { shallowMount } from "@vue/test-utils"
import CountryStats from "@/components/CountryStats.vue"

describe("CountryStats.vue", () => {
  it("renders country props when passed", () => {
    const wrapper = shallowMount(CountryStats, {
      props: {
        country: "Test Country",
        totalCases: 123456,
        deaths: 1234,
        fatalityRate: 1.23,
      },
    })

    expect(wrapper.find(".text").text()).toBe("Test Country")
    expect(wrapper.findAll(".value")[0].text()).toBe("123,456")
    expect(wrapper.findAll(".value")[1].text()).toBe("1,234")
    expect(wrapper.findAll(".value")[2].text()).toBe("1.23%")
  })
})
