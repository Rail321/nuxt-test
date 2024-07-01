import { describe, expect, it } from "vitest";
import { mountSuspended } from '@nuxt/test-utils/runtime'
import HelloWorld from "../components/HelloWorld.vue";

describe( '', () => {
  it( '', async () => {
    const wrapper = await mountSuspended( HelloWorld )
    expect( wrapper.html() )
      .contains( 'Hello' )
  } )

  it( '', async () => {
    const wrapper = await mountSuspended( HelloWorld )
    expect( wrapper.html() )
      .contains( 'World' )
  } )
} )