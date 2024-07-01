import { describe, expect, it } from "vitest";
import { mountSuspended } from '@nuxt/test-utils/runtime'
import HelloWorldAsync from "../components/HelloWorldAsync.vue";

describe( '', () => {
  it( '', async () => {
    const wrapper = await mountSuspended( HelloWorldAsync )
    expect( wrapper.html() )
      .contains( 'Hello' )
  } )
  
  it( '', async () => {
    const wrapper = await mountSuspended( HelloWorldAsync )
    expect( wrapper.html() )
      .contains( 'World' )
  } )
} )