// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Home documents */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<HomeDocumentDataSlicesSlice>;
}
/**
 * Slice for *Home → Slice Zone*
 *
 */
type HomeDocumentDataSlicesSlice = HomeIntroSlice;
/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;
export type AllDocumentTypes = HomeDocument;
/**
 * Primary content in HomeIntro → Primary
 *
 */
interface HomeIntroSliceDefaultPrimary {
  /**
   * Hero Text field in *HomeIntro → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_intro.primary.hero_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  hero_text: prismicT.RichTextField;
}
/**
 * Default variation for HomeIntro Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HomeIntroSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<HomeIntroSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *HomeIntro*
 *
 */
type HomeIntroSliceVariation = HomeIntroSliceDefault;
/**
 * HomeIntro Shared Slice
 *
 * - **API ID**: `home_intro`
 * - **Description**: `HomeIntro`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HomeIntroSlice = prismicT.SharedSlice<
  "home_intro",
  HomeIntroSliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      HomeDocument,
      AllDocumentTypes,
      HomeIntroSliceDefaultPrimary,
      HomeIntroSliceDefault,
      HomeIntroSliceVariation,
      HomeIntroSlice,
    };
  }
}
