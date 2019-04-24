export const typePrefix = 'tss-font';

export const fromatTypes = [
  {
    type: `${typePrefix}/strong`,
    title: 'tss-strong',
    tagName: `${typePrefix}-strong`,
    className: `tss-strong`,
    edit() {
      return null;
    }
  },
  {
    type: `${typePrefix}/italic`,
    title: 'tss-italic',
    tagName: `${typePrefix}-italic`,
    className: `tss-italic`,
    edit() {
      return null;
    }
  },
  {
    type: `${typePrefix}/underline`,
    title: 'tss-underline',
    tagName: `${typePrefix}-underline`,
    className: `tss-underline`,
    attributes: {
      style: 'style'
    },
    edit() {
      return null;
    }
  },
  {
    type: `${typePrefix}/color`,
    title: 'tss-color',
    tagName: `${typePrefix}-color`,
    className: `tss-color`,
    attributes: {
      style: 'style'
    },
    edit() {
      return null;
    }
  },
  {
    type: `${typePrefix}/background-color`,
    title: 'tss-background-color',
    tagName: `${typePrefix}-background-color`,
    className: `tss-background-color`,
    attributes: {
      style: 'style'
    },
    edit() {
      return null;
    }
  },
];

