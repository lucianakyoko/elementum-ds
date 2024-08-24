import Typography from "../Typography/Typography";

export type TextArrangementProps = {
  variant: keyof typeof textArrangementsMap;
  title: string;
  subtitle: string;
  titleElement?: keyof JSX.IntrinsicElements;
  subtitleElement?: keyof JSX.IntrinsicElements;
  titleClassName?: string;
  subtitleClassName?: string;
}

export const textArrangementsMap = {
  headingAndCaption: {
    title: 'h3Regular',
    subtitle: 'h6Regular',
  },
  captionAndBody: {
    title: 'h6Medium',
    subtitle: 'xsRegular',
  },
  headingAndBody: {
    title: 'smlight',
    subtitle: 'xsRegular',
  },
  olList: {
    title: 'h4Medium',
    subtitle: 'h5Regular',
  },
  ulList: {
    title: 'h4Medium',
    subtitle: 'h5Regular',
  },
  displayAndHeading: {
    title: 'lgRegular',
    subtitle: 'h3Regular',
  },
  displayAndHeadingLarge: {
    title: 'xlRegular',
    subtitle: 'h2Regular',
  },
} as const;

const TextArrangement = ({
  variant, 
  title, subtitle,
  titleElement='h1', subtitleElement='p',
  titleClassName='text-gray-800', subtitleClassName='text-gray-500'
}: TextArrangementProps) => {
  const { title: titleVariant, subtitle: subtitleVariant } = textArrangementsMap[variant];

  return(
    <div className="flex flex-col items-start">
      <Typography 
        variant={titleVariant}
        element={titleElement}
        className={titleClassName}
        text={title}
      />
      <Typography
        variant={subtitleVariant}
        element={subtitleElement}
        className={subtitleClassName}
        text={subtitle}
      />
    </div>
  );
};

export default TextArrangement;