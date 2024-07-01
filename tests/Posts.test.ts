import { describe, expect, it } from "vitest";
import { mockNuxtImport, mountSuspended } from '@nuxt/test-utils/runtime'
import Posts from "../components/Posts.vue";

mockNuxtImport( 'getPosts', () => (
  () => 'posts'
) )

describe( '', () => {
  it( '', async () => {
    const wrapper = await mountSuspended( Posts )
    expect( wrapper.find( 'div' ).text() )
      .not.toHaveLength( 0 )
  } )
} )