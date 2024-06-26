import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function AppLandView({ title, subheader, chart, ...other }) {
  const chartOptions = useChart({
    series: [
      {
        data: [
          {
            x: 'INTC',
            y: 1.2,
          },
          {
            x: 'GS',
            y: 0.4,
          },
          {
            x: 'CVX',
            y: -1.4,
          },
          {
            x: 'GE',
            y: 2.7,
          },
          {
            x: 'CAT',
            y: -0.3,
          },
          {
            x: 'RTX',
            y: 5.1,
          },
          {
            x: 'CSCO',
            y: -2.3,
          },
          {
            x: 'JNJ',
            y: 2.1,
          },
          {
            x: 'PG',
            y: 0.3,
          },
          {
            x: 'TRV',
            y: 0.12,
          },
          {
            x: 'MMM',
            y: -2.31,
          },
          {
            x: 'NKE',
            y: 3.98,
          },
          {
            x: 'IYT',
            y: 1.67,
          },
        ],
      },
    ],
    legend: {
      show: false,
    },
    chart: {
      height: 350,
      type: 'treemap',
    },
    title: {
      text: 'Treemap with Color scale',
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
      },
      formatter: function (text, op) {
        return [text, op.value];
      },
      offsetY: -4,
    },
    plotOptions: {
      treemap: {
        enableShades: true,
        shadeIntensity: 0.5,
        reverseNegativeShade: true,
        colorScale: {
          ranges: [
            {
              from: -6,
              to: 0,
              color: '#CD363A',
            },
            {
              from: 0.001,
              to: 6,
              color: '#52B12C',
            },
          ],
        },
      },
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }}>
        <Chart
          type="treemap"
          series={[
            {
              data: [
                {
                  x: 'INTC',
                  y: 1.2,
                },
                {
                  x: 'GS',
                  y: 0.4,
                },
                {
                  x: 'CVX',
                  y: -1.4,
                },
                {
                  x: 'GE',
                  y: 2.7,
                },
                {
                  x: 'CAT',
                  y: -0.3,
                },
                {
                  x: 'RTX',
                  y: 5.1,
                },
                {
                  x: 'CSCO',
                  y: -2.3,
                },
                {
                  x: 'JNJ',
                  y: 2.1,
                },
                {
                  x: 'PG',
                  y: 0.3,
                },
                {
                  x: 'TRV',
                  y: 0.12,
                },
                {
                  x: 'MMM',
                  y: -2.31,
                },
                {
                  x: 'NKE',
                  y: 3.98,
                },
                {
                  x: 'IYT',
                  y: 1.67,
                },
              ],
            },
          ]}
          options={chartOptions}
        //   height={350}
        />
      </Box>
    </Card>
  );
}

AppLandView.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};
