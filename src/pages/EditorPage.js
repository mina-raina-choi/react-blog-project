import React from 'react';
import EditorTemplate from 'components/editor/EditorTemplate';
import EditorHeader from 'components/editor/EditorHeader';
import PreviewPaneContainer from 'container/editor/PreviewPaneContainer';
import EditorPaneContainer from 'container/editor/EditorPaneContainer';


const EditorPage = () => {
    return (
        <EditorTemplate
            header={<EditorHeader/>}
            editor={<EditorPaneContainer/>}
            preview={<PreviewPaneContainer/>}    
        />
    )
}

export default EditorPage;