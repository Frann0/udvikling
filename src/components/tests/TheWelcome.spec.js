import TheWelcome from '../TheWelcome.vue';
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

describe('TheWelcome', () => {
  it('renders properly', () => {
    const wrapper = mount(TheWelcome);
    expect(wrapper.html()).toContain('Documentation');
  });
});

