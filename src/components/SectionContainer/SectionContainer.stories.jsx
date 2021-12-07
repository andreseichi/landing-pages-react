import { SectionContainer } from '.';
export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
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
      <SectionContainer {...args} />
    </div>
  );
};
