import React from 'react'

class FileInput extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
      console.log("je suis dans onChange : ");
    const { input: { onChange } } = this.props
    onChange(e.target.files[0])
  }

  render() {
    const { input: { value } } = this.props

    return (<input
      type="file"
      value={value}
      onChange={this.onChange}
    />)
  }
}

export default FileInput