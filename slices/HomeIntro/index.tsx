import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HomeIntro`.
 */
export type HomeIntroProps = SliceComponentProps<Content.HomeIntroSlice>;

/**
 * Component for "HomeIntro" Slices.
 */
const HomeIntro = ({ slice }: HomeIntroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Placeholder component for home_intro (variation: {slice.variation}) Slices */}

      <PrismicRichText field={slice.primary.hero_text} />
    </section>
  );
};

export default HomeIntro;
