# rn-componenets
A simple set of componenets for React Native.

# Components Included

## Material Inspired

These components are *inspired* by Material Design and Material UI.  They provide clean, simple, and lightweight implementations that have a default useable styling.  Out of the box these components can be used to put together a Material inspired UI without the need for lengthy initializers and style object.

**`MaterialModal`**

See the [Full Example](https://github.com/dsandor/rn-components/blob/master/Examples/modal/index.ios.js) here.

```JSX

import MaterialModal from 'rn-components/material/Modal';

<MaterialModal 
  title="Example" 
  modalVisible={this.state.modalVisible}
  onClosed={() => this.setState({modalVisible: false})} >
  <Text>This is just a simple example of using the modal.</Text>
</MaterialModal>
```

![Modal Screenshot](https://raw.githubusercontent.com/dsandor/rn-components/master/wiki/assets/modal.png)

`LineTextInput`

![Line Text Input](https://raw.githubusercontent.com/dsandor/rn-components/master/wiki/assets/LineTextInput.gif)