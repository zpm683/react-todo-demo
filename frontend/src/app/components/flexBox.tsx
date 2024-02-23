import { CSSProperties, FC, PropsWithChildren } from "react";

type FlexBoxProps = PropsWithChildren &
  Pick<
    CSSProperties,
    | "height"
    | "width"
    | "gap"
    | "minHeight"
    | "maxHeight"
    | "minWidth"
    | "maxWidth"
    | "flexDirection"
    | "justifyContent"
    | "alignItems"
  >;

/**
 * FlexBox
 */
const FlexBox: FC<FlexBoxProps> = ({ children, ...css }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        ...css,
      }}
    >
      {children}
    </div>
  );
};

export { FlexBox };
