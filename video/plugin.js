CKEDITOR.plugins.add( 'video', {
    icons: 'video',
    init: function( editor ) {

        editor.ui.addButton( 'Video', {
            label: 'Insert Video',
            command: 'video',
            toolbar: 'insert'
        });
        editor.addCommand( 'video', new CKEDITOR.dialogCommand( 'videoDialog' ) );
        CKEDITOR.dialog.add( 'videoDialog', this.path + 'dialogs/video.js' );

    }
});