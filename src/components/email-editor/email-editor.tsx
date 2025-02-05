import { Editor } from "@tinymce/tinymce-react";

// TinyMCE so the global var exists
import "tinymce/tinymce";
// DOM model
import "tinymce/models/dom/model";
// Theme
import "tinymce/themes/silver";
// Toolbar icons
import "tinymce/icons/default";
// Editor styles
import "tinymce/skins/ui/oxide/skin";

// importing the plugin js.
// if you use a plugin that is not listed here the editor will fail to load
import "tinymce/plugins/advlist";
import "tinymce/plugins/anchor";
import "tinymce/plugins/autolink";
import "tinymce/plugins/autoresize";
import "tinymce/plugins/autosave";
import "tinymce/plugins/charmap";
import "tinymce/plugins/code";
import "tinymce/plugins/codesample";
import "tinymce/plugins/directionality";
import "tinymce/plugins/emoticons";
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/help";
import "tinymce/plugins/help/js/i18n/keynav/en";
import "tinymce/plugins/image";
import "tinymce/plugins/importcss";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/link";
import "tinymce/plugins/lists";
import "tinymce/plugins/media";
import "tinymce/plugins/nonbreaking";
import "tinymce/plugins/pagebreak";
import "tinymce/plugins/preview";
import "tinymce/plugins/quickbars";
import "tinymce/plugins/save";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/table";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/visualchars";
import "tinymce/plugins/wordcount";

// importing plugin resources
import "tinymce/plugins/emoticons/js/emojis";

// Content styles, including inline UI like fake cursors
import "tinymce/skins/content/default/content";
import "tinymce/skins/ui/oxide/content";

// custom css
import "./email-editor.scss";

type EditorAPI = Parameters<
  NonNullable<React.ComponentProps<typeof Editor>["onInit"]>
>[1];

type Props = {
  editor: {
    current: EditorAPI | null;
  };
};

export default function EmailEditor(props: Props) {
  return (
    <Editor
      licenseKey="gpl"
      onInit={(_, editor) => (props.editor.current = editor)}
      init={{
        height: 480,
        menubar: false,
        statusbar: false,
        plugins: ["preview", "image", "link", "lists", "advlist", "table"],
        toolbar:
          "undo redo removeformat | " +
          "fontfamily fontsize | " +
          "bold italic underline strikethrough | " +
          "forecolor backcolor | " +
          "align bullist numlist outdent indent lineheight | " +
          "image table | " +
          "emoticons code link | " +
          "preview",
        content_style: "body { font-family:Arial,sans-serif; font-size:14px; }",
        toolbar_mode: "sliding",
        contextmenu: false,
        language: "zh_CN",
        language_url: "/zh_CN.js",
        file_picker_callback: (callback, _, meta) => {
          if (meta.filetype === "image") {
            callback("https://www.google.com/logos/google.jpg", {
              alt: "My alt text",
            });
          }
        },
      }}
    />
  );
}
