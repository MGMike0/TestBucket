import React from 'react';
import { shallow } from 'enzyme';
import Setup from './Setup';

describe('my component', () => {
  it('should show text', () => {
    const wrapper = shallow(<Setup />);
    const text = wrapper.find('div div');
    expect(text.text()).toBe('Text goes here');
  });

  it('should hide text when button is clicked', () => {
    const wrapper = shallow(<Setup />);
    const button = wrapper.find('button');
    button.simulate('click');
    const text = wrapper.find('div div');
    expect(text.length).toBe(0);
  });
});
