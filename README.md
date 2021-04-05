# @feinzer/v-custom-stepper

Simple, reusable and highly customizable stepper component using VueJS Slots.

## Installation

``` sh
npm install @feinzer/v-custom-stepper
```
or
``` sh
yarn add @feinzer/v-custom-stepper
```

## Usage

``` js
import { Stepper, Step } from '@feinzer/v-custom-stepper';

export default {
  ...
  components: {
    Stepper,
    Step,
  },
  ...
};
```

``` html
<Stepper>
  <Step>
    Step 1 Content
  </Step>
  <Step>
    Step 2 Content
  </Step>
</Stepper>
```

## Props

### Stepper
| Property                    | Type    | Default | Description                                                                                                                                                                                                                                                                           |
|:----------------------------|:--------|:--------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| showIndicator            | Boolean | false   | Shows an indicator section on top of the steps.
| canFinish                | Boolean | true    | Enables or disables the finish button and marks the steps as finished.

### Step
| Property                    | Type    | Default | Description                                                                                                                                                                                                                                                                           |
|:----------------------------|:--------|:--------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| canAdvance               | Boolean | true    | Checks per step to allow the user to go next or not.