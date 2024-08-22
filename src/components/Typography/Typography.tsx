export type TypographyProps = {
  text: string;
  variant: keyof typeof typographyMap;
  element?:  keyof JSX.IntrinsicElements;
  className?: string;
};

export const typographyMap = {
  xlRegular: {
    fontSize: 96,
    lineHeight: 132,
    fontWeight: 400
  },
  xlMedium: {
    fontSize: 96,
    lineHeight: 132,
    fontWeight: 500
  },
  lgRegular: {
    fontSize: 72,
    lineHeight: 108,
    fontWeight: 400
  },
  lgMedium: {
    fontSize: 72,
    lineHeight: 108,
    fontWeight: 500
  },
  h1Regular: {
    fontSize: 64,
    lineHeight: 84,
    fontWeight: 400
  },
  h1Medium: {
    fontSize: 64,
    lineHeight: 84,
    fontWeight: 500
  },
  h1Semibold: {
    fontSize: 64,
    lineHeight: 84,
    fontWeight: 600
  },
  h2Regular: {
    fontSize: 48,
    lineHeight: 64,
    fontWeight: 400
  },
  h2Medium: {
    fontSize: 48,
    lineHeight: 64,
    fontWeight: 500
  },
  h2Semibold: {
    fontSize: 48,
    lineHeight: 64,
    fontWeight: 600
  },
  h3Regular: {
    fontSize: 36,
    lineHeight: 62,
    fontWeight: 400
  },
  h3Medium: {
    fontSize: 36,
    lineHeight: 62,
    fontWeight: 500
  },
  h3Semibold: {
    fontSize: 36,
    lineHeight: 62,
    fontWeight: 600
  },
  h4Regular: {
    fontSize: 20,
    lineHeight: 34,
    fontWeight: 400
  }, 
  h4Medium: {
    fontSize: 20,
    lineHeight: 34,
    fontWeight: 500
  }, 
  h4Semibold: {
    fontSize: 20,
    lineHeight: 34,
    fontWeight: 600
  }, 
  h5Regular: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 400
  }, 
  h5Medium: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 500
  }, 
  h5Semibold: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 600
  }, 
  h6Regular: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 400
  }, 
  h6Medium: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 500
  }, 
  h6Semibold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 600
  }, 
  mdlight: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 300
  }, 
  mdRegular: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 400
  }, 
  mdMedium: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 500
  }, 
  mdSemibold: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 600
  }, 
  smlight: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 300
  }, 
  smRegular: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 400
  }, 
  smMedium: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 500
  }, 
  smSemibold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 600
  }, 
  xslight: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 300
  }, 
  xsRegular: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 400
  }, 
  xsMedium: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 500
  }, 
  xsSemibold: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 600
  }, 
};

const Typography = ({
  text,
  variant,
  element = 'p',
  className,
}: TypographyProps) => {
  const Element = element as keyof JSX.IntrinsicElements;
  const styles = typographyMap[variant] || {};

  return (
    <Element 
      className={className}
      style={{
        fontSize: `${styles.fontSize}px`,
        lineHeight: `${styles.lineHeight}px`,
        fontWeight: styles.fontWeight
      }}
    >
      {text}
    </Element>
  );
};

export default Typography;

