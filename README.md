[LICENSE]: https://github.com/ozgurgokdemir/tailwind-extract/blob/main/LICENSE
[COPYRIGHT]: https://ozgurgokdemir.com

# Tailwind Extract

Utility package for Tailwind CSS

## Install

```bash
# With NPM
npm install tailwind-extract

# With Yarn
yarn add tailwind-extract

# With PNPM
pnpm install tailwind-extract
```

## Usage

```javascript
import ext from 'tailwind-extract';
// or
import { ext } from 'tailwind-extract';

// Conditional Tailwind CSS classes
ext(['border', true && 'rounded', false && 'shadow', true ? 'px-2' : 'py-2']);
//=> 'border rounded px-2'

// Exclude invalid inputs
ext(['flex', false, 'justify-center', null, 'items-center', undefined]);
//=> 'flex justify-center items-center'

// Remove any unnecessary whitespace
ext(['  flex', '', '  justify-center  ', '  ', 'items-center  ']);
//=> 'flex justify-center items-center'
```

# License

[MIT License][LICENSE] Copyright (c) 2023 [Özgür Gökdemir][COPYRIGHT]
