---
to: src/components/<%= Name %>/<%= Name %>.tsx
---
import React, { Fragment } from 'react';

interface Props {

}

interface State {

}

class <%= Name %> extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

    }

    render() {
        return (
            <Fragment>
                Hello
            </Fragment>
        );
    }
}

export default <%= Name %>;