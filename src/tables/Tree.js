import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import styled, { css } from 'styled-components'

const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
`;

const TreeOne = () => (
    <Tree
      lineWidth={'2px'}
      lineColor={'green'}
      lineBorderRadius={'10px'}
      label={<StyledNode>Root</StyledNode>}
      
    >
      <TreeNode label={<StyledNode>Child 1</StyledNode>}>
        <TreeNode label={<StyledNode>Grand Child</StyledNode>} />
      </TreeNode>
      <TreeNode label={<StyledNode>Child 2</StyledNode>}>
        <TreeNode label={<StyledNode>Grand Child</StyledNode>}>
          <TreeNode label={<StyledNode>Great Grand Child 1</StyledNode>} />
          <TreeNode label={<StyledNode>Great Grand Child 2</StyledNode>} />
        </TreeNode>
      </TreeNode>
      <TreeNode label={<StyledNode>Child 3</StyledNode>}>
        <TreeNode label={<StyledNode>Grand Child 1</StyledNode>} />
        <TreeNode label={<StyledNode>Grand Child 2</StyledNode>} />
      </TreeNode>
    </Tree>
  );

export default TreeOne;