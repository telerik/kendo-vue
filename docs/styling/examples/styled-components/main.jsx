
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import styled, { css } from 'styled-components';

import products from './products.json';
import { Button } from '@progress/kendo-react-buttons';

const StyledButton = styled(Button)`
  font-weight: bold;
  ${props =>
    props.disabled
      ? css`color: #D81052;`
      : css`color: green;`
  };
`;

const StyledGrid = styled(Grid)`
  color: #D81052;
  & th {
    color: grey;
    font-weight: bold;
  }
  & td:nth-child(1) {
    font-weight: bold;
  }
`;

const StyledTD = styled.td`
  pointer-events:none;
  opacity: 0.5
  ${props =>
    props.discontinued
      ? css`background-color: rgb(55, 180, 0,0.32);`
      : css`background-color: rgb(243, 23, 0, 0.32);`
  };
`;

class App extends React.Component {
  state = {
    gridData: products
  }

  render() {
    return (
      <div>
        <StyledButton disabled={true}>Disabled Button </StyledButton>
        <hr />
        <StyledGrid
          style={{ height: '400px' }}
          data={this.state.gridData}
        >
          <Column field="ProductID" title="ID" width="40px" />
          <Column field="ProductName" title="Name" width="250px" />
          <Column field="Category.CategoryName" title="CategoryName" width="200px" />
          <Column field="UnitPrice" title="Price" width="80px" />
          <Column field="UnitsInStock" title="In stock" width="80px" />
          <Column field="Discontinued" width="120px"
            cell={(props) => (
              <StyledTD discontinued={props.dataItem.Discontinued}>
                <input type="checkbox" checked={props.dataItem[props.field]} />
              </StyledTD>
            )} />
        </StyledGrid>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('my-app')
);
