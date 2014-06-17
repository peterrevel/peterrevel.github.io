    window.JST = window.JST || {};
    window.JST['composer/_fail'] = "\u003Cdiv class=\"ui-media\"\u003E\n  \u003Cdiv class=\"ui-media__image new-icon--medium new-icon--caution-triangle\"\u003E\u003C/div\u003E\n  \u003Cdiv class=\"ui-media__main\"\u003E\n    \u003Cb\u003EOops, try again.\u003C/b\u003E\n    {{hint}}\n  \u003C/div\u003E\n\u003C/div\u003E\n\u003Cdiv class=\"close-icon close-error\"\u003E\u003C/div\u003E\n";
window.JST['composer/follow_instructions'] = "Please follow the instructions on the Full Preview page to test your code.";
window.JST['composer/_editor'] = "\u003Cdiv class=\"lesson-file-tabs js-lesson-file-tabs\"\u003E\n  \u003Cdiv class=\"lesson-middle__container lesson-editor-width\"\u003E\n    {{\u003E composer/_tabs}}\n  \u003C/div\u003E\n\u003C/div\u003E\n\u003Cdiv class=\"lesson-ace-editor lesson-editor-width js-ace-editor orion-composer\"\u003E\u003C/div\u003E\n\u003Cdiv class=\"file-container\"\u003E\u003C/div\u003E";
window.JST['composer/_snapshot'] = "";
window.JST['composer/modal'] = "\u003Cdiv class=\"cmpsr-modal {{#large}}cmpsr-modal--large{{/large}} {{#extra_large}}cmpsr-modal--extra-large{{/extra_large}}\"\u003E\n  {{{content}}}\n  \u003Cdiv class=\"cmpsr-modal__footer\"\u003E\n \t{{{footer}}}\n  \u003C/div\u003E\n\u003C/div\u003E\n";
window.JST['composer/codex_error_timeout'] = "The program took too long to finish. Check your code for infinite loops and try again.";
window.JST['composer/_roadmaps_nav'] = "\u003Cdiv class=\"rm-checkpoint-nav-buttons\"\u003E\n    \u003Cspan class=\"rm-checkpoint-nav-buttons__inner\"\u003E\n    {{#current_checkpoint}}\n      {{^is_first_checkpoint}}\n      \u003Ca class=\"bttn baby-blue rm-prev-button js-rm-prev-button\"\u003EPrevious\u003C/a\u003E\n      {{/is_first_checkpoint}}\n      {{^is_last_checkpoint}}\n      \u003Ca class=\"bttn green rm-next-button js-rm-next-button\"\u003ENext\u003C/a\u003E\n      {{/is_last_checkpoint}}\n    {{/current_checkpoint}}\n  \u003C/span\u003E\n\u003C/div\u003E";
window.JST['composer/_bottom_bar'] = "\u003Cdiv class=\"composer-bottom-bar lesson-action-bar__inner\"\u003E\n  \u003Cdiv class=\"button-group--horizontal\"\u003E\n    \u003Ca class=\"ui-button ui-button--medium ui-button--blue--on-dark ui-loading js-submit-code\"\u003E\n      \u003Cdiv class=\"ui-loading__other\"\u003E\n        Save \u0026 Submit Code\n      \u003C/div\u003E\n      \u003Cdiv class=\"ui-loading__image new-icon--small new-icon--gear--white loading-spin\"\u003E\u003C/div\u003E\n    \u003C/a\u003E\n    \u003Ca class=\"ui-button ui-button--medium ui-button--transparent--on-dark js-reset-code reset\"\u003EReset Code\u003C/a\u003E\n    {{#show_answer}}\n      \u003Ca class=\"ui-button ui-button--medium ui-button--gray--on-dark js-show-answer\"\u003EShow Answer\u003C/a\u003E\n    {{/show_answer}}\n    {{#show_test}}\n      \u003Ca class=\"ui-button ui-button--medium ui-button--gray--on-dark js-backtest\"\u003EBacktest\u003C/a\u003E\n    {{/show_test}}\n  \u003C/div\u003E\n    {{#is_server}}\n      \u003Ca class=\"ui-button ui-button--medium ui-button--gray--on-dark lesson-action-bar__view-server js-view-server\"\u003E\n        {{\u003E composer/_bottombar_server_status }}\n      \u003C/a\u003E\n    {{/is_server}}\n\u003C/div\u003E\n{{\u003E composer/_result}}\n";
window.JST['composer/_sidebar'] = "{{#is_web}}\n\u003Cdiv class=\"result-chrome mini-preview\"\u003E\n  {{\u003E composer/_mini_preview}}\n  {{\u003E composer/_err_console}}\n\u003C/div\u003E\n{{/is_web}}\n{{^is_web}}\n  \u003Cdiv class=\"result-chrome\"\u003E\n    \u003Cdiv class=\"js-server-status-container\"\u003E\u003C/div\u003E\n    \u003Cdiv class=\"terminal terminal-right\"\u003E\n      {{\u003E composer/_terminal}}\n    \u003C/div\u003E\n  \u003C/div\u003E\n{{/is_web}}\n{{#is_web}}\n\u003Cdiv class=\"js-composer-actions\"\u003E\n  {{\u003E widgets/actions_list/_actions_list }}\n\u003C/div\u003E\n\n{{/is_web}}\n";
window.JST['composer/test_fn'] = "window.__runner.testWeb({{{body}}}, {{{code}}});";
window.JST['composer/_web_intro'] = "\u003Cdiv class=\"ui-overlay--slow ui-overlay--dark js-tour-overlay\"\u003E\n    \u003Cdiv data-target=\".lesson-left-bar\" data-x-offset=\"60%\" data-y-offset=\"80px\" data-arrowdir=\"left\"\n         class=\"ui-dropdown ui-dropdown--dark ui-dropdown--arrow-on-left lesson-tour-step js-tour-step\"\u003E\n      \u003Cdiv class=\"close-overlay js-close-overlay\"\u003E\u003C/div\u003E\n      \u003Cdiv class=\"ui-dropdown__arrow__container\"\u003E\u003Cdiv class=\"ui-dropdown__arrow\"\u003E\u003C/div\u003E\u003Cdiv class=\"ui-dropdown__arrow-border__container\"\u003E\u003Cdiv class=\"ui-dropdown__arrow-border\"\u003E\u003C/div\u003E\u003C/div\u003E\u003C/div\u003E\n      \u003Cdiv class=\"ui-dropdown__inner\"\u003E\n        \u003Cdiv class=\"lesson-tour-step__header\"\u003EStart Here\u003C/div\u003E\n        \u003Cp\u003EEach lesson starts here. Read the explanation, then follow the instructions underneath. If you get stuck, you can click on the \"Hint\" for help.\u003C/p\u003E\n        \u003Ca class=\"ui-button ui-button--medium ui-button--green--on-dark js-next-step\"\u003ENext\u0026nbsp;\u0026nbsp;\u0026rarr;\u003C/a\u003E\n      \u003C/div\u003E\n    \u003C/div\u003E\n\n    \u003Cdiv data-target=\".js-ace-editor\" data-x-offset=\"360px\" data-y-offset=\"40px\" data-arrowdir=\"top\"\n         class=\"ui-dropdown ui-dropdown--dark ui-dropdown--arrow-on-top lesson-tour-step js-tour-step\"\u003E\n      \u003Cdiv class=\"close-overlay js-close-overlay\"\u003E\u003C/div\u003E\n      \u003Cdiv class=\"ui-dropdown__arrow__container\"\u003E\u003Cdiv class=\"ui-dropdown__arrow\"\u003E\u003C/div\u003E\u003Cdiv class=\"ui-dropdown__arrow-border__container\"\u003E\u003Cdiv class=\"ui-dropdown__arrow-border\"\u003E\u003C/div\u003E\u003C/div\u003E\u003C/div\u003E\n      \u003Cdiv class=\"ui-dropdown__inner\"\u003E\n        \u003Cdiv class=\"lesson-tour-step__header\"\u003EEnter Your Code\u003C/div\u003E\n        \u003Cp\u003EType your response to the instructions here, in your code editor.\u003C/p\u003E\n        \u003Ca class=\"ui-button ui-button--medium ui-button--green--on-dark js-next-step\"\u003ENext\u0026nbsp;\u0026nbsp;\u0026rarr;\u003C/a\u003E\n      \u003C/div\u003E\n    \u003C/div\u003E\n\n    \u003Cdiv data-target=\".lesson-sidebar-container\" data-x-offset=\"40px\" data-y-offset=\"100px\" data-arrowdir=\"right\"\n         class=\"ui-dropdown ui-dropdown--dark ui-dropdown--arrow-on-right lesson-tour-step js-tour-step\"\u003E\n      \u003Cdiv class=\"close-overlay js-close-overlay\"\u003E\u003C/div\u003E\n      \u003Cdiv class=\"ui-dropdown__arrow__container\"\u003E\u003Cdiv class=\"ui-dropdown__arrow\"\u003E\u003C/div\u003E\u003Cdiv class=\"ui-dropdown__arrow-border__container\"\u003E\u003Cdiv class=\"ui-dropdown__arrow-border\"\u003E\u003C/div\u003E\u003C/div\u003E\u003C/div\u003E\n      \u003Cdiv class=\"ui-dropdown__inner\"\u003E\n        \u003Cdiv class=\"lesson-tour-step__header\"\u003ESee What it Does!\u003C/div\u003E\n        \u003Cp\u003EHere's where you can see how your code will render in your browser. This will update as you type.\u003C/p\u003E\n        \u003Ca class=\"ui-button ui-button--medium ui-button--green--on-dark js-next-step\"\u003ENext\u0026nbsp;\u0026nbsp;\u0026rarr;\u003C/a\u003E\n      \u003C/div\u003E\n    \u003C/div\u003E\n    \n    \u003Cdiv data-target=\".js-submit-code\" data-x-offset=\"30%\" data-y-offset=\"0%\" data-arrowdir=\"bottom\"\n         class=\"ui-dropdown ui-dropdown--dark ui-dropdown--arrow-on-bottom lesson-tour-step js-tour-step\"\u003E\n      \u003Cdiv class=\"close-overlay js-close-overlay\"\u003E\u003C/div\u003E\n      \u003Cdiv class=\"ui-dropdown__arrow__container\"\u003E\u003Cdiv class=\"ui-dropdown__arrow\"\u003E\u003C/div\u003E\u003Cdiv class=\"ui-dropdown__arrow-border__container\"\u003E\u003Cdiv class=\"ui-dropdown__arrow-border\"\u003E\u003C/div\u003E\u003C/div\u003E\u003C/div\u003E\n      \u003Cdiv class=\"ui-dropdown__inner\"\u003E\n        \u003Cdiv class=\"lesson-tour-step__header\"\u003ESubmit\u003C/div\u003E\n        \u003Cp class=\"is-hidden-if-small-screen\"\u003EReady to see if your code does what it should? Click \"Save + Submit\" to check your code!\u003C/p\u003E\n        \u003Cp class=\"is-shown-if-small-screen\"\u003EClick \"Save + Submit\" to run your code! Your code\u2019s output will pop up on the screen.\u003C/p\u003E\n        \u003Ca class=\"ui-button ui-button--medium ui-button--green--on-dark js-next-step\"\u003EI'm ready!\u003C/a\u003E\n      \u003C/div\u003E\n    \u003C/div\u003E\n\u003C/div\u003E";
window.JST['composer/trying_connect'] = "\u003Cb\u003ENot connected\u003C/b\u003E \u003Cspan\u003ETrying in \u003Cspan class=\"time\"\u003E{{time}}\u003C/span\u003E... \u003Ca href=\"#\" class=\"try\"\u003ETry now.\u003C/a\u003E\u003C/span\u003E";
window.JST['composer/codex_error_died'] = "Something went wrong :( \u003Cbr/\u003E\nClick Close to try again or refresh the page.";
window.JST['composer/sct_err_warning'] = "Errors like this will pass learners in non-preview mode.";
window.JST['composer/_header'] = "\u003Cdiv class=\"result pass\"\u003Epassed \u003Ca class=\"next\" href=\"#\"\u003Enext checkpoint\u003C/a\u003E\u003C/div\u003E\n\u003Cdiv class=\"result fail\"\u003Efailed\u003C/div\u003E";
window.JST['composer/_sections'] = "\u003Cdiv class=\"lesson-nav ui-dropdown ui-dropdown--light ui-dropdown--checkpoints ui-dropdown--arrow-on-top js-checkpoints\"\u003E\n  \u003Cdiv class=\"ui-dropdown__arrow__container\"\u003E\n    \u003Cdiv class=\"ui-dropdown__arrow\"\u003E\u003C/div\u003E\n    \u003Cdiv class=\"ui-dropdown__arrow-border__container\"\u003E\n      \u003Cdiv class=\"ui-dropdown__arrow-border\"\u003E\u003C/div\u003E\n    \u003C/div\u003E\n  \u003C/div\u003E\n\n  \u003Cdiv class=\"block-list ui-counter ui-counter--bold\"\u003E\n    {{#projects}}\n    \u003Ca class=\"block-list__item ui-media ui-media--reverse lesson-nav__section js-section{{#is_current_project}} is-active{{/is_current_project}}\"\u003E\n      \u003Cdiv class=\"ui-media__image\"\u003E\n        {{#completed}}\n        \u003Cdiv class=\"new-icon new-icon--small new-icon--section--completed\"\u003E\u003C/div\u003E\n        {{/completed}}\n      \u003C/div\u003E\n      \u003Cdiv class=\"ui-media__main\"\u003E\n        {{name}}\n      \u003C/div\u003E\n    \u003C/a\u003E\n    \u003Cdiv class=\"js-section__content\" data-index=\"{{index}}\"\u003E\n      \u003Cdiv class=\"block-list lesson-nav__exercises\"\u003E\n        {{#checkpoints}}\n        \u003Ca class=\"block-list__item ui-media lesson-nav__exercise js-switch-checkpoint\" data-index=\"{{index}}\"\u003E\n          \u003Cdiv class=\"ui-media__image new-icon new-icon--small\n          {{#is_current_checkpoint}} new-icon--checkpoint--current{{/is_current_checkpoint}}\n          {{^is_current_checkpoint}}\n            {{#completed}} new-icon--checkpoint--completed{{/completed}}\n            {{^completed}} new-icon--checkpoint{{/completed}}\n          {{/is_current_checkpoint}}\"\u003E\n          \u003C/div\u003E\n          \u003Cdiv class=\"ui-media__main\"\u003E\n            \u003Cdiv class=\"ui-counter__item\"\u003E\n              {{#is_current_checkpoint}}\n              \u003Cstrong\u003E{{name}}\u003C/strong\u003E\n              {{/is_current_checkpoint}}\n              {{^is_current_checkpoint}}\n              {{name}}\n              {{/is_current_checkpoint}}\n            \u003C/div\u003E\n          \u003C/div\u003E\n        \u003C/a\u003E\n        {{/checkpoints}}\n      \u003C/div\u003E\n    \u003C/div\u003E\n    {{/projects}}\n    {{#author}}\n    \u003Cdiv class=\"block-list__item\"\u003E\n      \u003Cdiv class=\"lesson-nav__meta\"\u003ECourse by {{handle}}\u003C/div\u003E\n    \u003C/div\u003E\n    {{/author}}\n  \u003C/div\u003E\n\u003C/div\u003E";
window.JST['composer/_educational'] = "{{\u003E composer/_sections}}\n\u003Cdiv class=\"ui-overlay ui-overlay--dark js-checkpoints-overlay\"\u003E\u003C/div\u003E\n\u003Cdiv class=\"lesson-left-bar__header\"\u003E\n\n  \u003Cdiv class=\"article__inner\"\u003E\n    \u003Ca class=\"ui-button ui-button--small ui-button--round ui-button--transparent lesson__show-checkpoints js-show-checkpoints\"\u003E\n      {{course_exercises_index}}/{{course_exercises_total}}\n      \u003Cdiv class=\"ui-button__dropdown-arrow\"\u003E\u003C/div\u003E\n    \u003C/a\u003E\n    \u003Cdiv class=\"lesson__course-name one-line-text js-course-name\"\u003E{{course_name}}\u003C/div\u003E\n    \u003Cdiv class=\"lesson-left-bar__toggle js-toggle-left-bar\"\u003E\n      \u003Cdiv class=\"new-icon--small new-icon--arrow-right\"\u003E\u003C/div\u003E\n    \u003C/div\u003E\n  \u003C/div\u003E\n\u003C/div\u003E\n\u003Cdiv class=\"lesson-checkpoint__wrapper\"\u003E\n  {{#completed}}\n    \u003Cdiv class=\"lesson-completed-ribbon\" title=\"You've completed this lesson!\"\u003E\u003C/div\u003E\n  {{/completed}}\n  \u003Cdiv class=\"lesson-checkpoint nano\"\u003E\n    \u003Cdiv class=\"nano__content content\"\u003E\n      \u003Cdiv class=\"lesson-checkpoint__inner\"\u003E\n        \u003Cdiv class=\"article__inner\"\u003E\n          \u003Cdiv class=\"article__header\"\u003E\n            \u003Cdiv class=\"lesson-checkpoint__name\"\u003E{{name}}\u003C/div\u003E\n          \u003C/div\u003E\n          \u003Cdiv class=\"article__content\"\u003E\n            {{{entry_html}}}\n          \u003C/div\u003E\n        \u003C/div\u003E\n        \u003Cdiv class=\"lesson-checkpoint__instructions\"\u003E\n          \u003Cdiv class=\"article__inner lesson-checkpoint__instructions__header\"\u003E\n            \u003Cdiv class=\"block-label--light-blue\"\u003EInstructions\u003C/div\u003E\n          \u003C/div\u003E\n          \u003Cdiv class=\"article__inner\"\u003E\n            {{{instruction_html}}}\n            {{#hint}}\n              \u003Cdiv class=\"ui-accordian ui-accordian--lesson\"\u003E\n                \u003Cdiv class=\"ui-accordian__inner\"\u003E\n                  \u003Ca href=\"#\" class=\"ui-accordian__trigger ui-media\"\u003E\n                    \u003Cdiv class=\"ui-media__image new-icon--small new-icon--center new-icon--circle--blue\"\u003E?\u003C/div\u003E\n                    \u003Cdiv class=\"ui-media__main\"\u003E\n                      \u003Cspan class=\"is-hidden-if-is-expanded\"\u003E\u003Cb\u003EStuck?\u003C/b\u003E Get a hint!\u003C/span\u003E\n                      \u003Cspan class=\"is-shown-if-is-expanded--inline\"\u003E\u003Cb\u003EHint\u003C/b\u003E\u003C/span\u003E\n                    \u003C/div\u003E\n                  \u003C/a\u003E\n                  \u003Cdiv class=\"ui-accordian__content has-markdown\"\u003E\n                    {{{hint_html}}}\n                  \u003C/div\u003E\n                \u003C/div\u003E\n              \u003C/div\u003E\n            {{/hint}}\n          \u003C/div\u003E\n        \u003C/div\u003E\n      \u003C/div\u003E\n    \u003C/div\u003E\n  \u003C/div\u003E\n\u003C/div\u003E\n";
window.JST['composer/_bottombar_server_status'] = "\u003Cdiv\n  class=\"server-status__status-icon\n         server-status--bottom-bar__status-icon\n         new-icon new-icon--small\n         {{#is_error}}error{{/is_error}}\n         {{#is_running}}running{{/is_running}}\"\u003E\n\u003C/div\u003EServer\n";
window.JST['composer/sct_waiting'] = "SCT waiting for an asynchronous event: {{event}}";
window.JST['composer/failed_connect'] = "Failed to connect. \u003Ca href=\"http://help.codecademy.com/customer/portal/articles/1080855-connection-timeouts-with-certain-courses\"\u003ELearn more.\u003C/a\u003E";
window.JST['composer/codex_error_auth'] = "Unauthorized access. Refresh the page to try again.";
window.JST['composer/donors_choose_badge_modal'] = "\u003Cdiv class=\"cmpsr-modal-header\"\u003E\n  \u003Cp\u003EYou earned a badge!\u003C/p\u003E\n\u003C/div\u003E\n\n\u003Cdiv class=\"cmpsr-modal-content\"\u003E\n  {{name}}\n  \u003Cimg class=\"modal-badge\" src=\"{{badge_url}}\"\u003E\n\u003Cdiv class=\"social_button\" data-type=\"twitter\" id=\"twitter_button\"\u003E\n\t\u003Ciframe allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\" src=\"http://platform.twitter.com/widgets/tweet_button.1360972506.html#_=1361925047653\u0026amp;count=horizontal\u0026amp;id=twitter-widget-0\u0026amp;lang=en\u0026amp;original_referer=http%3A%2F%2Fwww.codecademy.com%2Ftracks%2Fapis\u0026amp;related=codecademy\u0026amp;size=m\u0026amp;text=I%20just%20unlocked%20the%20{{name}}%20badge%20on%20@codecademy!\u0026amp;url=http%3A%2F%2Fwww.codecademy.com\u0026amp;via=codecademy\" class=\"twitter-share-button twitter-count-horizontal\" style=\"width: 107px; height: 20px;\" title=\"Twitter Tweet Button\" data-twttr-rendered=\"true\"\u003E\u003C/iframe\u003E\n\t\u003Cscript\u003E\n\t//\u003C![CDATA[\n\t  var twttr = (twttr || undefined);\n\t  if (twttr) twttr.widgets.load();\n\t  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=\"//platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");\n\t//]]\u003E\n\t\u003C/script\u003E\n\u003C/div\u003E\n\u003Cdiv class=\"social_button\" data-type=\"facebook\"\u003E\n\t\u003Cfb:like href=\"http://www.facebook.com/codecademy\" send=\"true\" width=\"100\" layout=\"button_count\" show_faces=\"false\" \u003C=\"\" fb:like=\"\" fb-xfbml-state=\"rendered\" class=\"fb_edge_widget_with_comment fb_iframe_widget\"\u003E\u003Cspan style=\"height: 20px; width: 138px;\"\u003E\u003Ciframe id=\"fa6ac1d0\" name=\"f2172ef5c\" scrolling=\"no\" style=\"border: none; overflow: hidden; height: 20px; width: 138px;\" title=\"Like this content on Facebook.\" class=\"fb_ltr\" src=\"http://www.facebook.com/plugins/like.php?api_key=212500508799908\u0026amp;locale=en_US\u0026amp;sdk=joey\u0026amp;channel_url=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D18%23cb%3Df2c4f2b3ac%26origin%3Dhttp%253A%252F%252Fwww.codecademy.com%252Ff11b161854%26domain%3Dwww.codecademy.com%26relation%3Dparent.parent\u0026amp;href=http%3A%2F%2Fwww.facebook.com%2Fcodecademy\u0026amp;node_type=link\u0026amp;width=150\u0026amp;layout=button_count\u0026amp;colorscheme=light\u0026amp;show_faces=false\u0026amp;send=true\u0026amp;extended_social_context=false\"\u003E\u003C/iframe\u003E\u003C/span\u003E\u003C/fb:like\u003E\n\u003C/div\u003E\n\u003C!-- Place this tag where you want the +1 button to render. --\u003E\n\u003Cdiv class=\"g-plusone\" data-annotation=\"inline\" data-width=\"202\" data-href=\"http://codecademy.com/donors-choose\"\u003E\u003C/div\u003E\n\n\u003C!-- Place this tag after the last +1 button tag. --\u003E\n\u003Cscript type=\"text/javascript\"\u003E\n  (function() {\n    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;\n    po.src = 'https://apis.google.com/js/platform.js';\n    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);\n  })();\n\u003C/script\u003E\n\u003C/div\u003E";
window.JST['composer/homepage_hint'] = "\u003Cspan style=\"color: crimson\"\u003EOops, try again.\u003Cbr\u003E{{#hint}}\u003Cspan style=\"color: #F80\"\u003E{{hint}}\u003C/span\u003E{{/hint}}\u003C/span\u003E\n";
window.JST['composer/error_modal'] = "\u003Cdiv class=\"cmpsr-modal-header\"\u003E\n  \u003Cp\u003EError\u003C/p\u003E\n\u003C/div\u003E\n\u003Cdiv class=\"cmpsr-modal-content error\"\u003E\n  \u003Cbr/\u003E\n  \u003Cp\u003E{{{msg}}}\u003C/p\u003E\n\u003C/div\u003E";
window.JST['composer/_mini_preview'] = "\u003Cdiv class=\"result-container frame-wrap js-frame-wrap\"\u003E\n\u003C/div\u003E\n";
window.JST['composer/modal_donors_choose'] = "\u003Cdiv class=\"cmpsr-modal cmpsr-modal--large\"\u003E\n  \u003Cdiv class=\"cmpsr-modal-header cmpsr-modal-header--donorschoose\"\u003E\n    \u003Ch3\u003ECongratulations!\u003C/h3\u003E\n    {{#teacher_required}}\n        \u003Cp\u003EYou're making great progress!\u003C/p\u003E\n    {{/teacher_required}}\n    {{^teacher_required}}\n        \u003Cp\u003EYou've completed the JavaScript track!\u003C/p\u003E\n    {{/teacher_required}}\n  \u003C/div\u003E\n  \u003Cdiv class=\"cmpsr-modal-content cmpsr-modal-content--donorschoose cmpsr-modal-content--donorschoose--code\"\u003E\n    \u003Cp\u003EYou've also unlocked a \u003Cbr\u003E\n      \u003Cspan style=\"font-size: 200%; color: rgb(89, 161, 201);\"\u003E{{text}}\u003C/span\u003E\u003Cbr\u003E\n      DonorsChoose.org gift code!\n    \u003C/p\u003E\n  \u003C/div\u003E\n  \u003Cdiv class=\"cmpsr-modal-content cmpsr-modal-content--donorschoose cmpsr-modal-content--donorschoose--email\"\u003E\n    {{#teacher_required}}\n    Before we can email your gift code to you, what is your teacher's last name?\n\n    \u003Cform action=\"/donors-choose/{{dcs_id}}\" accept-charset=\"UTF-8\" enctype=\"multipart/form-data\" method=\"post\" id=\"donors_choose_student_form_teacher\"\u003E\n      \u003Cinput type=\"text\" name=\"donors_choose_student[teacher_name]\" id=\"donors_choose_student_teacher_name\"\u003E\n      \u003Cinput type=\"submit\" value=\"Submit\"\u003E\n    \u003C/form\u003E\n    {{/teacher_required}}\n    {{^teacher_required}}\n    Way to go! DonorsChoose.org will email your gift code to you within 7 days.\n    {{/teacher_required}}\n  \u003C/div\u003E\n  \u003Cdiv class=\"cmpsr-modal__footer cmpsr-modal__footer--donorschoose {{#teacher_required}}hidden{{/teacher_required}}\"\u003E\n    \u003Ca class=\"bttn large close-modal\"\u003EGreat, continue learning\u003C/a\u003E\n  \u003C/div\u003E\n\u003C/div\u003E\n";
window.JST['composer/_backtest_content'] = "\u003Ch2 class=\"backtest__heading hljs--ace-dark\"\u003E\n  Backtests\n  \u003Cdiv class=\"js-close-backtest new-icon--close--white new-icon--small backtest__close-button new-icon--clickable\"\u003E\u003C/div\u003E\n  \u003Cul class=\"js-backtest-results\"\u003E\n  \u003C/ul\u003E\n\u003C/h2\u003E\n";
window.JST['composer/_file'] = "\u003Cdiv class=\"lesson-file-tabs__tab js-file-tab tab cf\" data-type=\"{{filename}}\"\u003E\n  \u003Cdiv class=\"new-icon--small--center new-icon--lesson-file fl\"\u003E\u003C/div\u003E\n  \u003Cdiv class=\"fl\"\u003E{{filename}}\u003C/div\u003E\n\u003C/div\u003E";
window.JST['composer/defined_syntax_hint'] = "There was a problem with your syntax.";
window.JST['composer/_success'] = "\u003Cdiv class=\"lesson-action-bar__inner__wrapper\"\u003E\n  \u003Cdiv class=\"ui-media\"\u003E\n    \u003Cdiv class=\"ui-media__image new-icon--medium new-icon--state--passed\"\u003E\u003C/div\u003E\n    \u003Cdiv class=\"ui-media__main\"\u003E\n      {{#has_next}}\n\n        \u003Cspan class=\"spacer--right\"\u003EWay to go!\u003C/span\u003E\n        \u003Ca class=\"ui-button ui-button--medium ui-button--green--on-dark js-goto-next-checkpoint\"\u003EStart Next Lesson\u003C/a\u003E\n\n      {{/has_next}}\n\n      {{^has_next}}\n        {{! if there is no exercise to continue to: check if we should link to next section or next course }}\n\n        {{#prompt_signup}}\n          {{! if anon }}\n\n          {{#has_successor}}\n            {{! if there is a section to continue to }}\n            \u003Cspan class=\"spacer--right\"\u003ECongratulations, you've finished this section!\u003C/span\u003E\n            \u003Ca class=\"ui-button ui-button--medium ui-button--green--on-dark sign_up js-anon-signup-takeup\" href=\"/register/sign_up\"\u003ESign up\u003C/a\u003E \u003Cspan class=\"spacer--right\"\u003Eto save your progress. \u003Ca class=\"plain js-anon-signup-continue js-next-section\"\u003Econtinue to the next section \u0026rarr;\u003C/a\u003E\u003C/span\u003E\n          {{/has_successor}}\n\n          {{^has_successor}}\n            {{! if this was the last section in this course }}\n            \u003Cspan class=\"spacer--right\"\u003ECongratulations, you've finished this course!\u003C/span\u003E\n            {{#continue_to_course}}\n              \u003Ca class=\"ui-button ui-button--medium ui-button--green--on-dark sign_up js-anon-signup-takeup\" href=\"/register/sign_up\"\u003ESign up\u003C/a\u003E \u003Cspan class=\"spacer--right\"\u003Eto save your progress. \u003Ca class=\"plain js-anon-signup-continue\" href=\"{{url}}\"\u003Econtinue to the next course \u0026rarr;\u003C/a\u003E\u003C/span\u003E\n            {{/continue_to_course}}\n            {{^continue_to_course}}\n              \u003Ca class=\"ui-button ui-button--medium ui-button--green--on-dark sign_up js-anon-signup-takeup\" href=\"/register/sign_up\"\u003ESign up\u003C/a\u003E \u003Cspan class=\"spacer--right\"\u003Eto save your progress.\u003C/span\u003E\n            {{/continue_to_course}}\n          {{/has_successor}}\n        {{/prompt_signup}}\n\n        {{^prompt_signup}}\n          {{! if registered }}\n\n          {{#has_successor}}\n            {{! if there is a section to continue to }}\n            \u003Cspan class=\"spacer--right\"\u003ECongratulations, you've finished this section!\u003C/span\u003E\n            {{#has_successor}}\u003Ca class=\"ui-button ui-button--medium ui-button--green--on-dark js-next-section\"\u003ENext: {{next_section_name}}\u003Cspan style=\"font-weight: normal\"\u003E\u003C/span\u003E\u0026rarr;\u003C/a\u003E{{/has_successor}}\n          {{/has_successor}}\n\n          {{^has_successor}}\n            {{! if this was the last section in the course }}\n\n            \u003Cspan class=\"spacer--right\"\u003ECongratulations, you've finished this course!\u003C/span\u003E\n\n              {{#continue_to_course}}\n                {{! if there's a following course, hit that }}\n                \u003Ca class=\"ui-button ui-button--medium ui-button--green--on-dark\" href=\"{{url}}\"\u003ENext Course: {{name}} \u0026rarr;\u003C/a\u003E\n              {{/continue_to_course}}\n\n              {{^continue_to_course}}\n                {{! if not, just give a return button }}\n                {{#return_to}}\n                  {{#goal_url}}\n                    \u003Ca class=\"ui-button ui-button--medium ui-button--green--on-dark\" href=\"{{goal_url}}\"\u003EView Goal Overview\u003C/a\u003E\n                  {{/goal_url}}\n                  {{^goal_url}}\n                    {{#content_url}}\n                      \u003Ca class=\"ui-button ui-button--medium ui-button--green--on-dark\" href=\"{{content_url}}\"\u003E\n                        Continue\n                      \u003C/a\u003E\n                    {{/content_url}}\n                    {{^content_url}}\n                      \u003Ca class=\"ui-button ui-button--medium ui-button--green--on-dark\" href=\"{{url}}\"\u003EView Course Overview\u003C/a\u003E\n                    {{/content_url}}\n                  {{/goal_url}}\n\n                {{/return_to}}\n              {{/continue_to_course}}\n\n          {{/has_successor}}\n\n        {{/prompt_signup}}\n      {{/has_next}}\n    \u003C/div\u003E\n  \u003C/div\u003E\n  \u003Cdiv class=\"close-icon close-success\"\u003E\u003C/div\u003E\n\u003C/div\u003E\n";
window.JST['composer/_checkpoint_set'] = "";
window.JST['composer/_proxy_server_url'] = "http://{{ app_id }}.learncoder.com";
window.JST['composer/fb_publish_modal'] = "\u003Cdiv class=\"cmpsr-modal-header\"\u003E\n  \u003Cp\u003EShow off your work!\u003C/p\u003E\n\u003C/div\u003E\n\n\u003Cdiv class=\"cmpsr-modal-content  cmpsr-modal__content--fb-modal\"\u003E\n  Share your accomplishments with friends by posting badges to a gallery on your Facebook timeline. Don't worry, you can change your sharing preferences at any time under account settings.\n  \u003Cbr/\u003E\n  \u003Cimg style='display:block; margin: 25px auto 30px;' src='/assets/badge_banner.jpg' /\u003E\n\u003C/div\u003E\n\n";
window.JST['composer/modal_footer'] = "{{#confirmText}}\n  \u003Ca class=\"bttn large yes\"\u003E{{confirmText}}\u003C/a\u003E\n{{/confirmText}}\n  \u003Ca class=\"bttn large close-modal\"\u003EClose\u003C/a\u003E";
window.JST['composer/modal_donors_choose_footer'] = "  \u003Ca class=\"bttn large close-modal\"\u003EClose\u003C/a\u003E";
window.JST['composer/_cli_intro'] = "\u003Cdiv class=\"ui-overlay--slow ui-overlay--dark js-tour-overlay\"\u003E\n    \u003Cdiv data-target=\".lesson-left-bar\" data-x-offset=\"60%\" data-y-offset=\"80px\" data-arrowdir=\"left\"\n         class=\"ui-dropdown ui-dropdown--dark ui-dropdown--arrow-on-left lesson-tour-step js-tour-step\"\u003E\n      \u003Cdiv class=\"close-overlay js-close-overlay\"\u003E\u003C/div\u003E\n      \u003Cdiv class=\"ui-dropdown__arrow__container\"\u003E\u003Cdiv class=\"ui-dropdown__arrow\"\u003E\u003C/div\u003E\u003Cdiv class=\"ui-dropdown__arrow-border__container\"\u003E\u003Cdiv class=\"ui-dropdown__arrow-border\"\u003E\u003C/div\u003E\u003C/div\u003E\u003C/div\u003E\n      \u003Cdiv class=\"ui-dropdown__inner\"\u003E\n        \u003Cdiv class=\"lesson-tour-step__header\"\u003EStart Here\u003C/div\u003E\n        \u003Cp\u003EEach lesson starts here. Read the explanation, then follow the instructions underneath. If you get stuck, you can click on the \"Hint\" for help.\u003C/p\u003E\n        \u003Ca class=\"ui-button ui-button--medium ui-button--green--on-dark js-next-step\"\u003ENext\u0026nbsp;\u0026nbsp;\u0026rarr;\u003C/a\u003E\n      \u003C/div\u003E\n    \u003C/div\u003E\n\n    \u003Cdiv data-target=\".js-ace-editor\" data-x-offset=\"360px\" data-y-offset=\"40px\" data-arrowdir=\"top\"\n         class=\"ui-dropdown ui-dropdown--dark ui-dropdown--arrow-on-top lesson-tour-step js-tour-step\"\u003E\n      \u003Cdiv class=\"close-overlay js-close-overlay\"\u003E\u003C/div\u003E\n      \u003Cdiv class=\"ui-dropdown__arrow__container\"\u003E\u003Cdiv class=\"ui-dropdown__arrow\"\u003E\u003C/div\u003E\u003Cdiv class=\"ui-dropdown__arrow-border__container\"\u003E\u003Cdiv class=\"ui-dropdown__arrow-border\"\u003E\u003C/div\u003E\u003C/div\u003E\u003C/div\u003E\n      \u003Cdiv class=\"ui-dropdown__inner\"\u003E\n        \u003Cdiv class=\"lesson-tour-step__header\"\u003EEnter Your Code\u003C/div\u003E\n        \u003Cp\u003EType your response to the instructions here, in your code editor.\u003C/p\u003E\n        \u003Ca class=\"ui-button ui-button--medium ui-button--green--on-dark js-next-step\"\u003ENext\u0026nbsp;\u0026nbsp;\u0026rarr;\u003C/a\u003E\n      \u003C/div\u003E\n    \u003C/div\u003E\n\n    \u003Cdiv data-target=\".js-submit-code\" data-x-offset=\"30%\" data-y-offset=\"0%\" data-arrowdir=\"bottom\"\n         class=\"ui-dropdown ui-dropdown--dark ui-dropdown--arrow-on-bottom lesson-tour-step js-tour-step\"\u003E\n      \u003Cdiv class=\"close-overlay js-close-overlay\"\u003E\u003C/div\u003E\n      \u003Cdiv class=\"ui-dropdown__arrow__container\"\u003E\u003Cdiv class=\"ui-dropdown__arrow\"\u003E\u003C/div\u003E\u003Cdiv class=\"ui-dropdown__arrow-border__container\"\u003E\u003Cdiv class=\"ui-dropdown__arrow-border\"\u003E\u003C/div\u003E\u003C/div\u003E\u003C/div\u003E\n      \u003Cdiv class=\"ui-dropdown__inner\"\u003E\n        \u003Cdiv class=\"lesson-tour-step__header\"\u003ESubmit\u003C/div\u003E\n        \u003Cp class=\"is-hidden-if-small-screen\"\u003EReady to see if your code does what it should? Click \"Save + Submit\" to check your code!\u003C/p\u003E\n        \u003Cp class=\"is-show-if-small-screen\"\u003EClick \"Save + Submit\" to run your code! Your code\u2019s output will pop up on the screen.\u003C/p\u003E\n        \u003Ca class=\"ui-button ui-button--medium ui-button--green--on-dark js-next-step\"\u003ENext\u0026nbsp;\u0026nbsp;\u0026rarr;\u003C/a\u003E\n      \u003C/div\u003E\n    \u003C/div\u003E\n\u003C/div\u003E\n";
window.JST['composer/_flash_card_content'] = "\u003Ch2 class=\"glossary-flash-card__heading hljs--ace-dark\"\u003E\n  \u003Cstrong\u003E{{ category }}:\u003C/strong\u003E\n  Glossary Reference\n  \u003Cdiv class=\"js-close-flash-card new-icon--close--white new-icon--small glossary-flash-card__close-button new-icon--clickable\"\u003E\u003C/div\u003E\n\u003C/h2\u003E\n\u003Cpre class=\"glossary-flash-card__example hljs-snippet hljs-snippet--theme-ace-dark\"\u003E\u003Ccode class=\"javascript\"\u003E{{{ example }}}\u003C/code\u003E\u003C/pre\u003E\n\u003Cdiv class=\"glossary-flash-card__read-more\"\u003E\n  Having trouble with syntax?\n  \u003Ca href=\"/glossary/{{ language }}/#{{ hyphenated_category }}\" target=\"_blank\" class=\"js-flash-card-takeup\"\u003ERead more in the glossary \u0026raquo;\u003C/a\u003E\n\u003C/div\u003E\n";
window.JST['composer/_result'] = "\u003Cdiv class=\"lesson-action-bar__state lesson-action-bar__inner lesson-action-bar__inner--pass js-state--passed\"\u003E\u003C/div\u003E\n\u003Cdiv class=\"lesson__state lesson__state--failed js-state--failed\"\u003E\u003C/div\u003E\n\u003Cdiv class=\"lesson-action-bar__state lesson-action-bar__state--back lesson-action-bar__inner js-state--back\"\u003E\n  \u003Ca class=\"ui-button ui-button--medium ui-button--gray--on-dark js-back-to-editor back-editor\"\u003EBack to Editor\u003C/a\u003E\n\u003C/div\u003E";
window.JST['composer/badge_modal'] = "\u003Cdiv class=\"cmpsr-modal-header\"\u003E\n  \u003Cp\u003EYou earned a badge!\u003C/p\u003E\n\u003C/div\u003E\n\n\u003Cdiv class=\"cmpsr-modal-content\"\u003E\n  {{name}}\n  \u003Cimg class=\"modal-badge\" src=\"{{badge_url}}\"\u003E\n\u003Cdiv class=\"social_button\" data-type=\"twitter\" id=\"twitter_button\"\u003E\n\u003Ciframe allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\" src=\"http://platform.twitter.com/widgets/tweet_button.1360972506.html#_=1361925047653\u0026amp;count=horizontal\u0026amp;id=twitter-widget-0\u0026amp;lang=en\u0026amp;original_referer=http%3A%2F%2Fwww.codecademy.com%2Ftracks%2Fapis\u0026amp;related=codecademy\u0026amp;size=m\u0026amp;text=I%20just%20unlocked%20the%20{{name}}%20badge%20on%20@codecademy!\u0026amp;url=http%3A%2F%2Fwww.codecademy.com\u0026amp;via=codecademy\" class=\"twitter-share-button twitter-count-horizontal\" style=\"width: 107px; height: 20px;\" title=\"Twitter Tweet Button\" data-twttr-rendered=\"true\"\u003E\u003C/iframe\u003E\n\u003Cscript\u003E\n//\u003C![CDATA[\n  var twttr = (twttr || undefined);\n  if (twttr) twttr.widgets.load();\n  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=\"//platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");\n//]]\u003E\n\u003C/script\u003E\n\u003C/div\u003E\n\u003Cdiv class=\"social_button\" data-type=\"facebook\"\u003E\n\u003Cfb:like href=\"http://www.facebook.com/codecademy\" send=\"true\" width=\"100\" layout=\"button_count\" show_faces=\"false\" \u003C=\"\" fb:like=\"\" fb-xfbml-state=\"rendered\" class=\"fb_edge_widget_with_comment fb_iframe_widget\"\u003E\u003Cspan style=\"height: 20px; width: 138px;\"\u003E\u003Ciframe id=\"fa6ac1d0\" name=\"f2172ef5c\" scrolling=\"no\" style=\"border: none; overflow: hidden; height: 20px; width: 138px;\" title=\"Like this content on Facebook.\" class=\"fb_ltr\" src=\"http://www.facebook.com/plugins/like.php?api_key=212500508799908\u0026amp;locale=en_US\u0026amp;sdk=joey\u0026amp;channel_url=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D18%23cb%3Df2c4f2b3ac%26origin%3Dhttp%253A%252F%252Fwww.codecademy.com%252Ff11b161854%26domain%3Dwww.codecademy.com%26relation%3Dparent.parent\u0026amp;href=http%3A%2F%2Fwww.facebook.com%2Fcodecademy\u0026amp;node_type=link\u0026amp;width=150\u0026amp;layout=button_count\u0026amp;colorscheme=light\u0026amp;show_faces=false\u0026amp;send=true\u0026amp;extended_social_context=false\"\u003E\u003C/iframe\u003E\u003C/span\u003E\u003C/fb:like\u003E\u003C/div\u003E\n\u003C/div\u003E\n\u003Cdiv\u003E\n\t\n\u003C/div\u003E";
window.JST['composer/_terminal_server_status'] = "\u003Cdiv class=\"server-status--terminal\"\u003E\n  \u003Cdiv class=\"server-status--terminal__status-icon\n              server-status__status-icon\n              new-icon\n              new-icon--small\n              {{#is_error}}error{{/is_error}}\n              {{#is_running}}running{{/is_running}}\"\u003E\n  \u003C/div\u003E\n\n  \u003Cdiv class=\"server-status--terminal__content\"\u003E\n    \u003Cspan class=\"server-status--terminal__content__title\"\u003EServer: \u003C/span\u003E\n\n    \u003Cspan class=\"server-status--terminal__content__server-link\"\u003E\n      \u003Ca href=\"{{ server_url }}\" target=\"_blank\" \u003E{{ server_url }}\u003C/a\u003E\n    \u003C/span\u003E\n  \u003C/div\u003E\n\n\u003C/div\u003E";
window.JST['composer/sct_warning'] = "Reference Errors in SCT will fail students in non-preview mode. Please handle errors in the SCT or throw a different error hint.";
window.JST['composer/_tabs'] = "\u003Cdiv class=\"lesson-file-tabs__wrapper\"\u003E\n  \u003Cdiv\u003E\n    {{#default_files}}\n      {{\u003E composer/_file}}\n    {{/default_files}}\n  \u003C/div\u003E\n  \u003Cdiv id=\"composer-view-project-button-for-narrow-screen\"\u003E\n    {{# preview_button }}\n    \u003Cdiv class=\"actions-list actions-list--composer-tabs codebit-actions-management actions-list--individual-buttons\"\u003E\n      \u003Cdiv\u003E\n        \u003Cdiv class=\"js-view-project actions-list__button actions-entity has-hover ui-media\"\u003E\n          \u003Cdiv class=\"ui-media__image actions-list__icon cc-icon\"\u003Eproject\u003C/div\u003E\n          \u003Cdiv class=\"ui-media__main actions-list__text\"\u003EView Preview\u003C/div\u003E\n        \u003C/div\u003E\n      \u003C/div\u003E\n    \u003C/div\u003E\n    {{/ preview_button }}\n  \u003C/div\u003E\n\u003C/div\u003E\n";
window.JST['composer/_terminal'] = "\u003Cdiv class=\"result-container console\"\u003E\u003C/div\u003E";
window.JST['composer/defined_hint'] = "Make sure you have defined all the variables!\n";
window.JST['composer/_checkpoint'] = "";
window.JST['composer/modal_codebit_footer'] = "\u003Cdiv class=\"codebit-modal-footer\"\u003E\n\n  \u003Cdiv class=\"codebit-modal-footer__desc\"\u003EWe added this project to your profile, so you can continue playing with it.\u003C/div\u003E\n\n  \u003Ca class=\"bttn large codebit-modal-footer__green-button\" href=\"{{codebit_path}}\"\u003ESee Project\u003C/a\u003E\n  \u003Ca class=\"bttn large codebit-modal-footer__gray-button\" href=\"{{goal_path}}\"\u003EGoal Overview\u003C/a\u003E\n\n\u003C/div\u003E";
window.JST['composer/init_mini_web.js'] = "(function () {\n  var options = { width: {{width}} };\n  if (window.__runner) {\n    window.__runner.initMiniWeb(options);\n  } else {\n    window.__MiniWeb__ = { width: {{width}} };\n  }\n})();\n";
window.JST['composer/_err_console'] = "\u003Cdiv class=\"result-chrome widget-err-console js-err-console is-hidden\"\u003E\n  \u003Cdiv class=\"result-container__js-errors-console__msgs js-err-msgs\"\u003E\n  \u003C/div\u003E\n\u003C/div\u003E\n";
window.JST['composer/_links'] = "\u003Cdiv class=\"lesson-links\"\u003E\n  \u003Ca target=\"_blank\" class=\"lesson-links__link\" href=\"{{qa_url}}\"\u003EQ\u0026A Forum\u003C/a\u003E\n  \u003Ca target=\"_blank\" class=\"lesson-links__link\" href=\"{{glossary_url}}\"\u003EGlossary\u003C/a\u003E\n\u003C/div\u003E";
window.JST['composer/_backtest_result_content'] = "\u003Cpre class=\"backtest__code hljs-snippet hljs-snippet--theme-ace-dark\"\u003E\u003Ccode class=\"javascript\"\u003E{{{ code }}}\u003C/code\u003E\u003C/pre\u003E\n{{#pass}}\n  \u003Cp\u003E\n  Pass!\n  \u003C/p\u003E\n{{/pass}}\n{{#hint}}\n  \u003Cdiv class=\"backtest__failed\"\u003E\n    \u003Cdiv class=\"ui-media__image new-icon--medium new-icon--caution-triangle\"\u003E\u003C/div\u003E\n    \u003Cdiv class=\"ui-media__main\"\u003E\n      \u003Cb\u003EOops, try again.\u003C/b\u003E\n      {{hint}}\n    \u003C/div\u003E\n  \u003C/div\u003E\n{{/hint}}\n";
window.JST['composer/_repo'] = "";
