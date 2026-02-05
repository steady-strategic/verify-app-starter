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
    const baseClass = "p-1.5 rounded-lg text-stone-500 hover:bg-stone-100 hover:text-stone-700 transition-colors";

    return (
        <div className="flex flex-wrap gap-1 p-2 border-b border-stone-200 bg-stone-50 rounded-t-lg items-center">
            {/* History */}
            <div className="flex gap-1 items-center">
                <button
                    type="button"
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().undo()}
                    className={`${baseClass} disabled:opacity-50`}
                    title="Undo"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().redo()}
                    className={`${baseClass} disabled:opacity-50`}
                    title="Redo"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6" /></svg>
                </button>
            </div>

            <div className="w-px h-5 bg-stone-300 mx-1" />

            {/* Typography Dropdown Simulation (Simplified to buttons for now for robustness) */}
            <div className="flex gap-1 items-center">
                <button
                    type="button"
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={`${baseClass} ${editor.isActive("paragraph") ? activeClass : ""}`}
                    title="Paragraph"
                >
                    P
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={`${baseClass} ${editor.isActive("heading", { level: 1 }) ? activeClass : ""}`}
                    title="Heading 1"
                >
                    H1
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={`${baseClass} ${editor.isActive("heading", { level: 2 }) ? activeClass : ""}`}
                    title="Heading 2"
                >
                    H2
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={`${baseClass} ${editor.isActive("heading", { level: 3 }) ? activeClass : ""}`}
                    title="Heading 3"
                >
                    H3
                </button>
            </div>

            <div className="w-px h-5 bg-stone-300 mx-1" />

            {/* Formatting */}
            <div className="flex gap-1 items-center">
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`${baseClass} ${editor.isActive("bold") ? activeClass : ""}`}
                    title="Bold"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h8a4 4 0 100-8H6v8zm0 0h8a4 4 0 110 8H6v-8z" /></svg>
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={`${baseClass} ${editor.isActive("italic") ? activeClass : ""}`}
                    title="Italic"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /><path d="M19 4h-9M14 20H5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={`${baseClass} ${editor.isActive("strike") ? activeClass : ""}`}
                    title="Strike"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /><path d="M4 12h16" strokeWidth={2} /></svg>
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    className={`${baseClass} ${editor.isActive("code") ? activeClass : ""}`}
                    title="Code"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </button>
            </div>

            <div className="w-px h-5 bg-stone-300 mx-1" />

            {/* Lists */}
            <div className="flex gap-1 items-center">
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={`${baseClass} ${editor.isActive("bulletList") ? activeClass : ""}`}
                    title="Bullet List"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /><circle cx="2" cy="6" r="1" /><circle cx="2" cy="12" r="1" /><circle cx="2" cy="18" r="1" /></svg>
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={`${baseClass} ${editor.isActive("orderedList") ? activeClass : ""}`}
                    title="Ordered List"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 6h11M9 12h11M9 18h11M5 6v12" /></svg>
                </button>
            </div>

            <div className="w-px h-5 bg-stone-300 mx-1" />

            {/* Blocks */}
            <div className="flex gap-1 items-center">
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={`${baseClass} ${editor.isActive("blockquote") ? activeClass : ""}`}
                    title="Quote"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().setHorizontalRule().run()}
                    className={`${baseClass}`}
                    title="Horizontal Rule"
                >
                    <div className="w-4 h-px bg-current mt-2"></div>
                </button>
            </div>

            <div className="w-px h-5 bg-stone-300 mx-1" />

            {/* Media */}
            <div className="flex gap-1 items-center">
                <button
                    type="button"
                    onClick={setLink}
                    className={`${baseClass} ${editor.isActive("link") ? activeClass : ""}`}
                    title="Link"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                </button>
                <button
                    type="button"
                    onClick={addImage}
                    className={baseClass}
                    title="Image"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </button>
            </div>

            <div className="w-px h-5 bg-stone-300 mx-1" />

            {/* Colors (Standard Set) */}
            <div className="flex gap-1 items-center px-1">
                <input
                    type="color"
                    onInput={(event) => editor.chain().focus().setColor((event.target as HTMLInputElement).value).run()}
                    className="w-8 h-8 p-0 border-0 rounded cursor-pointer"
                    title="Text Color"
                />
            </div>
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
                    class: "max-w-full my-6 py-4 px-1 rounded-lg",
                },
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: "text-blue-600 underline hover:opacity-80 transition-opacity",
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
            // Only update if content is meaningfully different to avoid cursor jumping
            // But for full reset/load, we compare.
            // Simplest check:
            if (Math.abs(content.length - editor.getHTML().length) > 5 || editor.getText() === "") {
                editor.commands.setContent(content);
            }
        }
    }, [content, editor]);

    return (
        <div className="w-full bg-white border border-stone-200 rounded-lg overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-amber-200 transition-all">
            <MenuBar editor={editor as Editor} onUploadImage={onUploadImage} />
            <EditorContent editor={editor} className="cursor-text" />
        </div>
    );
}
