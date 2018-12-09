import React from 'react';

const Payload = ({payloads}) => {
  return (
      <div className={'row-extra-payload-container'}>
        <div className={'row-extra-details-payload-header header'}>{'PAYLOAD INFORMATION'}</div>
        <table className={'payload-table'}>
          <thead className={'payload-table-header'}>
          <tr>
            <th>Customer</th>
            <th>Nationality</th>
            <th>Type</th>
            <th>Weight KG/LBS</th>
          </tr>
          </thead>
          {_.map(payloads, (payload) => {
            return (
                <tbody>
                <tr>
                  <td>{payload.customers || 'N/A'}</td>
                  <td>{payload.nationality || 'N/A'}</td>
                  <td>{payload.payload_type ||'N/A'}</td>
                  <td>{`${payload.payload_mass_kg || 'N/A'}/${payload.payload_mass_lbs || 'N/A'}`}</td>
                </tr>
                </tbody>
            );
          })
          }
        </table>
      </div>
  );
};

export default Payload;