import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import { useEffect } from "react";

interface RichTextEditorProps {
    content: string;
    onChange: (content: string) => void;
    onUploadImage?: (file: File) => Promise<string>;
}

const MenuBar = ({ editor, onUploadImage }: { editor: Editor; onUploadImage?: (file: File) => Promise<string> }) => {
    if (!editor) {
        return null;
    }

    const addImage = async () => {
        if (onUploadImage) {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/*";
            input.onchange = async (e) => {
                const file = (e.target as HTMLInputElement).files?.[0];
                if (file) {
                    try {
                        const url = await onUploadImage(file);
                        editor.chain().focus().setImage({ src: url }).run();
                    } catch (error) {
                        console.error("Failed to upload image within editor", error);
                        alert("Failed to upload image");
                    }
                }
            };
            input.click();
        } else {
            const url = window.prompt("Enter image URL");
            if (url) {
                editor.chain().focus().setImage({ src: url }).run();
            }
        }
    };

    const setLink = () => {
        const previousUrl = editor.getAttributes("link").href;
        const url = window.prompt("URL", previousUrl);

        if (url === null) {
            return;
        }

        if (url === "") {
            editor.chain().focus().extendMarkRange("link").unsetLink().run();
            return;
        }

        editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    };

    const activeClass = "bg-stone-200 text-stone-900";
    const baseClass = "p-2 rounded-lg text-stone-500 hover:bg-stone-100 hover:text-stone-700 transition-colors";

    return (
        <div className="flex flex-wrap gap-1 p-3 border-b border-stone-100 bg-stone-50/50 rounded-t-2xl items-center">
            {/* Bold / Italic */}
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`${baseClass} ${editor.isActive("bold") ? activeClass : ""}`}
                title="Bold"
            >
                <strong>B</strong>
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`${baseClass} ${editor.isActive("italic") ? activeClass : ""}`}
                title="Italic"
            >
                <em>I</em>
            </button>

            <div className="w-px h-6 bg-stone-200 mx-1 self-center" />

            {/* Headings H1 - H6 */}
            <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5, 6].map((level) => (
                    <button
                        key={level}
                        type="button"
                        onClick={() => editor.chain().focus().toggleHeading({ level: level as 1 | 2 | 3 | 4 | 5 | 6 }).run()}
                        className={`${baseClass} text-xs font-serif px-2 ${editor.isActive("heading", { level }) ? activeClass : ""}`}
                        title={`Heading ${level}`}
                    >
                        H{level}
                    </button>
                ))}
            </div>

            <div className="w-px h-6 bg-stone-200 mx-1 self-center" />

            {/* Colors */}
            <div className="flex gap-1 items-center px-1">
                <button
                    type="button"
                    onClick={() => editor.chain().focus().setColor("var(--colors-gray-900)").run()}
                    className={`w-5 h-5 rounded-full border border-stone-200 ${editor.isActive("textStyle", { color: "var(--colors-gray-900)" }) ? "ring-2 ring-stone-400" : ""}`}
                    style={{ backgroundColor: "var(--colors-gray-900)" }}
                    title="Gray 900"
                />
                <button
                    type="button"
                    onClick={() => editor.chain().focus().setColor("var(--primary-1)").run()}
                    className={`w-5 h-5 rounded-full border border-stone-200 ${editor.isActive("textStyle", { color: "var(--primary-1)" }) ? "ring-2 ring-stone-400" : ""}`}
                    style={{ backgroundColor: "var(--primary-1)" }}
                    title="Primary 1"
                />
            </div>

            <div className="w-px h-6 bg-stone-200 mx-1 self-center" />

            {/* Lists & Quote */}
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`${baseClass} ${editor.isActive("bulletList") ? activeClass : ""}`}
                title="Bullet List"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`${baseClass} ${editor.isActive("orderedList") ? activeClass : ""}`}
                title="Ordered List"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h12M7 12h12M7 17h12M3 7h.01M3 12h.01M3 17h.01" />
                </svg>
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`${baseClass} ${editor.isActive("blockquote") ? activeClass : ""}`}
                title="Quote"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            </button>

            <div className="w-px h-6 bg-stone-200 mx-1 self-center" />

            {/* Link & Image */}
            <button
                type="button"
                onClick={setLink}
                className={`${baseClass} ${editor.isActive("link") ? activeClass : ""}`}
                title="Link"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
            </button>
            <button
                type="button"
                onClick={addImage}
                className={baseClass}
                title="Image"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </button>
        </div>
    );
};

export function RichTextEditor({ content, onChange, onUploadImage }: RichTextEditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            TextStyle,
            Color,
            Image.configure({
                HTMLAttributes: {
                    class: "max-w-full my-6 py-4 px-1",
                },
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: "text-[var(--primary-1)] underline hover:opacity-80 transition-opacity",
                },
            }),
            Placeholder.configure({
                placeholder: "Write your post content here...",
            }),
        ],
        content,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: "prose prose-stone max-w-none focus:outline-none min-h-[300px] px-8 py-6",
            },
        },
    });

    // Handle external content updates
    useEffect(() => {
        if (editor && content !== editor.getHTML()) {
            if (editor.getText() === "" && content) {
                editor.commands.setContent(content);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [content, editor]);

    return (
        <div className="w-full bg-stone-50 border-none rounded-2xl overflow-hidden focus-within:ring-2 focus-within:ring-amber-200 ring-offset-2 transition-all">
            <MenuBar editor={editor as Editor} onUploadImage={onUploadImage} />
            <EditorContent editor={editor} className="cursor-text" />
            <style jsx global>{`
                .ProseMirror p.is-editor-empty:first-child::before {
                    content: attr(data-placeholder);
                    float: left;
                    color: #a8a29e;
                    pointer-events: none;
                    height: 0;
                }
                .ProseMirror ul {
                    list-style-type: disc;
                    margin-left: 1.5rem;
                }
                .ProseMirror ol {
                    list-style-type: decimal;
                    margin-left: 1.5rem;
                }
                
                /* H1: HERO Headers */
                .ProseMirror h1 {
                    font-family: var(--HERO-headers-font-family, serif);
                    font-size: var(--HERO-headers-font-size, 46px);
                    font-weight: var(--HERO-headers-font-weight, 800);
                    line-height: var(--HERO-headers-line-height, 1.3);
                    letter-spacing: var(--HERO-headers-letter-spacing, -0.92px);
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    color: var(--colors-gray-900);
                }
                
                /* H2: Content Header 2 */
                .ProseMirror h2 {
                    font-family: var(--content-header-2-font-family, sans-serif);
                    font-size: var(--content-header-2-font-size, 28px);
                    font-weight: var(--content-header-2-font-weight, 600);
                    line-height: var(--content-header-2-line-height, 1.25);
                    letter-spacing: var(--content-header-2-letter-spacing, -0.56px);
                    margin-top: 1.75rem;
                    margin-bottom: 0.75rem;
                    color: var(--colors-gray-900);
                }

                /* H3: Title */
                .ProseMirror h3 {
                    font-family: var(--title-font-family, sans-serif);
                    font-size: var(--title-font-size, 20px);
                    font-weight: var(--title-font-weight, 600);
                    line-height: var(--title-line-height, 1.4);
                    letter-spacing: var(--title-letter-spacing, -0.4px);
                    margin-top: 1.5rem;
                    margin-bottom: 0.5rem;
                    color: var(--colors-gray-900);
                }

                /* H4: Paragraph */
                .ProseMirror h4, .ProseMirror p {
                    font-family: var(--paragraph-font-family, sans-serif);
                    font-size: var(--paragraph-font-size, 18px);
                    font-weight: var(--paragraph-font-weight, 400);
                    line-height: var(--paragraph-line-height, 1.5);
                    letter-spacing: var(--paragraph-letter-spacing, 0px);
                    color: var(--colors-gray-900); /* Or paragraph color */
                }

                /* H5: Paragraph Title */
                .ProseMirror h5 {
                    font-family: var(--text-sm-font-medium-font-family, sans-serif);
                    font-size: var(--text-sm-font-medium-font-size, 14px);
                    font-weight: var(--text-sm-font-medium-font-weight, 500);
                    line-height: var(--text-sm-font-medium-line-height, 1.5);
                    margin-top: 1.25rem;
                    margin-bottom: 0.25rem;
                    color: var(--colors-gray-900);
                }

                /* H6: Literature */
                .ProseMirror h6 {
                    font-family: var(--text-xs-font-medium-font-family, sans-serif);
                    font-size: var(--text-xs-font-medium-font-size, 12px);
                    font-weight: var(--text-xs-font-medium-font-weight, 500);
                    line-height: var(--text-xs-font-medium-line-height, 1.5);
                    color: var(--colors-gray-500);
                    margin-top: 1rem;
                }

                .ProseMirror blockquote {
                    border-left: 4px solid #e7e5e4;
                    padding-left: 1rem;
                    margin-left: 0;
                    font-style: italic;
                    color: var(--colors-gray-700);
                }
            `}</style>
        </div>
    );
}
