import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { wrapper } from './Forecast.module.css';
import { getRequestById } from '../../redux/operations';

export default class Forecast extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
    onLoad: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
  };
  componentDidMount() {
    const { id, onLoad } = this.props;
    getRequestById(id).then(res => onLoad(res));
  }

  render() {
    const { data } = this.props;
    return (
      <>
        {data && (
          <LineChart
            width={600}
            height={300}
            data={data.mappedArray}
            margin={{
              top: 20,
              right: 30,
              left: 5,
              bottom: 5,
            }}
            className={wrapper}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        )}
      </>
    );
  }
}
