```js script
import { html } from '@open-wc/demoing-storybook';
import '../dist/drop-zone.js';

export default {
  title: 'DropZone',
  component: 'drop-zone',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# DropZone

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add drop-zone
```

```js
import 'drop-zone/drop-zone.js';
```

```js preview-story
export const Simple = () => html`
  <drop-zone></drop-zone>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <drop-zone title="Hello World"></drop-zone>
`;
```
