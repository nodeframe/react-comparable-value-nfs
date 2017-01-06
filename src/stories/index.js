import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import ComparableValue from '../ComparableValue'
import './style.css'

storiesOf('Welcome', module)
  .add('Comparable value with table', () => (
    <table>
      <tr>
        <th>Plain Text</th>
        <th>Quantity</th>
        <th>Number 2f</th>
        <th>Number 4f</th>
        <th>Price 2f (Lesser)</th>
        <th>Price 2f (Equal)</th>
        <th>Price 2f (Greater)</th>
      </tr>
      <tr>
        <td><ComparableValue value="Hello World"
                             dataStyle="plaintext"/></td>
        <td><ComparableValue value={100}
                             dataStyle="quantity"/></td>
        <td><ComparableValue value={200}
                             dataStyle="number_2f"/></td>
        <td><ComparableValue value={300}
                             dataStyle="number_4f"/></td>
        <td><ComparableValue value={-100}
                             dataStyle="price_2f"/></td>
        <td><ComparableValue value={0}
                             dataStyle="price_2f"/></td>
        <td><ComparableValue value={100}
                             dataStyle="price_2f"/></td>
      </tr>
    </table>
  ));
