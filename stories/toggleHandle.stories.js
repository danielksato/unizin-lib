/* @flow */
import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';

import ToggleHandle from '../src/components/toggleHandle';

class ToggleHandleContainer extends PureComponent<{}, { expanded: boolean }> {
    state = { expanded: false };

    toggleExpanded = () => this.setState(({ expanded }) => ({ expanded: !expanded }));

    render() {
        return (
            <div style={{ display: 'inline-block' }}>
                <ToggleHandle expanded={this.state.expanded} onClick={this.toggleExpanded} />
            </div>
        );
    }
}

storiesOf('ToggleHandle', module).add('Toggleable handle', () => <ToggleHandleContainer />);
