import { FC } from "react";

import { Typography } from "antd";

import { MAIN_TITLE } from "app/constants";

type TitleProps = {
  /** Title前的修饰 */
  subTitle?: string;
};

/**
 *  Title
 */
const Title: FC<TitleProps> = ({ subTitle = "" }) => {
  const title = subTitle ? `${subTitle}の${MAIN_TITLE}` : MAIN_TITLE;

  return <Typography.Title>{title}</Typography.Title>;
};

export { Title };
