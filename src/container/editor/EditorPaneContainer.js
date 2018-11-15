import React, { Component } from 'react';
import EditorPane from 'components/editor/EditorPane';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from 'store/modules/editor';


class EditorPaneContainer extends Component {
    
    handleChangeInput = ({ name, value }) => {
        const { EditorActions } = this.props;
        EditorActions.changeInput({name, value});
    }

    render() {
        const { title, tags, markdown } = this.props;
        const { handleChangeInput } = this;

        return (
            <EditorPane
                title={title}
                markdown={markdown}
                tags={tags}
                onChangeInput={handleChangeInput}
            />
        )
    }
  }
  
  const mapStateToProps = state => ({
    title: state.editor.get('title'),
    markdown: state.editor.get('markdown'),
    tags: state.editor.get('tags')
  });
  
  const mapDispatchToProps = dispatch => ({
    EditorActions: bindActionCreators(editorActions, dispatch)
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditorPaneContainer);
  