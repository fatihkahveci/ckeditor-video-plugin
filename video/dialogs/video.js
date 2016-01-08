CKEDITOR.dialog.add( 'videoDialog', function( editor ) {
    return {
        title: 'Video Plugin',
        minWidth: 400,
        minHeight: 200,

        contents: [
            {
                id: 'tab-youtube',
                label: 'Youtube',
                elements: [
                    {
                        type: 'text',
                        id: 'youtube-url',
                        label: 'Youtube Video Url',
                    },
                    {
                        type: 'text',
                        id: 'youtube-width',
                        label: 'Youtube Width',
                        default: 640,

                    },
                    {
                        type: 'text',
                        id: 'youtube-height',
                        label: 'Youtube Height',
                        default: 480

                    },
                ]
            },
            {
                id: 'tab-vimeo',
                label: 'Vimeo',
                elements: [
                    {
                        type: 'text',
                        id: 'vimeo-url',
                        label: 'Vimeo Url',
                    },
                    {
                        type: 'text',
                        id: 'vimeo-width',
                        label: 'Vimeo Width',
                        default: 640,

                    },
                    {
                        type: 'text',
                        id: 'vimeo-height',
                        label: 'Vimeo Height',
                        default: 480

                    },
                ]
            },
            {
                id: 'tab-dailymotion',
                label: 'Dailymotion',
                elements: [
                    {
                        type: 'text',
                        id: 'dailymotion-url',
                        label: 'Dailymotion Url',

                    },
                    {
                        type: 'text',
                        id: 'dailymotion-width',
                        label: 'Dailymotion Width',
                        default: 640,

                    },
                    {
                        type: 'text',
                        id: 'dailymotion-height',
                        label: 'Dailymotion Height',
                        default: 480

                    },
                ]
            },

        ],

        onOk: function() {
            var dialog = this;

            if(dialog.getValueOf( 'tab-youtube', 'youtube-url' )) {
                var youtubeUrl = dialog.getValueOf( 'tab-youtube', 'youtube-url' );
                var youtubeId = youtubeUrl.match(/youtu(?:.*\/v\/|.*v\=|\.be\/)([A-Za-z0-9_\-]{11})/)[1];
                var youtubeWidth = dialog.getValueOf( 'tab-youtube', 'youtube-width' );
                var youtubeHeight = dialog.getValueOf( 'tab-youtube', 'youtube-height' );
                editor.insertHtml('<iframe width="'+youtubeWidth+'" height="'+youtubeHeight+'" src="https://www.youtube.com/embed/'+youtubeId+'" frameborder="0" allowfullscreen></iframe>');
            }

            if(dialog.getValueOf( 'tab-vimeo', 'vimeo-url' )) {
                var vimeoUrl = dialog.getValueOf( 'tab-vimeo', 'vimeo-url' );
                var vimeoId = vimeoUrl.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/)[3];
                var vimeoWidth = dialog.getValueOf( 'tab-vimeo', 'vimeo-width' );
                var vimeoHeight = dialog.getValueOf( 'tab-vimeo', 'vimeo-height' );
                editor.insertHtml('<iframe src="https://player.vimeo.com/video/'+vimeoId+'" width="'+vimeoWidth+'" height="'+vimeoHeight+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
            }

            if(dialog.getValueOf( 'tab-dailymotion', 'dailymotion-url' )) {
                var dailymotionUrl = dialog.getValueOf( 'tab-dailymotion', 'dailymotion-url' );
                var dailymotionId = dailymotionUrl.match(/(?:dailymotion\.com(?:\/video|\/hub)|dai\.ly)\/([0-9a-z]+)(?:[\-_0-9a-zA-Z]+#video=([a-z0-9]+))?/g)[0];
                var dailymotionWidth = dialog.getValueOf( 'tab-dailymotion', 'dailymotion-width' );
                var dailymotionHeight = dialog.getValueOf( 'tab-dailymotion', 'dailymotion-height' );
                editor.insertHtml('<iframe frameborder="0" width="'+dailymotionWidth+'" height="'+dailymotionHeight+'" src="//www.dailymotion.com/embed/video/'+dailymotionId+'" allowfullscreen></iframe>');
            }

        },
    };
});