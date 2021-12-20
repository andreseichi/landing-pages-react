import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<p><a href="https://github.com/andreseichi">Feito com ❤ por André Tashiro&nbsp;</a></p>`,
  },
};
export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
