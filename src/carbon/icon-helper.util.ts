import * as Icons from '@carbon/icons';
import { toSVG } from '@carbon/icon-helpers';

export const Icon = (
  iconKey: keyof typeof Icons,
  attributes: Record<string, string> = {},
) => {
  const icon = Icons[iconKey];
  console.log(iconKey, icon);
  if (typeof icon !== 'object') {
    throw new Error(`Icon ${iconKey} is not valid`);
  }
  const { elem, attrs } = icon;
  if (!elem || !attrs) {
    throw new Error(`Icon ${iconKey} is not valid`);
  }
  return toSVG({
    ...icon,
    attrs: {
      ...icon.attrs,
      ...attributes
    },
  });
};
