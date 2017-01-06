import React from 'react'
import classnames from 'classnames';
import numeral from 'numeral';
import './comparableValue.css'

export default class ComparableValue extends React.Component {

  render() {
    console.log(typeof this.props.value, this.props.value, this.props.dataStyle)
    if (this.props.value === null) {
      return <div>-</div>
    } else if (this.props.dataStyle === 'plaintext') {
      return <div className="alignLeft">{this.props.value}</div>
    } else if (this.props.dataStyle === 'quantity') {
      return <div className="alignRight">{numeral(this.props.value).format('0,0')}</div>
    } else if (this.props.dataStyle === 'number_2f') {
      console.log('==========>')
      return <div className="alignRight">{numeral(this.props.value).format('0,0.00')}</div>
    } else if (this.props.dataStyle === 'number_4f') {
      return <div className="alignRight">{numeral(this.props.value).format('0,0.0000')}</div>
    } else if (this.props.dataStyle === 'price_2f') {
      let baseValue = (this.props.baseValue && typeof this.props.baseValue === 'number') ? this.props.baseValue : 0;
      let sign = (this.props.sign && this.props.value > baseValue) ? '+' : '';
      return (
        <div className={classnames("comparableValue", "alignRight",
          {[`${"greater"}`]: this.props.value > baseValue},
          {[`${"lesser"}`]: this.props.value < baseValue},
          {[`${"equal"}`]: this.props.value === baseValue})}>
          {sign}{numeral(this.props.value).format(this.props.format || '0,0.00')}
        </div>
      )
    }
    else {
      return (
        <div>spdbnlf</div>
      )
    }
  }
}
