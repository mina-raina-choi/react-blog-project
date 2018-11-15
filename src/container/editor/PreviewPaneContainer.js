import React, { Component } from 'react';
import PreviewPane from 'components/editor/PreviewPane';
import { connect } from 'react-redux';


class PreviewPaneContainer extends Component {
    render() {
        const { title, markdown } = this.props;

        return (
            <PreviewPane
                title={title}
                markdown={markdown}
            />
        )
    }
  }
  
  const mapStateToProps = state => ({
    title: state.editor.get('title'),
    markdown: state.editor.get('markdown'),
  });
  
  
  export default connect(
    mapStateToProps   
  )(PreviewPaneContainer);
  