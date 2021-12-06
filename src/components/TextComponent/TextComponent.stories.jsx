import { TextComponent } from '.';
export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Eaque asperiores tempore, rem suscipit odit maiores voluptates autem quidem repudiandae vero similique aut fugiat corporis laboriosam veniam dolorum? 
    Expedita, praesentium explicabo!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
