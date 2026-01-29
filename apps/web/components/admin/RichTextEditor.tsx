import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
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
        <div className="flex flex-wrap gap-2 p-3 border-b border-stone-100 bg-stone-50/50 rounded-t-2xl">
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

            <div className="w-px h-6 bg-stone-200 mx-1 self-center" />

            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`${baseClass} ${editor.isActive("bulletList") ? activeClass : ""}`}
                title="Bullet List"
            >
                • List
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`${baseClass} ${editor.isActive("orderedList") ? activeClass : ""}`}
                title="Ordered List"
            >
                1. List
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`${baseClass} ${editor.isActive("blockquote") ? activeClass : ""}`}
                title="Quote"
            >
                ""
            </button>

            <div className="w-px h-6 bg-stone-200 mx-1 self-center" />

            <button
                type="button"
                onClick={setLink}
                className={`${baseClass} ${editor.isActive("link") ? activeClass : ""}`}
                title="Link"
            >
                Link
            </button>
            <button
                type="button"
                onClick={addImage}
                className={baseClass}
                title="Image"
            >
                Image
            </button>
        </div>
    );
};

export function RichTextEditor({ content, onChange, onUploadImage }: RichTextEditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Image.configure({
                HTMLAttributes: {
                    class: "rounded-xl my-6 border border-stone-100 shadow-sm mx-auto max-w-full",
                },
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: "text-amber-600 underline hover:text-amber-700",
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
                class: "prose prose-stone max-w-none focus:outline-none min-h-[300px] px-4 py-3",
            },
        },
    });

    // Handle external content updates (e.g. form reset)
    useEffect(() => {
        if (editor && content !== editor.getHTML()) {
            // Only update if content is significantly different to avoid cursor jumps
            // A simple check might be length, but here we just check equality.
            // However, this might loop.
            // Better to only set content if editor is empty or content changed from outside.
            // For now, let's assume one-way binding helps or simplistic comparison.
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
                .ProseMirror h2 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-top: 1.5rem;
                    margin-bottom: 0.5rem;
                }
                .ProseMirror h3 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-top: 1.25rem;
                    margin-bottom: 0.5rem;
                }
                .ProseMirror blockquote {
                    border-left: 4px solid #e7e5e4;
                    padding-left: 1rem;
                    margin-left: 0;
                    font-style: italic;
                }
                .ProseMirror img {
                    padding: 0.5rem; 
                    background: white;
                }
            `}</style>
        </div>
    );
}
