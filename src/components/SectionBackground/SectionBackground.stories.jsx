import { SectionBackground } from '.';
export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          error, reprehenderit sit doloremque, non odio iste eos a, molestiae
          est obcaecati nemo laudantium corporis veniam rerum illum voluptatibus
          aspernatur explicabo.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
