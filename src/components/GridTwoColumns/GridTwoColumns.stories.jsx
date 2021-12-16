import { GridTwoColumns } from '.';
export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    title: 'Grid Two Columns',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ducimus et iure deserunt omnis laboriosam iusto non quae eius sapiente, fuga aperiam necessitatibus maiores quasi! Expedita fugit in maiores provident.`,
    srcImg: 'assets/images/javascript.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
